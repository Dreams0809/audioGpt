const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

    userId:{
        type: String,
        required: true
    },
    
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
