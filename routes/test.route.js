const express = require('express');
const { AddTest } = require('../controllers/Test/addTest');
const { GetTests } = require('../controllers/Test/getTests');
const { GetTest } = require('../controllers/Test/getTest');
const { DeleteTest } = require('../controllers/Test/deleteTest');
const { UpdateTest } = require('../controllers/Test/updateTest');

const { Updaterespense } = require('../controllers/ConsultTest/updaterespense');
const {  GetResults } =require('../controllers/ConsultTest/getResult')

const router =express.Router()

// add test 
router.post('/addTest',AddTest)

// get all test 
router.get('/getTest',GetTests)

// get single test 
router.get('/getTest/:id',GetTest)

// delete test 
router.delete('/deleteTest/:id',DeleteTest)

// update test 
router.put('/updateTest/:id',UpdateTest)

router.get('/getResult/:id',GetResults)

router.put('/updaterespense/:id',Updaterespense)



module.exports=router;