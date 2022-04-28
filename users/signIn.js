const express = require('express');
var router = express.Router();
var connection = require('../db');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
//var ro = require('../app');
const Joi = require('joi');
const ensureToken = require('../ensureToken')
const jwt = require('jsonwebtoken')

const model = require("../models");
const Op = model.Sequelize.Op;
const Admin = model.admins;
const Customer = model.customers;




// App.js   /signin
router.post('/seller',(req,res)=>
{   
  const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys(
      {
        Email: Joi.string().email({ minDomainAtoms: 2 }),
        User_Password: Joi.string().required(),
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

        else {
          
          var Email = req.body.Email
          var User_Password = req.body.User_Password
          var condition = Email ? { Email: { [Op.like]: `%${Email}%` } } : null;


   
          Customer.findAll({ where: condition })
          .then(data => { 
   

           if(Email == data[0].Email && User_Password == data[0].User_Password){
             const token = jwt.sign({ Email }, 'my_secret_key');
               res.send(token)
         }
     
         else {
       
           res.send("wrong password")
   
         }
     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Admin."
      });
   });

          
        }
})
});


//    Seller Profile Updating

router.put('/updateUser/:id', ensureToken,function(req, res, next) 
{
  const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys
  ({
    f_name : Joi.string(),
    l_name: Joi.string(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password : Joi.string(),
  });

  // validate the request data against the schema
  Joi.validate(data, schema, (err, value) => 
  {
    if (err) 
    {
        res.status(422).json(
            {
              message: 'Invalid request data',
              error: err
            });
        console.log("Invalid Request Data : " + err);
    } 
    else 
    {
        var id = req.params.id;
        var f_name = req.body.f_name;
        var l_name = req.body.l_name;
        var email = req.body.email;
        var password =  req.body.password;
        var sql = `UPDATE customers SET  First_Name="${f_name}",Last_Name="${l_name}",Email="${email}",User_Password = "${password}" WHERE Id=${id}`;
          connection.query(sql, function(err, result) {
          if(err) 
          {
            res.status(500).send({ error: 'Following Error Occured : '+err });
            console.log("Following Error Occured : "+err);
          }
          else
          {
            res.send({text:"Profile Updated!"});
            console.log("Profile Updated!");
          }
   })
   
    }
}) 
});


router.post('/buyer',(req,res)=>
{   
  const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys(
      {
        Email: Joi.string().email({ minDomainAtoms: 2 }),
        User_Password: Joi.string().required(),
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

        else {
          
          var Email = req.body.Email
          var User_Password = req.body.User_Password
          var condition = Email ? { Email: { [Op.like]: `%${Email}%` } } : null;


   
          Customer.findAll({ where: condition })
          .then(data => { 
   
           if(Email == data[0].Email && User_Password == data[0].User_Password){
             const token = jwt.sign({ Email }, 'my_secret_key');
               res.send(token)
          }
     
         else {
       
           res.send("wrong password")
   
         }
     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Admin."
      });
   });

    }
})

});



//    Buyer Profile Updating

// router.put('/updateBuyer/:id', ensureToken, function(req, res, next) 
// {
  
//    // fetch the request data
//    const data = req.body;
//   // define the validation schema
//   const schema = Joi.object().keys
//   ({
//     f_name : Joi.string().required(),
//     l_name: Joi.string().required(),
//     email: Joi.string().email({ minDomainAtoms: 2 }),
//     password : Joi.string(),
//   });

//   // validate the request data against the schema
//   Joi.validate(data, schema, (err, value) => 
//   {
//      if (err) 
//      {
//          res.status(422).json(
//            {
//              status: 'error',
//              message: 'Invalid request data',
//              data: data
//            });
//          console.log("Invalid Request Data!");
//      } 
//      else 
//      {
//         jwt.verify(req.token,'my_secret_key',function(err,data)
//         {{
//            if(err)
//             { 
//               res.status(403).send({ error: 'Access Denied' });
//               console.log("Access Denied!");
//             }
//           else
//            {
//               var id = req.params.id;
//               var f_name = req.body.f_name;
//               var l_name = req.body.l_name;
//               var email = req.body.email;
//               var password = req.body.password;
        
//               var sql = `UPDATE customers SET  First_Name="${f_name}",Last_Name="${l_name}",
//               Email="${email}", User_Password = "${password}"  WHERE Id=${id}`;
//               connection.query(sql, function(err, result) 
//               {
//                 if(err) 
//                  {
//                    res.status(500).send({ error: 'Following Error Occured : '+err });
//                    console.log("Following Error Occured : "+err);
//                  }
//                 else
//                  {
//                    res.send({text:"Profile Updated!"});
//                    console.log("Profile Updated!");
//                  }
//               })
//            }
//         }})
//     }
// }) 
// });


//   Admin SignIn


//  App.js   /signin
router.post('/admin',(req,res)=>
{


  const data = req.body;
   // define the validation schema
   const schema = Joi.object().keys(
       {
         Admin_Email: Joi.string().email({ minDomainAtoms: 2 }),
         Admin_Password: Joi.string().required(),
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

         else {
           
           var Admin_Email = req.body.Admin_Email
           var Admin_Password = req.body.Admin_Password
           var condition = Admin_Email ? { Admin_Email: { [Op.like]: `%${Admin_Email}%` } } : null;


    
           Admin.findAll({ where: condition })
           .then(data => { 
    
            if(Admin_Email == data[0].Admin_Email && Admin_Password == data[0].Admin_Password){
              const token = jwt.sign({ Admin_Email }, 'my_secret_key');
                res.send(token)
          }
      
          else {
        
            res.send("wrong password")
    
          }
      
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Admin."
       });
    });

           
         }
})
    




   // var sql = `SELECT * FROM admins WHERE Admin_Email=?`;
    

    
    // connection.query(sql,[email],function(err,row)
    // {
    //     if(err)
    //     {
    //        console.log(err);
    //        res.status(500).send({err})
    //     }
    //     else if(!row.length)
    //     {
    //         console.log("Authentication Denied");
    //         res.status(401).send({"error":"Authentication Denied"})
            
    //     }
    //     else
    //     {
    //       console.log(psswrd);
    //       console.log(row[0].Admin_Password);
    //       console.log(row[0].Admin_Email);
    //       console.log(email);
    //       if(email == row[0].Admin_Email && psswrd == row[0].Admin_Password)
    //     {     
         
    //     }
    //     else
    //     {
    //       res.status(401).send({error:"Access Denied"})
    //       console.log("Access Denied")
    //     } }
 
    // })


})
module.exports = router;


