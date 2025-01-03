const { response } = require("express");
const dbconnection = require("../db/dbConfig")
const { StatusCodes } = require("http-status-codes")


const answerQuestion = async(req, res) =>{
    const { questionId } = req.params;
    console.log(questionId)
    const {answer, userid, username} = req.body;
    console.log(answer, userid)

    try {
        await dbconnection.query("INSERT INTO answers (userid, username, questionid, answer) VALUES (?, ?, ?, ?)", [userid, username, questionId, answer])
        return res.status(StatusCodes.OK).json({msg:"answer posted successully"})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:"error at posting answer to db", error})
        console.log(questionId, answer, userid)
    }
}

const getAnswers = async(req, res) => {
    const { userid } = req.body
    const { questionid } = req.params
    try {
        const [response] = await dbconnection.query("SELECT answer, username FROM answers WHERE questionid = ? AND userid = ?", [questionid, userid])
        return res.status(StatusCodes.OK).json({response})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:"error at fetching answer from database"})
    }
}


module.exports = {answerQuestion, getAnswers}