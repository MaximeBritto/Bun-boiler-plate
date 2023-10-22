const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true // add unique constraint
    },
    mdp: {
        type: String,
        required: true
    }
});

// add pre-save hook to hash password
userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('mdp')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.mdp, 10);
        this.mdp = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.plugin(uniqueValidator); // add uniqueValidator plugin

module.exports = mongoose.model('User', userSchema);

