const mongoose = require('mongoose');

const Example = mongoose.model('Example', new mongoose.Schema({ 
    var1: {
        type: String,
     },
    var2: {
        type: Number,
     },

    var3: {
        type: Date,
    },  
}, { timestamps: true }),"Example");


module.exports = Example