const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customers_schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cart:{
        type: Array
    }
},{timestamps: true });

const Customer = mongoose.model('Customer', customers_schema);

module.exports = Customer;