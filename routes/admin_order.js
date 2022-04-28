var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const Joi = require('joi');
//const postApproved = require('../app');
const postApproved = require('../app');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

var ensureToken = require('../ensureToken')

const model = require("../models");
const Op = model.Sequelize.Op;

//    Getting the List of all Orders


//   app.js    /adminorder

router.get('/all/:page',ensureToken,(req,res)=>{
    
          var page = req.params.page;
          var limit = 20;
          var startNum = (page -1) * 20;
          var sql = `SELECT COUNT(*) FROM orders;
                     SELECT * FROM orders ORDER BY Id limit ${limit} OFFSET ${startNum}`;
          db.query(sql, function(err, row, fields) {
            if(err) 
            {
              res.status(500).send({ error: err });
              console.log('Following Error Occured : ' + err);
            }
            else
            {
              var obj1 = row[0];
              var Records = obj1[0]["COUNT(*)"];
            console.log(row)
            res.json
            ({
              Records,
              row
            })
          }
          })

});


//   Getting A Speciific Order

//  app.js  /adminorder
/**router.get('/:id',ensureToken,(req,res)=>
{
    jwt.verify(req.token,'my_secret_key',function(err,data){{
        if(err)
        {
           // res.sendStatus(403);
           res.status(403).send({ error: 'Access Denied!' })
        }else
        {
          var id = req.params.id;
          var sql = `SELECT * FROM orders WHERE Id=${id}`;
          db.query(sql, function(err, row, fields) {
         if(err) 
         {
           res.status(500).send({ error: 'Something failed!' })
         }
          res.json(row)
    })       
    }
    }})
});

*/
//  Delete a Specific Order
router.delete('/delete/:id',ensureToken,(req,res)=>
{
    const data = req.body;
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
              var sql = `DELETE FROM orders WHERE Id=${id}`;
              db.query(sql, function(err, row, fields) 
              {
                if(err) 
                {
                  res.status(500).send({ error: 'Following Error Occured : ' + err });
                  console.log("Following Error Occured : " + err);
                }
                else
                {
                  res.send({message:"Deleted"});
                  console.log("Deleted!");
                }
              })
            }
  })
  });


//   app.js    /adminorder
 
router.post('/approveOrder/:id',ensureToken,(req,res)=>
{
            const id = req.params.id;
            db.query(`INSERT INTO approved_orders SELECT * FROM orders WHERE orders.Id=${id};
                      DELETE FROM orders WHERE orders.Id=${id}`,
            (err,result)=>
            {
              if(!err)
              {
                
                postApproved.f();
                
                console.log("Order Approved!");
                res.send("Order Approved!");
                
              }
              else
              {
                console.log("Following Error Occured : "+err);
                res.send("Following Error Occured : "+err);
              }
            });
});

router.get('/approved/:page',ensureToken,(req,res)=>
{
          var page = req.params.page;
          var limit = 20;
          var startNum = (page -1) * 20;
          var sql = `SELECT COUNT(*) FROM approved_orders;
                     SELECT * FROM approved_orders ORDER BY Id limit ${limit} OFFSET ${startNum}`;
          db.query(sql, function(err, row, fields) {
            if(err) 
            {
              res.status(500).send({ error: err });
              console.log('Following Error Occured : ' + err);
            }
            else
            {
              var obj1 = row[0];
              var Records = obj1[0]["COUNT(*)"];
            
            console.log(row)
            res.json
            ({
              Records,
              rows : row[1]
            })
          }
          })
});

module.exports = router;