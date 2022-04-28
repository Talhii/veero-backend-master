module.exports = function ensureToken(req,res,next)
{
    var jwt = require('jsonwebtoken');
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        
        jwt.verify(req.token,'my_secret_key',function(err,data)
        {
           if(err)
           {
             res.status(403).send({ error: 'Access Denied' });
             console.log('Access Denied');
           }
        else
        {
            next();
        }

        })
    }
    else 
    {
        res.sendStatus(403);
    }

}



