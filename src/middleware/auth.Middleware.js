const jwt = require('jsonwebtoken')

exports.verifyToken=(req, res,next)=>{
    const token =req.headers['x-access-token']


  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }

  jwt.verify(token,'secret',(err,data)=>{
    if(err){
        return res.status(403).send({message:'token not provided'})
    }
    req.userId = data.id
    next()
  })
}