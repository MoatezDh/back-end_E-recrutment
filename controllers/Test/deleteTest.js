const test=require("../../models/skillTest/test");



const DeleteTest = async (req, res) => {
   
  
    try {
      const Test = await test.deleteOne({_id:req.params.id});
      res.status(200).json({message:"suprumer avec succèes  "});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
 
  
  module.exports={
    DeleteTest
  }