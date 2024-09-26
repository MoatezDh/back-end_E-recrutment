const mongoose = require('mongoose');
const Answer = require('./answer');
const Question = mongoose.model('Question', new mongoose.Schema({ 
    

       Question: {
        type: String,
        required:true,
      
     },
    
       answers: {
        type: [Answer.schema],
        default: []
        
      }, 
         difficulty: {
            type: String,
            required: true,
            enum: ['Facile', 'Moyen','Difficile'],
            default: 'Facile'
    
     }, domain: {
        type: String,
        required:true,
     
     }, 

     duration: {
        type: Number,
        required:true,
       
     },  

     points: {
        type: Number,
        required:true,
     
     },  

     skill: {
        type: String,
        required:true,
      
     },  

     typeQuestion: {
        type: String,
        required: true,
        enum: ['QCM', 'Image', 'Code Source','VraiOuFaux','ChampLibre'],
        default: 'QCM'
  
      }

    
     
     
}, { timestamps: true }));


module.exports = Question