const { Schema, model } = require('mongoose');
const categorySchema = require('./Category');

const transactionSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    category: [categorySchema]

});

const Transaction = model('Transaction', transactionSchema);
module.exports = Transaction;