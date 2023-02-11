const { Schema, model } = require('mongoose');
const { Category } = require('.');

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
    },
    category: [categorySchema]

});

const Transaction = model('Transaction', transactionSchema);