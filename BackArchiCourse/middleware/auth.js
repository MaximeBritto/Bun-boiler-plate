const jwt = require('jsonwebtoken');


// create middleware for authentication
exports.authenticate = (req, res, next) => {
    console.log("authenticate");
    // Validate request
    if(!req.headers.authorization) {
        return res.status(401).send({
            message: "Unauthorized request 1"
        });
    }
    let token = req.headers.authorization//.split(' ')[1];
    console.log(token);
    if (token === 'null') {
        return res.status(401).send({
            message: "Unauthorized request 2"
        });
    }
    // Verify token
    let payload = jwt.verify(token, 'secretKey');
    console.log(payload);
    if (!payload) {
        return res.status(401).send({
            message: "Unauthorized request 3"
        });
    }
    //req.userId = payload.subject;
    next();
}

// const passport = require('passport');
// const passportJWT = require('passport-jwt');
// const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;

// // configure passport to use JWT strategy
// passport.use(new JWTStrategy({
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'secretKey'
// }, (jwtPayload, done) => {
//     // check if user exists in database
//     User.findById(jwtPayload.id)
//         .then(user => {
//             if (user) {
//                 // attach user object to request object
//                 done(null, user);
//             } else {
//                 done(null, false);
//             }
//         })
//         .catch(err => done(err, false));
// }));

// create middleware for authentication

