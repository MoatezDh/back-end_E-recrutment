const test=require("../../models/skillTest/test");




const AddTest = async (req, res)=>{
    console.log(req.body)
    
    const newTest= new test(req.body);
   
    
 try {
   await newTest.save()
   console.log(newTest)
    res.status(201).json(newTest)
 } catch (error) {
    res.status(404).json( {message: error.message})
 }
};


module.exports={
  AddTest
}