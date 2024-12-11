const { StatusCodes } = require("http-status-codes")
const dbconnection = require("../db/dbConfig")
const { v4: uuidv4 } = require("uuid")

const askQuestion = async (req, res) => {
    const { title, description, tag = null } = req.body;
    const {username, userid} = req.user;
    const questionid = uuidv4();

    //validate input 
    if(!title || !description){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide the required field"})
    };
    try {
        await dbconnection.query("INSERT INTO questions (questionid, userid, title, description, tag) VALUES (?, ?, ?, ?, ?)", [questionid, userid, title, description, tag]);
        return res.status(StatusCodes.CREATED).json({msg: "posted successfully"})
    } catch (error) {
        console.log("Database error", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Error ocured while asking question"})
    }
}
//Fetch questions from database
const getQuestions = async (req, res) => {

    try {
        const [response] = await dbconnection.query("SELECT id, questionid, userid, title, description FROM questions ORDER BY id DESC");
        console.log(response)
        return res.status(StatusCodes.OK).json({response})
    } catch (error) {
        res.status(500).json({msg:"error fetching question"})
    }
}

const QuestionDetail = async(req, res) => {
    const { questionId } = req.params;
    console.log(questionId)
    try {
        const [question] = await dbconnection.query("SELECT * FROM questions WHERE questionid = ?", [questionId])

        const [answers] = await dbconnection.query("SELECT * FROM answers WHERE questionid = ?", [questionId])

        if(!question){
            return res.status(StatusCodes.BAD_REQUEST).json({msg:"there is no any question!"})
        }

        return res.status(StatusCodes.OK).json({
            questions: question,
            answers: answers,
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:"Error at fetching question or answers"})
    }
}

module.exports = {askQuestion, getQuestions, QuestionDetail}