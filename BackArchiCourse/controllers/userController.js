const USER = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Create and Save a new User
exports.create = (req, res) => {
    console.log(req.body);
    const postUser = req.body;
    const user = new USER({
        email: postUser.email,
        mdp: postUser.mdp,
    })
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred while creating the User."
        });
    });
}   


// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    USER.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred while retrieving users."
        });
    });
};



// Login user and return a JWT token
exports.login = (req, res) => {
    console.log("login");
    // Validate request
    if(!req.body.email || !req.body.mdp) {
        return res.status(400).send({
            message: "Username and password are required"
        });
    }
    // Find user by username
    USER.findOne({email: req.body.email})
        .then(user => {
            if(!user) {
                return res.status(401).send({
                    message: "Invalid username or password"
                });
            }
            // Check if password matches
            if (!bcrypt.compareSync(req.body.mdp, user.mdp)) {
                return res.status(401).send({
                    message: "Invalid username or password"
                });
            }
            // Generate JWT token
            const token = jwt.sign({id: user._id}, 'secretKey', {expiresIn: '1h'});
            res.send({auth: true, token: token});
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
