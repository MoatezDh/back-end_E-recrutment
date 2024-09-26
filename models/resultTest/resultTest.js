const mongoose = require('mongoose');
const candidateAnswer = require('./candidateAnswer');

const resultTest = mongoose.model('resultTest', new mongoose.Schema({ 
        
    idConsultTest: {
        type: String,
        required:true,

 },

    
       candidates:{
       type: [candidateAnswer.schema],
       required:true,
     }, 
      
        
}, { timestamps: true }));


module.exports = resultTest