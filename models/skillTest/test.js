const mongoose = require('mongoose');
const Question = require('./question');

const Test = mongoose.model('Test', new mongoose.Schema({ 
    
     Experience:{
      type: String,
      required: true,
      enum: ['junior', 'senior','expert'],
     },
   NumberDays: {
      type: Number,
    
   }, 
   PointTotal: {
      type: Number,
    
   },  

   Stopwatch: {
      type: String,
      required:true,
    
     },
     TotalDuration: {
      type: Number,
      
   
   }, 

   description: {
      type: String,
      required:true,

   }, 
   language: {
      type: String,
      required: true,
      enum: ['Fr', 'En'],
     
     },  
     languageCandidate: {
      type: [String],   
      required:true,
     },  
    
        questions: {
         type: [Question.schema],
         default: []
       }, 
     title: {
      type: String,
  
   },

    

}, { timestamps: true }));


module.exports = Test