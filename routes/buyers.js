var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const Joi = require('joi');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

var ensureToken = require('../ensureToken')
const model = require("../models");
const Op = model.Sequelize.Op;

// Buyer Searching For his Bid

//    app.js   /buyers

/**router.get('/viewBid/:id',ensureToken,(req,res,next)=>
{
   jwt.verify(req.token,'my_secret_key',function(err,data){{
   if(err)
    {
        res.status(403).send({ error: 'Access Denied' })
    }
    else
    {
      var id = req.params.id;
      var sql = `SELECT * FROM bids WHERE Id=${id}`;
      db.query(sql, function(err, row, fields) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(row)
    })
}
}})
});


//  Buyer Posting a Bid

//    app.s   /buyers

/**router.post('/bid',ensureToken,(req,res)=>
{

     
  jwt.verify(req.token,'my_secret_key',function(err,data){{

    if(err)
    {
        res.status(403).send({ error: 'Access Denied' })
    }else
    {
      
      var uid = req.body.uid;
      var uname= req.body.uname;
      var pid = req.body.pid;
      var bid = req.body.bid;
      var pname = req.body.pname;
      console.log(pname);
      
      var sql = `INSERT INTO bids (User_Id, User_Name,Product_Id,Bid,Product_Name) VALUES (?,?,?,?,?)`;
      db.query(sql,[uid,uname,pid,bid,pname] ,function(err, result) {
      if(err) {
                res.status(500).send({ err })
      }
      res.json({'status': 'success'})
    })
    
    }
}})

}
);


*/


/* Getting All Bids */

//  app.js    /buyers

/**router.get('/allBids/:id',ensureToken,function(req, res, next) {

  jwt.verify(req.token,'my_secret_key',function(err,data){{

    if(err)
    {
        res.sendStatus(403);
    }else{

      var id = req.params.id;
      var sql = `SELECT * FROM bids WHERE User_Id=${id}`;
      db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ err })
    }

    
    res.json(rows)
  })
  }
}})


});


/*get method for fetch single product*/
/**router.get('/:id',ensureToken, function(req, res, next) {

  jwt.verify(req.token,'my_secret_key',function(err,data){{

    if(err)
    {
        res.sendStatus(403);
    }else
    {
      var id = req.params.id;
      var sql = `SELECT * FROM buyers WHERE Buyer_Id=${id}`;
      db.query(sql, function(err, row, fields) {
        if(err) {
          res.status(500).send({ error: 'Something failed!' })
        }
        res.json(row[0])
      })
    
    }
}})
  
});
  
*/


  /*post method for create product*/
/**  router.post('/create', function(req, res, next) {
    var id = req.body.id;
    var name = req.body.name;
  //  var pid = req.body.pid;
  
    var sql = `INSERT INTO buyers (Buyer_Id, Buyer_Name) VALUES ("${id}", "${name}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
     res.json({'status': 'success'})
    })
  });
  
  /*put method for update product*/
 router.put('/update/:id', function(req, res, next) 
 {
    // fetch the request data
    const data = req.body;
    // define the validation schema
   const schema = Joi.object().keys
    ({
      id : Joi.number().integer().min(1).max(2000),
      name: Joi.string().required(),
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
        var name = req.body.name;
        var sql = `UPDATE buyers SET Buyer_Id="${id}", Buyer_Name="${name}" 
        WHERE Buyer_Id=${id}`;
        db.query(sql, function(err, result) 
        {
         if(err) 
         {
          res.status(500).send({ error: 'Following Error Occured : ' + err });
          console.log('Following Error Occured : ' + err);
         }
         else
         {
           console.log('Updated!');
           res.json({'status': 'Success'});
         }
        })
      }
      })
  });
  
  /*delete method for delete product*/
 router.delete('/delete/:id', function(req, res, next) 
 {
   // fetch the request data
   const data = req.body;
  // define the validation schema
  const schema = Joi.object().keys
  ({
       id : Joi.number().integer().min(1).max(2000),
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
        var sql = `DELETE FROM buyers WHERE Buyer_Id=${id}`;
        db.query(sql, function(err, result) 
        {
         if(err) 
         {
          res.status(500).send({ error: 'Following Error Occured : ' + err });
          console.log('Following Error Occured : ' + err);
         }
         else
         {
          res.json({'status': 'Deleted'});
          console.log('Deleted!');
         }
       })
      }
  })
  });

module.exports = router;
