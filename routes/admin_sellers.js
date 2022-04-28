const router = require("../users/signIn");
var express = require('express');
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
const Joi = require('joi');

// ADMIN Getting A List Of Sellers
var ensureToken = require('../ensureToken')

const model = require("../models");
const Op = model.Sequelize.Op;

// app.js   /adminsellers

router.get('/allSellers/:page',ensureToken,(req,res,next)=>
{
            var page = req.params.page;
            var limit = 20;
            var startNum = (page -1) * 20;
            var sql = `SELECT COUNT(*) FROM customers WHERE Status="seller";
                       SELECT * FROM customers WHERE Status="seller" 
                       ORDER BY Id limit ${limit} OFFSET ${startNum}`;
            db.query(sql, function(err, result) 
            {
              if(err) 
              {
                 console.log('Following Error Occured  : ' + err);
                 res.status(500).send({ err });
              }
              else
              {
                var obj1 = result[0];
                var Records = obj1[0]["COUNT(*)"];                
                res.json
                ({
                  Records,
                  result             
                });
                console.log('20 Sellers DIsplayed on Page No : ' + page);
              }
        })  
});


//  Getting A Specific  Seller
//     /adminsellers
router.get('/:id',ensureToken,(req,res,next)=>
{    
// fetch the request data
 const data = req.body;
 // define the validation schema
  const schema = Joi.object().keys
  ({
     id: Joi.number().integer().min(1).max(2000),
  });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => 
  {
      if (err) 
      {
          res.status(422).json
          ({
              status: 'error',
              message: 'Invalid request data',
              data: data,
              error : err
          });
      } 
      else 
      {
 
          var id = req.params.id;
          var sql = `SELECT * FROM customers WHERE Id=${id}`;
          db.query(sql, function(err, row, fields) {
          if(err) 
          {
            res.status(500).send({ error : 'Following Error Occured : ' + err });
            console.log('Following Error Occured ');
          }
          else
          {
            res.json(row);
            console.log(row);
          }
              
              
        })
    }
    })
    });


//   Admin Deleting A Seller
//    /adminsellers
router.delete('/delSeller/:id',ensureToken,(req,res,next)=>
{
       
// fetch the request data
 const data = req.body;

 // define the validation schema
  const schema = Joi.object().keys
  ({
     id: Joi.number().integer().min(1).max(2000),
   });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => 
  {
     
      if (err) 
      {
         res.status(422).json
          ({
              status: 'error',
              message: 'Invalid request data',
              data: data,
              error : err
          });
      } 
      else 
      {
                var id = req.params.id;
                var sql = `DELETE FROM customers WHERE Id=${id} AND Status = "seller"`;
                db.query(sql, function(err, result) 
                {
                  if(err) 
                  {
                    res.status(500).send({ err })
                  }
                  else
                  {
                    res.json({'status': 'Deleted'});
                    console.log('Deleted');
                  }
                })
            }
        })
    });

module.exports = router ;