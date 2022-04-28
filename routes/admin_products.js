const router = require("../users/signIn");
var express = require('express');
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
const Joi = require('joi');

var ensureToken = require('../ensureToken')

const model = require("../models");
const Op = model.Sequelize.Op;
// app.js  /adminproduct

router.get('/all/:brand', function(req, res, next) 
{
 var brand = req.params.brand;
  // var page = req.params.page;
  // var limit = 20;
  // var startNum = (page -1) * 20;
   var sql = `SELECT COUNT(*) FROM products WHERE Brand = '${brand}';
             SELECT products.*, product_images.Image_Name 
             FROM products INNER JOIN product_images
             ON products.Id = product_images.Product_Id  WHERE products.Brand = '${brand}'`;
  db.query(sql, function(err, rows, fields) 
  {
    if (err) 
    {
      res.status(500).send({ error: 'Following Error Occured : ' + err });
      console.log('Followinng Error Occured : ' + err);
    }
    else
    {
      var obj1 = rows[0];
      var Records = obj1[0]["COUNT(*)"];
      res.json
      ({
        Records,  
        row : rows[1],
        
      });
      console.log('Products Displayed ');
      console.log('Total number of Records : ' + Records);
    }
  })
});

  /*post method for create product*/

  // app.js  /adminproduct

router.post('/create', ensureToken, function(req, res, next) 
{
   // fetch the request data
   const data = req.body;
   // define the validation schema
   const schema = Joi.object().keys
   ({
        name: Joi.string().required(),
        price : Joi.string().required(),
        retail: Joi.string().required(),
        condition: Joi.string().required(),
        description: Joi.string().required(),
        brand: Joi.string().required(),
      //  verification : 'Authenticated',
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
             var price = req.body.price;
             var retail = req.body.retail;
             var condition = req.body.condition;
             var description = req.body.description;
             var brand = req.body.brand;
             var verification = 'Authenticated'
             var id=0;

            var dataaa ={}
            var sql = `INSERT INTO products (P_Name,Price,Retail_Price,P_Condition,Description,Brand,Verification) 
            VALUES ("${name}", "${price}","${retail}","${condition}","${description}","${brand}","${verification}")`;
            db.query(sql, function(err, result) 
            {
             if(err) 
             {
               res.status(500).send({ err });
               console.log('Following Error Occured : ' + err);
             }
             else
             {
                res.json({'status': 'success'});
                console.log('Product Created ! ');
             }
              
    })
  }
  })
  });
  
  /*Admin Updatng A Specific Product*/
  router.put('/update/:id', ensureToken, function(req, res, next) 
  {

       
  // fetch the request data
 const data = req.body;

 // define the validation schema
  const schema = Joi.object().keys({
 
 
    //  id: Joi.number().integer().min(1).max(2000),
      name: Joi.string().required(),
      price : Joi.string().required(),
      retail: Joi.string().required(),
      condition: Joi.string().required(),
      description: Joi.string().required(),
      brand: Joi.string().required(),
     // verification : 'Authenticated',
     
 
  });
 
  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => {
 
      // create a random number as id
      //const id = Math.ceil(Math.random() * 9999999);
 
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
          var id = req.params.id;
          var name = req.body.name;
          var price = req.body.price;
          var retail = req.body.retail;
          var condition = req.body.condition;
          var description = req.body.description;
          var brand = req.body.brand;
        
          var sql = `UPDATE products SET  P_Name="${name}",Price="${price}",Retail_Price="${retail}",P_Condition="${condition}",Description="${description}",Brand="${brand}" WHERE Id=${id}`;
            db.query(sql, function(err, result) {
            if(err) {
            res.send('Following ERROR occured : ' + err);
            console.log('Following Error Occured : ' + err);
            }
            else
            {
             res.send('Product with ID ' + id + ' Updated');
             console.log('Product with ID ' + id + ' Updated');
            }
     })
     }
  }) 
  });
  
  /*delete method for delete product*/
  router.delete('/delete/:id', ensureToken, function(req, res, next) 
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
          res.status(422).json(
              {
               status: 'error',
               message: 'Invalid request data',
               data: data,
               error :err
              });
        } 
        else 
        {

                var id = req.params.id;
                var sql = `DELETE FROM products WHERE Id=${id}`;
                db.query(sql, function(err, result) 
                {
                  if(err) 
                  {
                    res.send('Folllowing Error Occured : ' + err);
                    console.log('Following Error Occured : ' + err);
                  }
                  else
                  {
                    res.send('Product with ID : ' + id + ' Deleted');
                    console.log('Product with ID : ' + id + ' Deleted');
                  }
                })
  }
  })
  });


//   router.get('/brand/:brand', function(req, res, next) 
// {
//   var brand = req.params.brand;
//   var page = req.params.page;
//   var limit = 20;
//   var startNum = (page -1) * 20;
//   var sql = `SELECT COUNT(*) FROM products ;
//              SELECT products.* , product_images.Image_Name 
//              FROM products INNER JOIN product_images 
//              ON products.Id = product_images.Product_Id WHERE brand = '${brand}'
//              ORDER BY Id limit ${limit} OFFSET ${startNum} `;
//   db.query(sql, function(err, rows, fields) 
//   {
//     if (err) 
//     {
//       res.status(500).send({ error: 'Following Error Occured : ' + err });
//       console.log('Followinng Error Occured : ' + err);
//     }
//     else
//     {
//       var obj1 = rows[0];
//       var Records = obj1[0]["COUNT(*)"];
//       res.json
//       ({
//         Records,  
//         rows,
        
//       });
//       console.log('20 Products Displayed on Page No : ' + page);
//       console.log('Total number of Records : ' + rows.length);
//     }
//   })
// });


module.exports = router;