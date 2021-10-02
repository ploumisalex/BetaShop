const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products_schema = new Schema({
    category:{
        type: String,
        required: true
    },
    sub_category:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: Object,
        required: true,
        properties:{
            rate:{
                type: Number,
                required: true
            },
            count:{
                type:Number,
                required: true
            }
        }
    },
    img:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
},{timestamps: true });

const Product = mongoose.model('Product', products_schema);

module.exports = Product;