const test=require("../../models/skillTest/test");


const GetTests = async (req, res) => {
    
  
    try {
      const data = await test.find()
      res.status(201).json(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Server Error' });
    }
  };
  
 
  
  module.exports={
    GetTests
  }