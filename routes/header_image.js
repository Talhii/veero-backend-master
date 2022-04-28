var express = require('express');
var router = express.Router();
var pool = require('../db')
var multer = require('multer')
var jwt = require('jsonwebtoken');
var fs = require('fs');
var sizeOf = require('image-size');
const resizeImg = require('resize-img');
const fsExtra = require('fs-extra')
const fileDir = '../../../var/www/admin/MVP/';
const fileDir2 = '../../../var/www/trader/MVP/';
const sharp = require('sharp');




var storage = multer.diskStorage(
{
    destination: function (req, file, cb) 
    {
      fs.mkdirSync('../../../var/www/Images', { recursive: true })  
        fs.mkdirSync('../../../var/www/admin/MVP', { recursive: true })  
        fs.mkdirSync('../../../var/www/trader/MVP', { recursive: true })   //   Creating A Directory If not exxist 
        cb(null, '../../../var/www/Images/')
    },
    
    filename: function (req, file, cb) 
    {
        var d = new Date();
        var time = d.getTime();
        cb(null, time + '_' + file.originalname)
    }
})

var upload = multer
({
    storage: storage
});


// Upload a photo

// app.js   

router.post('/',ensureToken,upload.single('image'), function (req, res, next) 
{

  if(!req.file)
  {
    console.log('Select an image to upload');
    res.send('Select an image to upload');
  }
  else
  {
    var image_name = req.file.filename;
    console.log('checking '+image_name);
    var id = 0;
    var dimensions = sizeOf('../../../var/www/Images/'+image_name);
    var actual_width = dimensions.width;
    var actual_height =dimensions.height;
    var reduced_height,reduced_width;
    if(actual_height>actual_width)
    {
      console.log('height greater'); 
      reduced_width=180;
      var aspect_ratio =  actual_height / actual_width ;
      reduced_height = reduced_width * aspect_ratio
    }
    else if(actual_height<actual_width)
    {
      console.log('width greater');
      reduced_height=180;
      var aspect_ratio =  actual_width / actual_height ;
      reduced_width = reduced_height * aspect_ratio
    }
    else if(actual_height==actual_width)
    {
      console.log('width and height is equal');
      reduced_height=180;
      reduced_width = 180;
    }
    fsExtra.emptyDirSync(fileDir);
    fsExtra.emptyDirSync(fileDir2);
    sharp('../../../var/www/Images/'+image_name)
    .resize(parseInt(reduced_width), parseInt(reduced_height))
    .toFile('../../../var/www/admin/MVP/'+image_name,()=>
    {
      fsExtra.emptyDir('../../../var/www/Images/');
      sharp('../../../var/www/admin/MVP/'+image_name)
    .resize(parseInt(reduced_width), parseInt(reduced_height))
    .toFile('../../../var/www/trader/MVP/'+image_name,()=>
    {
      console.log('Stored On Trader Side');
    });
    });
    console.log('Image Resized!');

    var product_id = req.body.id;

    pool.query("TRUNCATE TABLE header_images;INSERT INTO header_images(Image_Name) value (?)", 
               [image_name], 
               function(err, row, fields) 
    {
        if(err) 
        {
          console.log(err);
          res.send('Error While Uploading File : ' + image_name + ' ' + err);
        }
        else
        {
          console.log('Previous MVP deleted from database\n New MVP added!');
          res.send('Previous MVP Deleted from Database \n New MVP added!');
        }
    })
  }

});


//  app.js   /headerimage


router.get('/getimage',ensureToken ,function(request, response) 
{
  pool.query("select * from header_images ", function(err, result) 
  {

      response.send('/var/www/admin/MVP/'+result[0].Image_Name); // Send the image to the browser.
      console.log("MVP Displayed" + JSON.stringify(result));
    
    });
});



function ensureToken(req,res,next)
{
  
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined")
  {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
  }
  else 
  {
      res.sendStatus(403);
  }
}




module.exports = router;

