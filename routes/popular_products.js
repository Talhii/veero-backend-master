var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const Joi = require('joi');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

/* Getting All Popular Products */

//  app.js    /popularProducts

router.get('/all/:page', function(req, res, next) 
{
  
  var page = req.params.page;
  var limit = 20;
  var startNum = (page - 1) * limit;
  var sql = `SELECT COUNT(*) FROM popular_products INNER JOIN popular_images ON popular_products.Id = popular_images.Product_Id;
  SELECT popular_products.*, popular_images.Image_Name 
  FROM popular_products INNER JOIN popular_images 
  ON popular_products.Id = popular_images.Product_Id 
  ORDER BY popular_products.Id limit ${limit} OFFSET ${startNum}`;
  db.query(sql, function(err, rows, fields) 
  {
    if (err) 
    {
      res.status(500).send({ error: 'Following Error Occured : ' + err });
      console.log('Following Error Occured : ' + err);
    }
    else
    {
      var obj1 = rows[0];
      var Records = obj1[0]["COUNT(*)"]; 
      var obj2 = rows[1];
      for ( let i = 0 ; i < obj2.length ; i ++)
      {
        obj2[i]['Image_Name'] = '/images/' +   obj2[i]['Image_Name'];
      }
      console.log(obj2[0]['Image_Name']);
      res.json
      (
        {
          Records,
          row : rows[1]
        }
      );
      console.log('20 Popular Products Displayed on Page No : ' + page);
    }

    
    
  })
});



//   Getting 10 Popular Products for DashBoard

//     /popularProducts

router.get('/dashboard', function(req, res, next) 
{
    var sql = `SELECT popular_products.* , popular_images.Image_Name 
    FROM popular_products INNER JOIN popular_images 
    ON popular_products.Id = popular_images.Product_Id LIMIT 5`;
    db.query(sql, function(err, rows, fields) 
    {
      if (err) 
      {
       res.status(500).send({ error: 'Following Error Occured : ' + err });
       console.log('Following Error Occured : ' + err);
      }
      res.json(rows);
      console.log('5 Popular Products Displayed on DaashBoard!');
    })
});


/* Getting  Popular Product By Id*/

//  app.js   /popularProducts

router.get('/:id', function(req, res, next) 
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
              error : err
        });
      } 
      else 
      {
 
        var id = req.params.id;
        var sql = `SELECT popular_products.* , popular_images.Image_Name  
        FROM popular_products INNER JOIN popular_images 
        ON popular_products.Id=${id} AND popular_images.Product_Id = ${id}`;
        db.query(sql, function(err, row, fields) 
        {
          if(err) 
          {
            res.status(500).send({ error: 'Something failed!' })
          }
          res.json(row[0])
        })
  }
  })
  });
  


  /*post method for create product*/

 //  app.js   /popularProducts

 router.post('/create',ensureToken ,function(req, res, next) 
 { 
   const data = req.body;
   const schema = Joi.object().keys
   ({
      pname: Joi.string().required(),
      description: Joi.string().required(),
      brandName: Joi.string().required(),
      catname: Joi.string().required(),
      retail: Joi.string().required(),
      color: Joi.string().required(),
 
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
              error : err
          });
      } 
      else 
      {
  
         var pname = req.body.pname;
         var description = req.body.description;
         var brandName= req.body.brandName;
         var catname = req.body.catname;
         var retail = req.body.retail;
         var color = req.body.color;
  
         var sql = `INSERT INTO popular_products 
                    (P_Name,Description,Brand,Category_Name,Retail,Color) 
                    VALUES ("${pname}" , "${description}" , "${brandName}" , 
                    "${catname}" , "${retail}" , "${color}")`;
    
     
         db.query(sql, function(err, result) 
         {
           if(err) 
           {
             res.send(err);
             console.log('Following Error Occured : ' + err);
           }
           else
           {
             res.json({'status': 'success'});
             console.log('Success');
           }
         })
  }
  })
  });
  
  /*put method for update product*/


  // app.js   /popularProducts


 router.put('/update/:id',ensureToken ,function(req, res, next) {
    
  
   
  // fetch the request data
 const data = req.body;

 // define the validation schema
  const schema = Joi.object().keys({
 
 
      pname: Joi.string().required(),
      description: Joi.string().required(),
      brandName: Joi.string().required(),
      catname: Joi.string().required(),
      retail: Joi.string().required(),
      color: Joi.string().required(),
 
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
      } else {
   // else part

  
    var id = req.params.id;
    var pname = req.body.pname;
    var description = req.body.description;
    var brandName= req.body.brandName;
    var catname = req.body.catname;
    var retail = req.body.retail;
    var color = req.body.color;

  
    var sql = `UPDATE popular_products SET  P_Name=${pname},Description=${description},Brand_Name=${brandName},Category_Name=${catname},Retail=${retail},Color=${color} WHERE Product_Id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {

        //console.log(err);
       res.send(err)
      }else
      {
        res.send({text:"Updated!"})
      }
     // res.json({'status': 'success'})
    })
      }
      })
  });
  
  /*delete method for delete product*/

 // app.js   /popularProducts

  router.delete('/delete/:id',ensureToken ,function(req, res, next) 
  {

     
  // fetch the request data
 const data = req.params;

 // define the validation schema
  const schema = Joi.object().keys({
 
 
      pname: Joi.string().required(),
      description: Joi.string().required(),
      brandName: Joi.string().required(),
      catname: Joi.string().required(),
      retail: Joi.string().required(),
      color: Joi.string().required(),
 
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
      } else {
   // else part

   







    var id = req.params.id;
    var sql = `DELETE FROM popular_products WHERE Product_Id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success'})
    })
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
  