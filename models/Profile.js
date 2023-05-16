const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    userId:{
        type: String,
        required: true
    },
    
    userName:{
        type: String
        ref: "User"
    
    email:{
        type: String
        ref: "User"
    },
    
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Profile', ProfileSchema);
