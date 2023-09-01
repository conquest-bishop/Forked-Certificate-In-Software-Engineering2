const mongoose = require("mongoose")

const KycSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        
    },
    gender:{
        type: String
        
    },
    country:{
        type: String 
    },
    state:{
        type: String 
    },
    town:{
        type: String 
    },
    zip:{
        type: String 
    },
    phoneone:{
        type: Number 
    },
    phonetwo:{
        type: Number 
    },
    email:{
        type: String,
        unique: true 
    }
    
})

module.exports = mongoose.model('Kyc', KycSchema)






