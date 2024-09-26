const resultTest = require('../../models/resultTest/resultTest');


const  GetResults = async (req, res) => {
    console.log("id",req.params.id)
  
    try {
        const data = await resultTest.findOne({idConsultTest:req.params.id})
        res.status(201).json(data);
      } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Server Error' });
      }
    };
  
 
  
  module.exports={
    GetResults
  }