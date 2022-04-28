//const router = require("../users/signIn");
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

//    /brands   app.js

router.get('/showAll/:page',ensureToken,(req,res)=>
{
              var page = req.params.page;
              var limit = 20;
              var startNum = (page -1) * limit;
              var sql = `SELECT COUNT(*) FROM brands;
              SELECT brands.* , Brand_Images.Image_Name 
              FROM brands INNER JOIN Brand_Images ON brands.Brand_Name = Brand_Images.Brand 
              ORDER BY Id limit ${limit} OFFSET ${startNum}`;
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
                  console.log("Brands Displayed");  
                }
              })  
});


//     /brands

router.get('/getSingleBrand/:name',ensureToken,(req,res)=>
{
    var name = req.params.name;
            var sql = `SELECT brands.* , Brand_Images.Image_Name 
            FROM brands INNER JOIN Brand_Images 
            ON brands.Brand_Name='${name}' AND Brand_Images.Brand = '${name}'`;
            db.query(sql, function(err, result) {
            if(err) 
            {
              res.status(500).send({ err })
              console.log(err);
            }
            res.json({result});
            console.log("Brands Displayed");  
    })
});


// app.js      /brands


router.post('/create', ensureToken, function(req, res, next) 
{

  const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys(
      {
        name: Joi.string().required(),
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
           var name = req.body.name;
           var description = req.body.description;
           
           var sql = `INSERT INTO brands (Brand_Name,Brand_Description) 
           VALUES ("${name}", "${description}")`;
           connection.query(sql, function(err, result) 
           {
             if(err) 
             {
               res.status(500).send({ err });
               console.log(err);
             }
             else
             {
               res.json({'status': 'New Brand Created!'});
               console.log("New Brand Created!");
             }  
             
}) 
}
})
});


// app.js      brands

router.put('/update/:id', ensureToken, function(req, res, next) 
  {
    const data = req.body;
    // define the validation schema
    const schema = Joi.object().keys
    ({
       name: Joi.string().required(),
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
        console.log("Invalid Request Data!");
      } 
      else 
      {
      
             var id = req.params.id;
             var name = req.body.name;
             var description = req.body.description;
             var sql = `UPDATE brands SET  Brand_Name="${name}",Brand_Description="${description}" 
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
                 res.send({text:"Updated!"})
                 res.send(result);
                 console.log("Brand Updated");
               }
             })
}
}) 
});
  
// brands  
router.delete('/delete/:id', ensureToken, function(req, res, next) 
{
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
              var sql = `DELETE FROM brands WHERE Id=${id}`;
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
                     console.log("Brand Deleted!");
                   }              
              })
             }
  })
});

module.exports=router;