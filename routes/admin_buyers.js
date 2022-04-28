//const router = require("../users/signIn");
const Joi = require('joi');
var express = require('express');
const router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

var ensureToken = require('../ensureToken')

const model = require("../models");
const Op = model.Sequelize.Op;
const Customer = model.customers;

// ADMIN Getting A List Of Buyers

//  app.js   /adminbuyer

router.get('/count',(req,res)=>{
  Customer
  .findAndCountAll({
     where: {
        status: {
          [Op.like]: 'buyer'
        }
     },
     offset: 1,
     limit: 2
  })
  .then(data => {
    console.log(data.count);
    console.log(data.rows);
    //console.log(data.rows);
  }).catch(data =>{
    console.log(data)
  })
})

router.get('/all/:page',ensureToken,(req,res)=>
      {
            var page = req.params.page;
            var limit = 20;
            var startNum = (page - 1) * 20;
            console.log(startNum);
            var sql = `SELECT COUNT(*) FROM customers WHERE Status = "Buyer" ; 
            SELECT * FROM customers WHERE Status = "Buyer" 
            ORDER BY Id limit ${limit} OFFSET ${startNum}`;
            db.query(sql, function(err, result) 
            {
              if(err) 
               {
                res.status(500).send({ err });
                console.log('Followinng Error Occured : ' + err);
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
                console.log('20 Buyers Displayed on Page No : ' + page);
               }
        })   
});

// Getting A Specific Buyer

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
             
             Customer.findByPk(id)
             .then(data => {
               res.send(data);
              })
              .catch(err => {
                 res.status(500).send({
                    message: "Error retrieving Customer with id=" + id
                  });
                });
           }
})
});


//   Not Working

//  Deleting A Buyer
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
      const id = req.params.id;
 
      Customer.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Customer was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Customer with id=" + id
          });
        });
          }
     })    
});




module.exports = router ;