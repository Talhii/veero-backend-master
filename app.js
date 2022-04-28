const express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());
var http = require('http').Server(app);
var io = require('socket.io')(http);
const socketioJwt = require('socketio-jwt');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const bodyparser = require('body-parser');

var bannerProductsRouter = require('./routes/BannerProducts');
var bannersRouter = require('./routes/Banners'); 
var brandImages = require('./routes/BrandsImages');
var productsRouter = require('./routes/products');
var buyerRouter = require('./routes/buyers');
var sellerRouter = require('./routes/seller');
var signUpRouter = require('./users/signUp');
const { json } = require('body-parser');
var signInRouter = require('./users/signIn');
var adminOrder = require('./routes/admin_order');
var adminProduct = require('./routes/admin_products');
var adminBuyer = require('./routes/admin_buyers');
var adminSeller = require('./routes/admin_sellers');
var adminSignUp = require('./users/admin_signup'); 
var bannerImage = require('./routes/banner1_image');
var headerImage = require('./routes/header_image');
var popularImage = require('./routes/popular_products_img');
var mpopularImage = require('./routes/most_popular_images');
var mostPopularProducts = require('./routes/most_popular_products');
var popularProducts = require('./routes/popular_products');
var productImages = require('./routes/product_images');
var brands = require('./routes/Brands');
const { normalize } = require('path');
const { cpuUsage } = require('process');
const { func } = require('joi');

app.use('/bannersProducts',bannerProductsRouter);
app.use('/banners',bannersRouter);
app.use('/BrandImages',brandImages);
app.use('/brands',brands);
app.use('/productImages',productImages);
app.use('/popularProducts',popularProducts);
app.use('/mostPopularProduct',mostPopularProducts);
app.use('/mostPopularImages',mpopularImage);
app.use('/headerimage',headerImage);
app.use('/banner1image',bannerImage);
app.use('/popularimage',popularImage);
app.use('/adminsignup',adminSignUp);
app.use('/adminsellers',adminSeller);
app.use('/adminbuyer',adminBuyer);
app.use('/adminproduct',adminProduct);
app.use('/adminorder',adminOrder);
app.use('/signin',signInRouter);
app.use('/signup',signUpRouter);
app.use('/sellers',sellerRouter);
app.use('/buyers',buyerRouter);
app.use('/allProducts', productsRouter);

app.use(express.json());
app.use(bodyparser.json());


const db = require("./models");
const Admin = db.admins;

const connection = require('./models/index');


app.get('/sequelize/connection',(req,res)=>{
    connection.sequelize.authenticate().then(() => {
        res.send("Connected")
        }).catch(() =>{
        console.log("Not connecting")
        })
})



http.listen(process.env.PORT || 3000,()=>console.log("Express is runing at 3000"));


