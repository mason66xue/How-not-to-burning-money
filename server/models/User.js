const {Schema, model} = require('mongoose');
import {transactionSchema} from './Transaction.js';
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/.+@.+\..+/,'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    transactions: [transactionSchema]

});

const User = model('User', userSchema);

module.exports = User;