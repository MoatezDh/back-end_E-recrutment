const mongoose = require("mongoose");
const candidateAnswer = mongoose.model(
  "candidateAnswer",
  new mongoose.Schema(
    {
      name: {
        type: String,
        default: "Moatez",
      },

      candidateAnswers: {
        type: [],
        required: true,
      },
      

      QuestionsDetails: {
        type: [],
        required: true,
      },
      time: { type: Number },
    },
    { timestamps: true }
  )
);

module.exports = candidateAnswer;