app.post('/admins/create',(req,res)=>{
    if (!req.body.Admin_Name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const admin = {
        Admin_Name : req.body.Admin_Name,
        Admin_Email: req.body.Admin_Email,
        Admin_Password : req.body.Admin_Password
    };
  

    // Save Tutorial in the database
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
  })

app.get('/asks',function(req,res)
{
    var id = req.body.id;
    var sql = `SELECT * FROM asks WHERE User_Id = "${id}"`;
    db.query(sql,function(err,result)
    {
        if(err)
        {
            res.status(500).send({ err });
            console.log('Following Error Occured : ' + err);
        }
        else
        {
            res.status(200).json
            ({
                Records : result.length, 
                result 
            });
            console.log('All asks has been displayed!');
        }
    })
});

app.get('/userAsks/:id',function(req,res)
{
    var id = req.params.id;
    var sql = `SELECT * FROM asks WHERE User_Id = "${id}"`;
    db.query(sql,function(err,result)
    {
        if(err)
        {
            res.status(500).send({ err });
            console.log('Following Error Occured : ' + err);
        }
        else
        {
            res.status(200).json
            ({
                Records : result.length, 
                result 
            });
            console.log('All asks has been displayed!');
        }
    })
});

app.get('/bids',function(req,res)
{
    var id = req.body.id;
    var sql = `SELECT * FROM bids WHERE User_Id = "${id}"`;
    db.query(sql,function(err,result)
    {
        if(err)
        {
            res.status(500).send({ err });
            console.log('Following Error Occured : ' + err);
        }
        else
        {
            res.status(200).json
            ({
                Records : result.length, 
                result 
            });
            console.log('All bids has been displayed!');
        }
    })
});

app.get('/userBids/:id',function(req,res)
{
    var id = req.params.id;
    var sql = `SELECT * FROM bids WHERE User_Id = "${id}"`;
    db.query(sql,function(err,result)
    {
        if(err)
        {
            res.status(500).send({ err });
            console.log('Following Error Occured : ' + err);
        }
        else
        {
            res.status(200).json
            ({
                Records : result.length, 
                result 
            });
            console.log('All bids has been displayed!');
        }
    })
});

app.get('/search',function(req,res)
{
    res.sendFile(__dirname + '/search.html');
})

app.get('/viewaskbid',function(req,res)
{
    res.sendFile(__dirname + '/viewaskbid.html');

});

app.get('/orders',function(req,res)
{
    res.sendFile(__dirname + '/orders.html');

});


app.get('/enter',(req,res) =>
{
   res.sendFile(__dirname + '/enteraskbid.html');
});

app.post('/mail',(req,res) => 
{
    const to = req.body.email;
    var transporter = nodemailer.createTransport
    ({
        service: 'gmail',
        auth: 
        {
          user: 'usamachoudary234@gmail.com',
          pass: 'samsung8081105'
        }
      });

      var mailOptions = 
      {
        from: 'usamachoudary234@gmail.com',
        to: to,
        subject: 'Sending Email using Node.js',
        html : { path: 'email.html' }
      };

      transporter.sendMail(mailOptions, function(error, info)
      {
        if (error) 
        {
          console.log(error);
          res.send(error);
        } 
        else 
        {
          console.log('Email sent: ' + info.response);
          res.send('Email sent: ' + info.response);
        }
      });

})


var orders = []
var bids = []
var asks = []
var minimumask =[]
var maximumbid =[]



//  converted socket to (socket)  mycode

io.on('connection',socket=>
{

    console.log('New User Connected');

    //   My Code

//    showproducts()
  //  postApprovedOrders();
    socket.on('showProducts',(data)=>
    {
        console.log('Server Side Show Products : ' + data);
        showproducts(data);
    })

    socket.on('getimage',(data)=>
    {
        console.log('Sheikh : ' + JSON.stringify(data));
        getImage(data);
        //console.log('SSSHH : ' + JSON.stringify(image));
    });

    module.exports.f = function myFunc()
   {
     socket.emit('showupdatedorders');
   }
    
    // const postApprove= function myFunction()
    //  {
    //     //  console.log('Executing . . . ')
    //     //  socket.emit('showorders');
    //  }

    function getImage(data)
    {
       
        image = [];
        data.forEach(images);

        function images(item)
        {
            console.log('Checking : ' + item);
           
        db.query(`SELECT Image_Name FROM header_images WHERE Product_Name = '${item}'`)
        .on('result',function(data)
        {
            console.log("ehehe" + JSON.stringify(data));
            image.push(data)
            console.log('SSSHH : ' + JSON.stringify(image));
            socket.emit('returnimage',image);

        })
        .on('end',function()
        {
            console.log('SSSHH : ' + JSON.stringify(image));
            socket.emit('returnimage',image);
        })
             
        }
       
        
    }



    function showproducts(data)
    {
        products = []
        console.log('Show Products Function on Server Side');
        db.query(`SELECT Id, P_Name,Description FROM products WHERE P_Name LIKE '%${data}%'`)
        .on('result', function(data)
        {
            console.log('aaasas'+JSON.stringify(data));
         products.push(data)
        })
        .on('end', function()
        {
            console.log(JSON.stringify(products));
            socket.emit('returningProducts', products)     // returningAdmins
        })   
   }

    //My Code End




    showorders()
    casks()
    cbids()


    socket.on('showorders',function()
    {
       showorders()
    })

    socket.on('getask',function(data)
    {
        justshowasks(data.product)  
    })

    socket.on('getbid',function(data)
    {
        justshowbids(data.product)  
    })

    socket.on('getupdatedbid',function(data)
    {
        updatedshowbids(data.product)  
    })

    socket.on('getupdatedask',function(data)
    {
        updatedshowasks(data.product)  
    })

   

    function showorders()
    {
            orders = []
            db.query('SELECT * FROM orders')
            .on('result', function(data)
            {
              orders.push(data)
            })
            .on('end', function()
            {
              socket.emit('initial orders', orders)
            })   
    }

    socket.on('new bid',  (data)=>
    {
        const uid = data.userid;
        const product = data.productid;
        console.log(uid);
        console.log(product);

        db.query(`SELECT * FROM bids WHERE User_Id ='${uid}' AND Product_Id = '${product}'`,
        (err,row)=>
        {
            console.log(row.length);
            if(err)
            {
                console.log('Following Error Occured : ' + err);
            }
            else if(row.length > 0)
            {
                console.log('You can not place ask twice on same product.Must Update!');
                socket.emit('twice bid');
            }
            else
            {
            db.query('INSERT INTO bids (User_Id,User_Name,Product_Id,Bid,Product_Name) VALUES (?,?,?,?,?)',
            [data.userid,data.username,data.productid,data.bid,data.productname],function(err,rows)
            {
                if(err)
                {
                    console.log('Following error occured : ' + err);
                    socket.emit('BidNotPlaced');
                }
                else
                { 
                    console.log('checking');
                    socket.emit('Bid Placed');
                    socket.broadcast.emit('getagainbid',data.productid)
                    cbids()   
                }
            });
            }})
});

        socket.on('new ask', function(data)
        { 
            const uid = data.userids;
            const pid = data.productids;
           
            db.query(`SELECT * FROM asks WHERE User_Id ='${uid}' AND Product_Id='${pid}'`,
            (err,row)=>
            {
                
                if(err)
                {
                    console.log('Following Error Occured : ' + err);
                }
                else if(row.length > 0)
                {
                    console.log('You can not place ask twice on same Product. Update It!');
                    socket.emit('twice ask');
                }
                else
                {
                    db.query('INSERT INTO asks (User_Id,User_Name,Product_Id,Ask,Product_Name) VALUES (?,?,?,?,?)', [data.userids,data.usernames,data.productids,data.ask,data.productnames])
                    socket.broadcast.emit('getagainask',data.productids)
                   socket.emit('askplaced');
                    casks()
                }
            })
            
        })   


        socket.on('updatebid', function(data)
        {
            db.query(`update bids set Bid="${data.bid}" where User_Id="${data.userids}" and Product_Id="${data.productids}"`)
            socket.broadcast.emit('getagainbid',data.productids)
            cbids()   
            socket.emit('bidupdated');
         })
          
         socket.on('updateask', function(data)
         {
             console.log('Into Update Ask Server Side')
            db.query(`update asks set Ask="${data.ask}" where User_Id="${data.userids}" and Product_Id="${data.productids}"`,(err,rows)=>
            {
                if(err)
                {
                    console.log('Following Error Occured while Updating Ask : ' + err);
                }

            })
            socket.broadcast.emit('getagainask',data.productids)
            casks()   
            socket.emit('askupdated');
         })


        socket.on('comparebestask',function(product)
        {
           
                    minimumask =[]
                    db.query(`SELECT * FROM asks where Ask=(SELECT MIN(Ask) FROM asks where Product_Id="${product.productids}")`)
                   .on('result', function(data)
                   {
                     minimumask.push(data)
                   })
                   .on('end', function()
                   {
                       console.log(minimumask)
                       if(minimumask.length==0)
                       {
                         socket.emit('comparebestask2', 'Best Price Does not Exist');
                         console.log('Best Price does not exist!');                  
                       }
                       else
                       {
                         socket.emit('comparebestask2', minimumask)
            
                       }
                       
                   })    
            })    
                       
       

      

         
       

        socket.on('comparebestbid',function(product)
        {
            console.log(product);
            maximumbid =[]
            db.query(`SELECT * FROM bids where Bid=(SELECT MAX(Bid) FROM bids where Product_Id="${product}")`)
           .on('result', function(data)
           {
              maximumbid.push(data)
           })
           .on('end', function()
           {
               if(maximumbid.length == 0)
               {
                   
                   console.log(maximumbid.length);
                   console.log('Best Price Does Not Exist!');
                   socket.emit('comparebestbid2', 'Best Price Does Not Exist!')
               }
               else
               {
                  socket.emit('comparebestbid2', maximumbid)
                //    socket.emit('comparebestbid2', maximumbid)  
                //   socket.emit('comparebestbid2', maximumbid)
               }
                
           })    
       })
        socket.on('updateorders',function(data)
        {
            db.query('INSERT INTO orders (Buyer_Id,Buyer_Name,Seller_Id,Seller_Name,Price,Product_Id,Product_Name) VALUES (?,?,?,?,?,?,?)', [data.buyerid,data.buyername,data.sellerid,data.sellername,data.price,data.productid,data.productname])
            socket.broadcast.emit('showupdatedorders')
        })
        
        socket.on('delete',(data)=>
        {
            db.query('DELETE FROM asks where Id=?',data.askid)
            db.query('DELETE FROM bids where Id=?',data.bidid)  

            socket.broadcast.emit('getagainask',data.askingproductid)
            socket.broadcast.emit('getagainbid',data.bidingproductid)

        })
         

        socket.on('deletebestask',function(data)
        {
           db.query('DELETE FROM asks where Id=?',data.id)
           socket.broadcast.emit('getagainask',data.productid)
        })

        socket.on('deletebestbid',function(data)
        {
           db.query('DELETE FROM bids where Id=?',data.id)
           socket.broadcast.emit('getagainbid',data.productid)
        })

        socket.on('updateordersbestask',function(data)
        {
           db.query('INSERT INTO orders (Buyer_Id,Buyer_Name,Seller_Id,Seller_Name,Price,Product_Id,Product_Name) VALUES (?,?,?,?,?,?,?)', [data.buyerid,data.buyername,data.sellerid,data.sellername,data.price,data.productid,data.productname])
           casks()
           socket.broadcast.emit('showupdatedorders')
        })
    
        socket.on('updateordersbestbid',function(data)
        {
           db.query('INSERT INTO orders (Buyer_Id,Buyer_Name,Seller_Id,Seller_Name,Price,Product_Id,Product_Name) VALUES (?,?,?,?,?,?,?)', [data.buyerid,data.buyername,data.sellerid,data.sellername,data.price,data.productid,data.productname])
           cbids()
           socket.broadcast.emit('showupdatedorders')
        })

   
    
     function casks()
     {
        asks = []
        db.query('SELECT * FROM asks')
        .on('result', function(data)
        {
           asks.push(data)
        })
        .on('end', function()
        {
           socket.emit('compare', {ask1:asks , bid1:bids})
        }) 
     }

     function cbids()
     {
        bids = []
        db.query('SELECT * FROM bids')
            .on('result', function(data)
        {
            bids.push(data)
        })
        .on('end', function()
        {
           
           socket.emit('compare', 
           {
               ask1:asks , 
               bid1:bids
            })
        }) 
     }



     function justshowbids(product)
     {
        bids = []
        db.query('SELECT * FROM bids WHERE Product_Id=?',product)
            .on('result', function(data)
            {
                bids.push(data) 
            })
            .on('end', function()
            {
                socket.emit('initial bids',bids)
            }) 
     }

     function justshowasks(product)
     {
        
        asks = []
        db.query('SELECT * FROM asks WHERE Product_Id=?',product)
        .on('result', function(data)
        {
           asks.push(data)
        })
        .on('end', function()
        {
           socket.emit('initial asks', asks)  
        })    
     }    


     function updatedshowbids(product)
     {
        var newbids = []
        db.query('SELECT * FROM bids WHERE Product_Id=?',product)
            .on('result', function(data)
            {
               newbids.push(data) 
            })
            .on('end', function()
            {
               socket.emit('initial bids', newbids)
            }) 
     }

     function updatedshowasks(product)
     {
        var newasks = []
        db.query('SELECT * FROM asks WHERE Product_Id=?',product)
        .on('result', function(data)
        {
           newasks.push(data)
        })
        .on('end', function()
        {
           socket.emit('initial asks', newasks)  
        })
     }
})

     
function ensureToken(req,res,next)
{
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else 
    {
        res.sendStatus(403);
    }
}



app.get('/pagination/:page', function(req, res, next) 
{
    var page = req.params.page;
    let startNum = (page - 1) * 10;
    let LimitNum = 10;
    var query = `Select * from admins ORDER BY Admin_Id limit ${LimitNum} OFFSET ${startNum}`;
    db.query(query , function(err,rows, fields)
    {
      if (err) 
      {
        res.status(500).send({ error: 'Something failed!' })
      }
      else
      {      
         res.json(rows);
       // console.log('Rows : ' + rows);
      }
    })
  });
  
  app.get('/user/:id',function(req,res)
  {
      var id = req.params.id;
      var sql = `SELECT * FROM customers WHERE Id = '${id}'`;
      db.query(sql,(err,rows)=>
      {
          if(err)
          {
              res.status(500).send({ error : 'Something Failed!' });
              console.log(err);
          }
          else
          {
              res.json(rows);
          }
      })
  });

//module.exports =  app;