const express = require('express')

const router = express.Router();

const { answerQuestion, getAnswers } = require("../controller/answerController")


router.post("/:questionId", answerQuestion);

router.get("/get-answer", getAnswers);

module.exports = router;