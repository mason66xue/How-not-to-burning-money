const jwt = require('jsonwebtoken');

//set token secret and expiration date
const secret = 'mysecretshhhhh';
const expiration = '1h';

module.exports = {
    //function for our authenticated routes
    authMiddleware: function (req, res, next){
        let token = req.query.token || req. headers.authorization;
        if (req.headers.authorization){
            token = token
            .split(' ')
            .pop()
            .trim();
        }
        if (!token){
            return res.status(400).json({message: 'You have no token!'});
        }
        try{
            const {data} = jwt.verify(token, secret, {maxAge: expiration});
            req.user =data;
        }catch {
            console.log('Invalid token');
            return res.status(400).json({message: 'Invalid token!'});
        }
        next();
    },
signToken: function ({username, email, _id}){
    const payload = {username,email, _id};

return jwt.sign({data: payload}, secret, {expiresIn: expiration});
},
};
