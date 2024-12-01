const express = require("express")
const { StatusCodes } = require("http-status-codes")
const router = express.Router()

const { askQuestion } = require("../controller/questionController");

//Authentication middleware
router.post("/ask-question", askQuestion)

module.exports = router