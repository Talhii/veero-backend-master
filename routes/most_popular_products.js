var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const Joi = require('joi');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

const ensureToken = require('../ensureToken')
/* Getting All Most Popular Products */

//  app.js    /mostPopularProduct

router.get('/products/:page', function(req, res, next) 
{
  var page = req.params.page;
  var limit = 20;
  var startNum = (page - 1) * limit;
  var sql = `SELECT COUNT(*) FROM most_popular_products;
  SELECT most_popular_products.* , mpp_images.Image_Name 
  FROM most_popular_products INNER JOIN mpp_images
  ON most_popular_products.Id = mpp_images.Product_Id 
  ORDER BY most_popular_products.Id limit ${limit} OFFSET ${startNum} `;
  db.query(sql, function(err, rows, fields) 
  {
     if (err) 
     {
       console.log('Following Error Occured : ' + err);
       res.status(500).send({ error: 'Followiing Error Occured : ' + err });
     }
     else
     {
      var obj1 = rows[0];
      var Records = obj1[0]["COUNT(*)"]; 
      res.json
      (
        {
          Records,
          rows
        }
      );
      console.log('20 Products Displayed on Page : ' + page);
     }
  })
});

//  Getting 10 MOst Popular Products for DashBoard 
//  /mostPopularProduct

router.get('/dashboard' ,ensureToken, function(req, res, next) 
{
  var limit = 5;
  var sql = `SELECT most_popular_products.* , mpp_images.Image_Name 
  FROM most_popular_products INNER JOIN mpp_images
  ON most_popular_products.Id = mpp_images.Product_Id LIMIT ${limit}`;
  db.query(sql, function(err, rows, fields) 
  {
     if (err) 
     {
       res.status(500).send({ error: 'Followiing Error Occured : ' + err });
       console.log('Following Error Occured : ' + err);
     }
     res.json(rows);
     console.log('10 Most Popular Products Displayed on Dashboard');
  })
});


/* Getting Most Popular Product By Id*/
router.get('/:id', function(req, res, next) 
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
          message: 'Invalid request data!',
          data: data,
          error : err,
       });
       console.log('Invalid Request Data!');
    } 
    else 
    {
      
      var id = req.params.id;
      var sql = `SELECT most_popular_products.* , mpp_images.Image_Name 
      FROM most_popular_products INNER JOIN mpp_images 
      ON most_popular_products.Id = ${id} AND mpp_images.Product_Id = ${id}`;
      db.query(sql, function(err, row, fields) 
      {
        if(err) {
        res.status(500).send({ error: 'Following Error Occured : ' + err });
        console.log('Following Error Occured : ' + err);
      }
      res.json(row[0]);
      console.log('MPP Displayed with given ID');
      })
    }
  })

  });
  


  /*post method for create product*/
  //   /mostPopularProduct
 router.post('/create',ensureToken ,function(req, res, next) 
 {
   const data = req.body.products;
   // define the validation schema
  //  const schema = Joi.object().keys(
  //    {
  //      pname: Joi.string().required(),
  //      description: Joi.string().required(),
  //      brandName: Joi.string().required(),
  //      catname: Joi.string().required(),
  //      retail: Joi.string().required(),
  //      color: Joi.string().required(),
  //    });
 
  // // validate the request data against the schema
  // Joi.validate(data, schema, (err, value) => 
  // {
  //     if (err) 
  //     {
  //       res.status(422).json(
  //         {
  //             status: 'error',
  //             message: 'Invalid request data',
  //             data: data
  //         });
  //         console.log('Invalid Request Data!');
  //     } 
  //     else 
  //     {
        // var pname = req.body.pname;
        // var description = req.body.description;
        // var brandName= req.body.brandName;
        // var catname = req.body.catname;
        // var retail = req.body.retail;
        // var color = req.body.color;
        // length = data.length;
        var i=0;
        var length = data.length;;
        data.forEach(executon);
        function executon(element) {
         
          var sql = `INSERT INTO most_popular_products (P_Name,Price,Retail_Price,P_Condition,Description,Brand,Verification) 
          SELECT P_Name, Price,Retail_Price,P_Condition,Description,Brand,Verification FROM products WHERE products.Id = ${element};`;

         db.query(sql, function(err, result) 
          {
              try
              {
                if(err) 
                {
                      res.status(500).send({ error: 'Following Error Occured : ' + err });
                      console.log('Following Error Occured : ' + err);
                } else if(i==(length - 1))
                { 
                  res.json({'status': 'Most Popular Product Created!'});
                  console.log('Most Popular Product Created!');
                  i++;
                }
                i++;
                }catch(e)
                {
                  console.log('Following Error Occured : ' + e);
                  res.send('Following Error Ocured : ' + e);
                }
          })
        }
//      }
//  })

  });
  
 /*put method for update product*/
 router.put('/update/:id',ensureToken ,function(req, res, next) 
 {
    const data = req.body;
    // define the validation schema
    const schema = Joi.object().keys(
      {
        pname: Joi.string().required(),
        description: Joi.string().required(),
        brandName: Joi.string().required(),
        catname: Joi.string().required(),
        retail: Joi.string().required(),
        color: Joi.string().required(),
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
              data: data
            });
          console.log('Invalid Request Data');
      } 
      else 
      {
  
        var id = req.params.id;
        var pname = req.body.pname;
        var description = req.body.description;
        var brandName= req.body.brandName;
        var catname = req.body.catname;
        var retail = req.body.retail;
        var color = req.body.color;

  
        var sql = `UPDATE most_popular_products 
                  SET  P_Name=${pname},Description=${description},
                  Brand_Name=${brandName},Category_Name=${catname},
                  Retail=${retail},Color=${color} WHERE Product_Id=${id}`;
        
        db.query(sql, function(err, result) 
        {
          if(err) 
          {
            res.status(500).send({ error: 'Following Error Occured : ' + err });
            console.log('Following Error Occured : ' + err);
          }
          else
          {
            res.send({text:"Product Updated!"});
            console.log('Producted Updated!');
          }
        })
      }
    })
  });
  
  /*delete method for delete product*/
  router.delete('/delete/:id',ensureToken ,function(req, res, next) 
  {
    var id = req.params.id;
    var sql = `DELETE FROM most_popular_products WHERE Id=${id}`;
    db.query(sql, function(err, result) 
    {
      if(err) 
      {
        res.status(500).send({ error: 'Following Error Occured : ' + err });
        console.log('Following Error Occured : ' + err);
      }
      res.json({'status': 'Product Deleted!'});
      console.log('Product Deleted!');
    })
  });
  



  
  module.exports = router;
  