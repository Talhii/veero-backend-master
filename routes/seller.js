var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const Joi = require('joi');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

// Seller Searching For His Ask By Id

var ensureToken = require('../ensureToken')
const model = require("../models");
const Op = model.Sequelize.Op;

//  App.js   /sellers

/*router.get('/viewAsk/:id',ensureToken,(req,res,next)=>
{
   jwt.verify(req.token,'my_secret_key',function(err,data){{
   if(err)
    {
        res.status(403).send({ error: 'Access Denied' })
    }
    else
    {
      var id = req.params.id;
      var sql = `SELECT * FROM asks WHERE Ask_Id=${id}`;
      db.query(sql, function(err, row, fields) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(row[0])
    })
}
}})
});


/*get method for fetch single product*/
/**router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM sellers WHERE Seller_Id=${id}`;
    db.query(sql, function(err, row, fields) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(row[0])
    })
  });
  */

  /*Seller Putting An Ask*/
 
 // App.js   /sellers
/**  router.post('/createAsk', function(req, res, next) {
    
    var uid = req.body.uid;
    var uname = req.body.uname;
    var pid = req.body.pid;
    var ask = req.body.ask;
    var pname = req.body.pname;
    
  
    var sql = `INSERT INTO asks (User_Id, User_Name,Product_Id,Ask,Product_Name) VALUES ( ?,?,?,?,? )`;
    db.query(sql, [uid,uname,pid,ask,pname] ,function(err, result) {
      if(err) {
        res.status(500).send({ err })
      }
     res.json({'status': 'success'})
    })
  });
  
  /*Seller Updatig His Ask*/


//  App.js    /sellers
  router.put('/update/:id',ensureToken, function(req, res, next) 
  {
   
            var aid = req.params.id;
            var ask = req.body.ask;
            var sql = `UPDATE asks SET Ask =? WHERE Id=${aid}`;
            db.query(sql,[ask] ,function(err, result) 
            {
              if(err) 
              {
                res.status(500).send({ err });
                console.log(err);
              }
              else
              {
                res.json({'status': 'Updated!'});
                console.log('Updated!');
              }
          })
  });
  
  /*Seller Delleting his Ask*/

  // App.js    /sellers
  router.delete('/delete/:id',ensureToken, function(req, res, next) 
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
              data: data,
              error : err
          });
      } 
      else 
      {

              var id = req.params.id;
              var sql = `DELETE FROM asks WHERE Id=${id}`;
              db.query(sql, function(err, result) 
              {
              if(err) 
              {
                res.status(500).send({ error: 'Following Error Occured : ' + err });
                console.log('Following Error Occured : ' + err);
              }
              else
              {
                res.json({'status': 'Deleted!'});
                console.log('Deleted!');
              }
             })  
    }
    })
    });

  
module.exports = router;
  