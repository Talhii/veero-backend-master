const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
const Joi = require('joi');
const ensureToken = require('../ensureToken')

const model = require("../models");
const Admin = model.admins;

//   app.js route   /adminsignup   
router.post('/',ensureToken,(req,res)=>
{
      const data = req.body;
  // define the validation schema
      const schema = Joi.object().keys(
      {
         Admin_Name: Joi.string().required(),
         Admin_Email: Joi.string().email({ minDomainAtoms: 2 }),
         Admin_Password: Joi.string().required().min(8),
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
   
         if (!req.body.Admin_Name) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }

        
         const Admin_Name = req.body.Admin_Name;
         const Admin_Email = req.body.Admin_Email;
         const Admin_Password = req.body.Admin_Password;
        
          // Create a Tutorial
          const admin = {
              Admin_Name : Admin_Name,
              Admin_Email: Admin_Email,
              Admin_Password : Admin_Password
          };
            
          Admin.create(admin)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              console.log(err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Tutorial."
              });
            });

      }
})
});

module.exports = router;
