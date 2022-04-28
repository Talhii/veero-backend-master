
var express = require('express');
var router = express.Router();
var pool = require('../db')
var multer = require('multer')
var jwt = require('jsonwebtoken');
var fs = require('fs');
var sizeOf = require('image-size');
//const resizeImg = require('resize-img');
const Joi = require('joi'); 
const sharp = require('sharp');
const fsExtra = require('fs-extra');



var storage = multer.diskStorage({
    destination: function (req, file, cb) 
    {
      fsExtra.mkdirSync('../../../var/www/Images/', { recursive: true })
      fs.mkdirSync('../../../var/www/admin/images', { recursive: true })
      fs.mkdirSync('../../../var/www/trader/images', { recursive: true })
     // fs.mkdirSync('Compressed', { recursive: true })
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
//    app.js       /productImages
router.post('/', ensureToken, upload.array('image',10), function (req, res, next) 
{
   var dataa = req.files;
   console.log(typeof dataa);
   console.log(dataa);
  if(req.files.length==0)
  {
    console.log('Select an image to upload');
    res.send('Select an image to upload');
  }
  else
  {
  var check=0;
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
    .toFile('../../../var/www/trader/images/'+image_name);
    console.log(image_name+' Image added to TraderImages');
    check ++;
//     if(check == (lenght-1))
//     {
//       fsExtra.emptyDir('../../../var/www/Images/',(err)=>
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
//     }

 
  console.log('Image Resized!');
 
 
  var pid = req.query.id;
  var brand = req.query.brand;
  
 
  pool.query("INSERT INTO product_images value (?,?,?,?)",
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
           res.send('Product Image Added');
           console.log('Product Image Added');
         }
  }   
  )}
}
  
});

router.get('/getimagebyid/:id',ensureToken,function(req, response) 
{

 const data = req.params;
 const schema = Joi.object().keys
  ({
     id: Joi.number().integer().min(1).max(2000),
   });

 Joi.validate(data, schema, (err, value) => 
 {
    if (err) 
    {
      res.status(422).json
      ({
              status: 'error',
              message: 'Invalid request data',
              data: data,
              error : err,
      });
          console.log("INvalid REquest Data")
      } 
      else 
      {
 
         var id = req.params.id;
         pool.query(`select * from product_images WHERE Product_Id =${id}`, 
         function(err, result) 
         {
           if(err)
           {
             console.log(err)
            }
            else
            {
            //  result[0].Image_Name = 'images/' + result[0].Image_Name;
               response.send(result); // Send the image to the browser.
               console.log("Image Displayed! "+JSON.stringify(result));}
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

