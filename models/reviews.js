const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews_schema = new Schema({
    customer_id:{
        type: String,
        required: true
    },
    product_id:{
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    stars:{
        type: Number,
        required: true
    }
},{timestamps: true });

const Review = mongoose.model('Review', reviews_schema);

module.exports = Review;