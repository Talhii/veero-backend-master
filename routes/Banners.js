const Joi = require('joi');
var express = require('express');
const router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const { Router } = require('express');
const connection = require('../db');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

var ensureToken = require('../ensureToken')

const model = require("../models");
const Op = model.Sequelize.Op;

//    /banners  app.js
router.get('/showAll/:page',(req,res)=>
{
      
              var page = req.params.page;
              var limit = 5;
              var startNum = (page -1) * limit;
              var sql = `SELECT COUNT(*) FROM Banners;
              SELECT Banners.* , banner_images.Image_Name 
              FROM Banners INNER JOIN banner_images ON Banners.Id = banner_images.Banner_Id 
              ORDER BY Banners.Id limit ${limit} OFFSET ${startNum}`;
              db.query(sql, function(err, result) 
              {
                if(err) 
                {
                  res.status(500).send({ err })
                  console.log(err);
                }
                else
                { 
                  var obj1 = result[0];
                  var Records = obj1[0]["COUNT(*)"];
                  res.json
                  ({
                    Records ,
                    result
                  });
                //  console.log(result);
                  console.log("4 Banners Displayed on Page : " + page);  
                }
              })
            
  
});


//     /banners
router.get('/getSingleBanner/:id',ensureToken,(req,res)=>
{
    var id = req.params.id;
     var sql = `SELECT Banners.* , banner_images.Image_Name 
            FROM Banners INNER JOIN banner_images 
            ON Banners.Id=${id} AND banner_images.Banner_Id=${id}`;
            db.query(sql, function(err, result) {
            if(err) 
            {
              res.status(500).send({ err })
              console.log(err);
            }
            res.json({result});
            console.log("Banner Displayed");  
    })
});


// app.js      /banners
router.post('/create', ensureToken, function(req, res, next) 
{
  const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys
  (
      {
        heading: Joi.string().required(),
        description: Joi.string().required(),
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
    } 
    else 
    {
          var heading=req.body.heading;
          var description = req.body.description;
           var sql = `INSERT INTO Banners (Heading,Banner_Description) 
          VALUES ("${heading}", "${description}")`;
           connection.query(sql, function(err, result) 
           {
             if(err) 
             {
               res.status(500).send({ err });
               console.log(err);
             }
             else
             {
               res.json({'status': 'New Banner Created!'});
               console.log("New Banner Created!");
             }  
             
           })  
}
});
});


// app.js      /banners
router.put('/update/:id', ensureToken, function(req, res, next) 
  {
    const data = req.body;
    // define the validation schema
    const schema = Joi.object().keys
    ({
       heading: Joi.string(),
       description: Joi.string(),
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
        console.log("Invalid Request Data!");
      } 
      else 
      {
      
             var id = req.params.id;
             var heading = req.body.heading;
             var description = req.body.description;
             var sql = `UPDATE Banners SET  Heading="${heading}",Banner_Description="${description}" 
             WHERE Id=${id}`;
             db.query(sql, function(err, result) 
             {
               if(err) 
               {
                 res.status(500).send({ error: 'Following Error Occured : ' +err });
                 console.log("Following Error Occured : "+err);
               }
               else
               {                
                 res.send("Banner Updated");
                 console.log("Banner Updated");
               }
             })
}
}) 
});
  
// banners  
  router.delete('/delete/:id', ensureToken, function(req, res, next) 
  {
    const data = req.params;
    // define the validation schema
    const schema = Joi.object().keys
    (
        {
          id: Joi.number().integer().min(1).max(2000),
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
            console.log("Invalid Request Data!");
      } 
      else 
      {
        
              var id = req.params.id;
              var sql = `DELETE FROM Banners WHERE Id=${id}`;
              connection.query(sql, function(err, result) 
              {
                 if(err) 
                  { 
                    res.status(500).send({ error: 'Following Error Ocuured : ' + err });
                    console.log('Following Error Occured : ' + err);
                  }
                  else
                   {
                     res.json({'status': 'Deleted'});
                     console.log("Banner Deleted!");
                   }              
              })
  }
  })
  });


module.exports=router;