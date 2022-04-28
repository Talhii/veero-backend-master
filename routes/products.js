var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const Joi = require('joi');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all products. */

//  App.js     with Pagination  /allProducts
router.get('/:page', function(req, res, next) 
{

    var page = req.params.page;
    let startNum = (page - 1) * 10;
    let LimitNum = 20;
    var query = `SELECT COUNT(*) FROM products;
    Select products.*, product_images.Image_Name 
    from products INNER JOIN product_images 
    ON products.Id=product_images.Product_Id ORDER BY Id limit ${LimitNum} OFFSET ${startNum}`;
    db.query(query , function(err,rows, fields)
    {
      if (err) 
      {
        res.status(500).send({ error: 'Following Error Occured : '+ err });
        console.log('Following Error Occured : ' + err);
      }
      else
      {      
        for(var i = 0 ; i < rows.length ; i ++ )
        {
          rows[i].Image_Name = 'var/www/admin/' + rows[i].Image_Name;
        }
        var obj1 = rows[0];
        var Records = obj1[0]["COUNT(*)"];
        res.json
        ({
          Records ,
          rows : rows[1]
        });
        // var obj1 = rows[0];
        // var Records = obj1[0]["COUNT(*)"];
        console.log(Records);
        //console.log('20 Products Displayed on Page : ' + page);
    
      }
    })
  })



/*get method for fetch single product*/
router.get('/singleProduct/:id', function(req, res, next) 
{
  const data = req.params;
  const schema = Joi.object().keys
  (
    {
       id: Joi.number().integer().min(1).max(2000),
    });
 
  Joi.validate(data, schema, (err, value) => 
  {
       if (err) 
       {
              res.status(422).json(
                {
                   status: 'error',
                   message: 'Invalid request data',
                   error: err
                });
       } 
       else 
       {
           var id = req.params.id;
           var sql = `Select products.*, product_images.Image_Name 
           from products INNER JOIN product_images 
           ON products.Id = ${id} AND product_images.Product_Id = ${id}`;
           db.query(sql, function(err, row, fields) 
           {
              if(err) 
              {
                res.status(500).send({ error: 'Following Error Occured : ' + err });
                console.log('Following Error Occured : ' + err);
              }
              else
              {
                res.json(row[0]);
                console.log('Product Displayed!');
              }
            
            })
        }
  })
  });
  


  /*post method for create product*/
  router.post('/create', function(req, res, next) 
  {
    var name = req.body.name;
    var price = req.body.price;
    var retail = req.body.retail;
    var condition = req.body.condition;
    var description = req.body.description;
    var brand = req.body.brand;
    var verification = req.body.verification;
    var lask = req.body.lask;
    var lbid = req.body.lbid;
    
  //  var price = req.body.price;
  
    var sql = `INSERT INTO products (P_Name,Price,Retail_Price,P_Condition,Description,Brand,Verification) VALUES ("${id}", "${name}")`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
     res.json({'status': 'success'})
    })
  });
  
  module.exports = router;
  