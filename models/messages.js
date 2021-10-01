const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messages_schema = new Schema({
    email:{
        type: String,
        required: true
    },
    theme:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{timestamps: true });

const Message = mongoose.model('Message', messages_schema);

module.exports = Message;