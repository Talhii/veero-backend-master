var express = require('express');
var router = express.Router();
var pool = require('../db')
var multer = require('multer')
var fs = require('fs');
var sizeOf = require('image-size');
//const resizeImg = require('resize-img');
const Joi = require('joi');
const sharp = require('sharp');
const fsExtra = require('fs-extra');


var ensureToken = require('../ensureToken')
const model = require("../models");
const Op = model.Sequelize.Op;

var storage = multer.diskStorage(
    {
      destination: function (req, file, cb) 
    {
      fsExtra.emptyDirSync('../../../var/www/Images/');
      console.log('Images Directory Empty');
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

var upload = multer(
    {
      storage: storage
    });


// Upload a photo
//    app.js       /BrandImages
router.post('/:brand', ensureToken, upload.single('image'), function (req, res, next) 
{
  if(!req.file)
  {
    console.log('Select an image to upload');
    res.send('Select an image to upload');
  }
  else
  {
  
      var image_name = req.file.filename;
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
  .toFile('../../../var/www/admin/images/'+image_name,(err)=>{
    if(!err)
    {
      fsExtra.emptyDirSync('../../../var/www/Images/');
      console.log('Inside toFile and Images is Empty');
      sharp('../../../var/www/admin/images/'+image_name)
      .resize(parseInt(reduced_width), parseInt(reduced_height))
      .toFile('../../../var/www/trader/images/'+image_name,(err)=>{
        if(!err)
        {
          //fsExtra.emptyDirSync('Images/');
          console.log('Inside toFile and Images is Empty');
        }
      });
    }
  });
  console.log('Image Resized!');
  var brand = req.params.brand;
  pool.query("INSERT INTO Brand_Images value (?,?,?)",
  [ id, req.file.filename ,brand], function(err, row, fields) 
  {
         if(err) 
         {
           console.log(err);
           res.send('Error While Uploading File : ' + req.file.filename + ' ' + err);
           return;
         }
         else 
         {
           res.send('Brand Image Added');
           console.log('Brand Image Added');
         }
  }   
  )
}
  
  // fsExtra.emptyDir('Images/',(err)=>
  // {
  //   if(!err)
  //   {
  //      console.log('Images Directory Empty');
  //   }
  //   else
  //   {
  //      console.log('Following Error Occured WHile Deleting Files From Images/ : ' + err);
  //   }
  // });
  
  


});


// router.get('/getimage',ensureToken, function(request, response) 
// {
//   //  var page = req.params.page;
//   //  let startNum = (page - 1) * 20;
//   //  let LimitNum = 20;
//    pool.query(`select * from Brand_Images`,// ORDER BY Id limit ${LimitNum} OFFSET ${startNum} `, 
//    function(err, result) 
//    {
//       response.send(result); // Send the image to the browser.
//       console.log("Brand Image Displayed!");
    
//    });
//});


//       /BrandImages
router.get('/getimage/:brand',ensureToken, function(req, response) 
{
   const data = req.params;
   // define the validation schema
   const schema = Joi.object().keys(
     {
        brand : Joi.string().required(),
     });
 
   // validate the request data against the schema
   Joi.validate(data, schema, (err, value) => 
   {
      if (err) 
      {
        res.status(422).json(
          {
              status: 'error',
              message: 'Invalid request data',
              data: data,
              error : err
          });
          console.log("Invalid Request Data")
      } 
      else 
      {
         var brand = req.params.brand;
         pool.query(`select * from Brand_Images WHERE brand ='${brand}'`, 
         function(err, result) 
         {
           response.send(result); // Send the image to the browser.
           console.log('Image of Brand ' + brand + ' Displayed');
    
         });
      }
  })

  });


module.exports = router;

