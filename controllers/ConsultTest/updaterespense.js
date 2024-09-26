const resultTest = require('../../models/resultTest/resultTest');
const candidateAnswer = require('../../models/resultTest/candidateAnswer');

const Updaterespense = async (req, res) => {
    console.log('result',req.body)
  try {
    const { id } = req.params;
    const { candidateAnswers } = req.body;
  
    let result = await resultTest.findOne({ idConsultTest: id });

    if (!result) {
      // If result not found, create a new one with the provided idConsultTest
      
      result = new resultTest({
        idConsultTest: id,
        candidates: [{ candidateAnswers: candidateAnswers,
            time: req.body.time,
            QuestionsDetails: req.body.QuestionsDetails }],
      });
    } else {
        result.candidates.push({  candidateAnswers: candidateAnswers,
            time: req.body.time,
            QuestionsDetails: req.body.QuestionsDetails });
    }
    //console.log('result',result.candidates)
    await result.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    
  }
};

module.exports = {
  Updaterespense,
};