const express = require('express');
var router = express.Router();
var connection = require('../db');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
const Joi = require('joi');

//    App.js Route    /signup
router.post('/buyer',(req,res)=>
{        
   // fetch the request data
   const data = req.body;
   // define the validation schema
   const schema = Joi.object().keys
   ({
       f_name: Joi.string().required(),
       l_name: Joi.string().required(),
       email: Joi.string().email({ minDomainAtoms: 2 }),
       psswrd: Joi.string().required().min(8),
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
         var f_name = req.body.f_name;
         var l_name = req.body.l_name;
         var email = req.body.email;
         var psswrd = req.body.psswrd;
         var sql = `SELECT * FROM customers WHERE Email=?`;
         connection.query(sql,[email],function(err,row)
         {
            if(err)
            {
             console.log(err);
             res.status(500).send({err})
            }
            else if(!row.length)
            {
              var status="buyer";
              var sql = `INSERT INTO customers (First_Name,Last_Name,Email,User_Password,Status) 
              VALUES (?,?,?,?,"${status}")`;
              connection.query(sql,[f_name,l_name,email,psswrd], function(err,result)
              {
                if(err)
                {
                  console.log(err);
                  res.status(500).send({error : "Following Error Occured : " + err});
                }
                else
                {
                  res.json({'status': 'New Buyer Created'});
                  console.log("New Buyer Created!");
                }
              })
            }
             else if(row.length>0)
            {
              res.json({message:"User already exist"})
              console.log("User already exist");
            }
         })
}
})
});




//   App.js  /signup
router.post('/seller',(req,res)=>
{

   const data = req.body;
   // define the validation schema
   const schema = Joi.object().keys(
       {
         f_name: Joi.string().required(),
         l_name: Joi.string().required(),
         email: Joi.string().email({ minDomainAtoms: 2 }),
         psswrd: Joi.string().required().min(8),
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
    } 
    else 
    {
      var f_name = req.body.f_name;
      var l_name = req.body.l_name;
      var email = req.body.email;
      var psswrd = req.body.psswrd;
      var status = "seller";
    var sql = `SELECT * FROM customers WHERE Email=?`;
    connection.query(sql,[email],function(err,row)
    {
        if(err)
        {
           console.log(err);
           res.status(500).send({err})
        }
        else 
        if(!row.length)
        {
            var sql = `INSERT INTO customers (First_Name, Last_Name,Email,User_Password,status) VALUES (?,?,?,?,"${status}")`;
            connection.query(sql,[f_name,l_name,email,psswrd], function(err,result){
                if(err)
                {
                    console.log(err);
                    res.send(err);
                }
                else
                {
                    res.json({'status': 'A new Seller Created'});
                    console.log("New Seller Created");
                }
            })

        }
        else if(row.length > 0)
        {
            res.send({message:"User already exist"});
            console.log("User already exist");
        }

    })

      }
})
});

   module.exports = router;
