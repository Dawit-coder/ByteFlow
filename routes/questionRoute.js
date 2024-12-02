const express = require("express")
const { StatusCodes } = require("http-status-codes")
const router = express.Router()

const { askQuestion, getQuestions } = require("../controller/questionController");

//Authentication middleware
router.post("/ask-question", askQuestion)

router.get("/all-questions", getQuestions)

module.exports = router