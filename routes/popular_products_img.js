var express = require('express');
var router = express.Router();
var pool = require('../db')
var multer = require('multer')
var jwt = require('jsonwebtoken');
var fs = require('fs');
var sizeOf = require('image-size');
const resizeImg = require('resize-img');
const Joi = require('joi');
const fsExtra = require('fs-extra');
const sharp = require('sharp');


var storage = multer.diskStorage
({
    destination: function (req, file, cb) 
    {
      fs.mkdirSync('../../../var/www/Images', { recursive: true }) 
      fs.mkdirSync('../../../var/www/admin/images', { recursive: true })
      fs.mkdirSync('../../../var/www/trader/images', { recursive: true })
      cb(null, '../../../var/www/Images/')
    },
    
    filename: function (req, file, cb) 
    {
        var d = new Date();
        var time = d.getTime();
        cb(null, time + '_' + file.originalname)
    }
})

var upload = multer({
    storage: storage
});


// Upload a photo
//    app.js       /popularimage
router.post('/', ensureToken, upload.array('image',10), function (req, res, next) 
{
//  fsExtra.emptyDirSync('Images/');
//  console.log('Images Directory Empty');
if(req.files.length==0)
{
  console.log('Select an image to upload');
  res.send('Select an image to upload');
}
else
{
var check = 0;
  const lenght = req.files.length;
  for( let i = 0; i < lenght ; i++ )
  {
      var image_name = req.files[i].filename;
      var id = 0;
      var dimensions = sizeOf('../../../var/www/Images/'+image_name);
      var actual_width = dimensions.width;
      var actual_height =dimensions.height;
      var reduced_height,reduced_width;
 
      if(actual_height>actual_width)
      {
        console.log("height greater"); 
        reduced_width=180;
        var aspect_ratio =  actual_height / actual_width ;
        reduced_height = reduced_width * aspect_ratio
      }
      else if(actual_height<actual_width)
      {
        console.log("width greater");
        reduced_height=180;
        var aspect_ratio =  actual_width / actual_height ;
        reduced_width = reduced_height * aspect_ratio
      }
      else if(actual_height==actual_width)
      {
        console.log("width and height is equal");
        reduced_height=180;
        reduced_width = 180;
      }
  
  sharp('../../../var/www/Images/'+image_name)
  .resize(parseInt(reduced_width), parseInt(reduced_height))
  .toFile('../../../var/www/admin/images/'+image_name);
  console.log(image_name+' Image added to AdminImages');

  sharp('../../../var/www/Images/'+image_name)
  .resize(parseInt(reduced_width), parseInt(reduced_height))
  .toFile('../../../var/www/trader/images/'+image_name)

  console.log(image_name+' Image added to TraderImages');
  check ++ ;

  if(check == (lenght-1))
  {
    fsExtra.emptyDir('../../../var/www/Images/',(err)=>
{
if(!err)
{
   console.log('Images Directory Empty');
}
else
{
   console.log('Following Error Occured WHile Deleting Files From Images/ : ' + err);
}
});
  }

  console.log('Image Resized!');
 
 
  var pid = req.query.id;
  var brand = req.query.brand;
  
 
  pool.query("INSERT INTO popular_images value (?,?,?,?)",
  [ id, req.files[i].filename ,pid,brand], function(err, row, fields) 
  {
         if(err) 
         {
           console.log(err);
           res.send('Error While Uploading File : ' + req.files[i].filename + ' ' + err);
           return;
         }
         else if(i==(lenght-1))
         {
           res.send('Popular Product Images Added');
           console.log('Popular Product Images Added');
         }
  }   
  )}
  
  fsExtra.emptyDir('../../../var/www/Images/',(err)=>
  {
    if(!err)
    {
       console.log('Images Directory Empty');
    }
    else
    {
       console.log('Following Error Occured WHile Deleting Files From Images/ : ' + err);
    }
  });

}
});


//    Getting All Images From Popular Images
//    /popularimage

router.get('/getallimage/:page',ensureToken, function(req, response) 
{
  var page = req.params.page;
  var limit = 20;
  var startNum = (page - 1) * limit;
  pool.query(`select * from popular_images ORDER BY Id limit ${limit} OFFSET ${startNum}`, 
  function(err, result) 
  {
    if(!err)
    {
      response.send(result); // Send the image to the browser.
      console.log("Popular Brand Image Displayed!");
    }
    else
    {
      response.send('Following Error Occured  : ' + err);
      console.log('Following Error Occured : '+ err);
    }
  });
});


//    Getting 10 Images From Popular Products
//    /popularimage


router.get('/dashboard',ensureToken, function(request, response) 
{
   pool.query("select * from popular_images LIMIT 10 ", function(err, result) 
   {
      if(!err)
      {
        response.send(result); // Send the image to the browser.
        console.log("Popular Brand Image For DashBoard Displayed!");
      }
      else
      {
        console.log("Error in Displaying the Popular Brand Images is "+err);
        res.send("Error in Displaying the Popular Brand Images on DashBoard : "+err);
      }
    
    });
});


//   Getting the Popular Product Image By ID
//   /popularimage

router.get('/getimagebyid/:id',ensureToken, function(request, response) 
{

    // fetch the request data
 const data = req.params;

 // define the validation schema
 const schema = Joi.object().keys(
   {
      id: Joi.number().integer().min(1).max(2000),
 
   });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => 
  {
 
      if (err) 
      {
          // send a 422 error response if validation fails
              res.status(422).json({
              status: 'error',
              message: 'Invalid request data',
              data: data
          });
          console.log("Invalid Request Data");
      } 
      else 
      {
 
         var id = request.params.id;
         pool.query(`select * from popular_photos WHERE id =${id}`, function(err, result) {
         //  response.writeHead(200, {
         //     'Content-Type': 'image/jpeg'
         // });
         //console.log("HELLO");
         response.send(result); // Send the image to the browser.
         console.log("Popular Brand Image Displayed!");
         //  response.json({status : "OK"})
      });
  }
  })

  });


//    Popular Brand Image For Landing Page


router.get('/brandCatImage/:brand',ensureToken, function(request, response) 
{

    // fetch the request data
 const data = request.params;

 // define the validation schema
  const schema = Joi.object().keys(
  {
       brand : Joi.string().required(),
  
  });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => {
 
      if (err) 
      {
          // send a 422 error response if validation fails
          res.status(422).json({
              status: 'error',
              message: 'Invalid request data',
              data: data
          });
          console.log("Invalid Request Data");
      } 
      else 
      {

          var id = request.params.id;
          var brand = request.params.brand;

          pool.query(`select * from popular_images WHERE Brand ="${brand}" LIMIT 1`, function(err, result) {
          //  response.writeHead(200, {
          //     'Content-Type': 'image/jpeg'
          // });
          //console.log("HELLO");
          response.send(result); // Send the image to the browser.
          console.log("Popular Brand Image Displayed!");
          //  response.json({status : "OK"})
      });
  }
  })

  });


function ensureToken(req,res,next){
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined")
  {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
  }else {
      res.sendStatus(403);

  }
}




module.exports = router;

