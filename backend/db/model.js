const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    classname: {
        type: String,
        required: true,
    },

    school: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    }
    
},  { strict: false })


module.exports = mongoose.model("Profiles", schema)
