const jwt = require('jsonwebtoken')
const SECRET = 'sukar'



function verificaJWT(req, res, next){
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).end()
        
        req.usuarioId = decoded.usuarioId
        next()
    })
}