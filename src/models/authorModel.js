const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( {
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:['Mr','Mrs','Miss'],
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:{
        type:String,
        required:true
    }

    
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
