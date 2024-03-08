const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        match: [/^[A-Za-z]+$/, 'Character not valid']
    },
    last_name: {
        type: String,
        required: true,
        match: [/^[A-Za-z]+$/, 'Character not valid']
    },
    phone: {
        type: String,
        match: [/^[0-9]+$/, 'Phone number not valid']
    },
    gender: {
        type: String,
        enum: ['Male','Female']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email not valid']
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        /*statics: {
            encryptPassword: async (password) => {
                // salt es un parametro que recibe la función hash para filtrar la contraseña, es único.
                const salt = await bcrypt.genSalt(15);
                return await bcrypt.hash(password, salt);
            },
            isValidPassword: async(password, hash) => {
                return await bcrypt.compare(password, hash);
            },
            createToken: async (payload) => {
                return jwt.sign(payload, process.env.JWT_SIGN, {expiresIn: '1h'})
            }
        }*/
    }
)


const User = mongoose.model('users', userSchema);

module.exports = {
    User
}