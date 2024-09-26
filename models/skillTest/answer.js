const mongoose = require('mongoose');

const Answer = mongoose.model('Answer', new mongoose.Schema({ 
 

     AnswerType: 
        {
            type: String,
            required: true,
            enum: ['Text', 'Image', 'Code Source'],
            default: 'Text'
      
          }
    ,

     CorrectAnswer: {
        type: Boolean,
        required:true,
        default: false,
     }, 

     ValueAnswer: {
        type: String,
        required:true,
     },  

}, { timestamps: true }));


module.exports = Answer