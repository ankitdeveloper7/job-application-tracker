const jwt = require("jsonwebtoken");




const authenticationJwt = (req, res, next)=>{
    const authhead = req.headers.authorization;

   if(authhead){
    const token = authhead.split(' ')[1];
    jwt.verify(token,process.env.SECRET, (err, user)=>{
        if(err){
            return res.sendStatus(200);
        }
        req.user = user;
        next();
    })
   }else{
    res.sendStatus(401);
   }

}

module.exports = authenticationJwt;