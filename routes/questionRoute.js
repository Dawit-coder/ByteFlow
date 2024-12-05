const express = require("express")
const { StatusCodes } = require("http-status-codes")
const router = express.Router()

const { askQuestion, getQuestions, QuestionDetail } = require("../controller/questionController");

//Authentication middleware
router.post("/ask-question", askQuestion)

router.get("/all-questions", getQuestions)

router.get("/:questionId", QuestionDetail)

module.exports = router