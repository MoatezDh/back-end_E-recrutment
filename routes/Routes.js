const express = require("express")

const router = express.Router();
const ExampleRouter = require("./Example");

 router.use("/example", ExampleRouter)

module.exports=router

