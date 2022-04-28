var express = require('express');
var router = express.Router();
var pool = require('../db')
var multer = require('multer')
var jwt = require('jsonwebtoken');
var fs = require('fs');
var sizeOf = require('image-size');
const resizeImg = require('resize-img');
const Joi = require('joi');
const sharp = require('sharp');
const fsExtra = require('fs-extra');

var storage = multer.diskStorage({
    destination: function (req, file, cb) 
    {
        fs.mkdirSync('../../../var/www/Images', { recursive: true })
        fs.mkdirSync('../../../var/www/trader/images', { recursive: true })
        fs.mkdirSync('../../../var/www/admin/images', { recursive: true})
        cb(null, '../../../var/www/Images/')
    },
    filename: function (req, file, cb) {
        var d = new Date();
        var time = d.getTime();
        cb(null, time + '_' + file.originalname)
    }
})

var upload = multer({
    storage: storage
});


// Upload a photo
//    app.js       /mostPopularImages
router.post('/', ensureToken, upload.array('image',10), function (req, res, next) 
{
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
  .toFile('../../../var/www/admin/images/'+image_name)
 
  console.log(image_name + 'Image added to AdminImages');

  sharp('../../../var/www/Images/'+image_name)
  .resize(parseInt(reduced_width), parseInt(reduced_height))
  .toFile('../../../var/www/trader/images/'+image_name)
 
  console.log(image_name + 'Image added to TraderImages');
     


  console.log('Image Resized!');
 
  var id=0;
  var product_id = req.query.id;
  var brand = req.query.id;
  

  pool.query("INSERT INTO mpp_images value (?,?,?,?)", 
  [ id, image_name ,product_id,brand], function(err, row, fields) 
  {
         if(err) 
         {
           console.log(err);
           res.send('Error While Uploading File : ' + image_name + ' ' + err);
           return;
         }
         else if(i == (lenght - 1))
         {
           res.send('Most Popular Prouct Images Added');
           console.log('Most Popular Prouct Images Added');
         }
  }   
  )
}
  
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


// app.js    /mostPopularImages
//mpp_images
// router.get('/getallimage/:page',ensureToken, function(req, res) 
// {
//     var page = req.params.page;
//     var limit  = 20;
//     var startNum = (page - 1) * limit;
//     pool.query(`SELECT COUNT(*) FROM mpp_images;select * from mpp_images ORDER BY Image_Id limit ${limit} OFFSET ${startNum}`, 
//     function(err, result) 
//     {
//       if(err)
//       {
//         console.log('Following Error Occured : ' + err);
//         res.send('Following Error Occured : ' + err);
//       }
//       else
//       {
//         var obj1 = result[0];
//         var Records = obj1[0]["COUNT(*)"];
//         console.log("Most Popular Image Displayed!")
//         res.json
//         ({
//           Records ,
//           result
//         }); // Send the image to the browser.
//       }
//     });
// });

//  Displayiing First 10 images on Dashboard

//  Parent Route      /mostPopularImages

router.get('/dashboard',ensureToken, function(request, response) 
{
    pool.query("select * from mpp_images LIMIT 10", function(err, result) 
    {
      if(!err)
      {
        console.log("Most Popular Image Displayed!")
        response.send(result); // Send the image to the browser.
      }else
      {
        console.log("Error in Displaying mpp_images in dashboard "+err);
        res.send("Error : "+err);
      }
    });
});



//   /mostPopularImages

router.get('/getimage/:id',ensureToken, function(request, response) 
{

      
// fetch the request data
 const data = request.params;

 // define the validation schema
  const schema = Joi.object().keys({
 
 
      id: Joi.number().integer().min(1).max(2000),
 
     
 
  });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => {
 
      // create a random number as id
      //const id = Math.ceil(Math.random() * 9999999);
 
      if (err) {
          // send a 422 error response if validation fails
          res.status(422).json({
              status: 'error',
              message: 'Invalid request data',
              data: data
          });
          console.log("Invalid Request Data")
      } else {
 
 
  // else part



  var id = request.params.id;
  pool.query(`select * from mpp_images WHERE Product_Id =${id}`, function(err, result) {
    //  response.writeHead(200, {
     //     'Content-Type': 'image/jpeg'
     // });
      //console.log("HELLO");
      result[0].Image_Name = '/images/' + result[0].Image_Name;
      response.send(result[0].Image_Name); // Send the image to the browser.
      console.log(typeof result[0].Image_Name)
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

