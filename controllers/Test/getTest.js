const test=require("../../models/skillTest/test");


const GetTest = async (req, res) => {
    
  
    try {
      const data = await  test.findOne({_id:req.params.id})
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Server Error' });
    }
  };
  
 
  
  module.exports={
    GetTest
  }