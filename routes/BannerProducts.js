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

//    /bannersProducts  app.js

router.get('/showAll/:page',ensureToken,(req,res)=>
{
              var requestedId =req.body.id;
              console.log(requestedId);
              var page = req.params.page;
              var limit = 3;
              var startNum = (page -1) * limit;
  
              var sql = ` SELECT COUNT(*) FROM Banners;
              SELECT * FROM Banners, Banner_Products where Banners.Id='${requestedId}' 
              and Banner_Products.Banner_Id = '${requestedId}'
              ORDER BY Banner_Products.Id limit ${limit} OFFSET ${startNum};`;
              
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
                  console.log("Banner Products Displayed");  
                }
              }) 
});


// app.js      /bannersProducts
router.post('/create', ensureToken, function(req, res, next) 
{

  //const data = req.body;
  // define the validation schema
//   const schema = Joi.object().keys(
//       {
//         heading: Joi.string().required(),
//         description: Joi.string().required(),
//       });

//   // validate the request data against the schema
//   Joi.validate(data, schema, (err, value) => 
//   {
//     if (err) 
//     {
//         res.status(422).json(
//             {
//               status: 'error',
//               message: 'Invalid request data',
//               data: data,
//               error : err
//            });
//     } 
//     else 
//     {


           var brand_id = req.body.brand_id;
           var products = req.body.products;
           console.log(typeof products);
           products = products.split(',');
           products.forEach(databaseFunction);
           function databaseFunction(item,index)
           {
               var length = products.length;
               var sql = `INSERT INTO Banner_Products (Id,P_Name,Price,Retail_Price,P_Condition,Description,Brand,Verification,Lowest_Ask,Lowest_Bid)
               SELECT * FROM products WHERE products.Id = '${item}';
               UPDATE Banner_Products SET Banner_Id='${brand_id}' WHERE Banner_Products.Id ='${item}'`;
               connection.query(sql, function(err, result) 
               {
                 if(err) 
                 {
                   res.status(500).send({ err });
                   console.log(err);
                 }
                 else if(index == (length - 1))
                 {
                   res.json({'status': 'New Banner Product Created!'});
                   console.log("New Banner Product Created!");
                 }  
                 
               })
           }  
});
//});


// app.js      brands

// router.put('/update/:id', ensureToken, function(req, res, next) 
//   {
//     const data = req.body;
//     // define the validation schema
//     const schema = Joi.object().keys
//     ({
//        name: Joi.string().required(),
//        description: Joi.string().required(),
//      });
 
//     // validate the request data against the schema
//     Joi.validate(data, schema, (err, value) => 
//     {
//       if (err) 
//       {
//         res.status(422).json(
//         {
//               status: 'error',
//               message: 'Invalid request data',
//               data: data,
//               error : err
//         });
//         console.log("Invalid Request Data!");
//       } 
//       else 
//       {
//         jwt.verify(req.token,'my_secret_key',function(err,data)
//         {{
//            if(err)
//            {
//              res.status(403).send({ error: 'Access Denied' });
//              console.log('Access Denied!');
//            }
//            else
//            {
//              var id = req.params.id;
//              var name = req.body.name;
//              var description = req.body.description;
//              var sql = `UPDATE brands SET  Brand_Name="${name}",Brand_Description="${description}" 
//              WHERE Id=${id}`;
//              db.query(sql, function(err, result) 
//              {
//                if(err) 
//                {
//                  res.status(500).send({ error: 'Following Error Occured : ' +err });
//                  console.log("Following Error Occured : "+err);
//                }
//                else
//                {
//                  res.send({text:"Updated!"})
//                  res.send(result);
//                  console.log("Brand Updated");
//                }
//              })
// }
// }})
// }
// }) 
// });
  
// brands  
//   router.delete('/delete/:id', ensureToken, function(req, res, next) 
//   {
//     const data = req.params;
//     // define the validation schema
//     const schema = Joi.object().keys(
//         {
//           id: Joi.number().integer().min(1).max(2000),
//         });
 
//     // validate the request data against the schema
//     Joi.validate(data, schema, (err, value) => 
//     {
//       if (err) 
//       {
//         res.status(422).json(
//             {
//               status: 'error',
//               message: 'Invalid request data',
//               data: data,
//               error : err
//             });
//             console.log("Invalid Request Data!");
//       } 
//       else 
//       {
//         jwt.verify(req.token,'my_secret_key',function(err,data)
//         {{
//           if(err)
//            {
//              res.status(403).send({ error: 'Access Denied' });
//              console.log("Access Denied!");
//            }
//           else
//            {
//               var id = req.params.id;
//               var sql = `DELETE FROM brands WHERE Id=${id}`;
//               connection.query(sql, function(err, result) 
//               {
//                  if(err) 
//                   { 
//                     res.status(500).send({ error: 'Following Error Ocuured : ' + err });
//                     console.log('Following Error Occured : ' + err);
//                   }
//                   else
//                    {
//                      res.json({'status': 'Deleted'});
//                      console.log("Brand Deleted!");
//                    }              
//               })

//         }
//     }})
//   }
//   })
//   });

module.exports=router;