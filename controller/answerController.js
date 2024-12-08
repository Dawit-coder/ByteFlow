const { response } = require("express");
const dbconnection = require("../db/dbConfig")
const { StatusCodes } = require("http-status-codes")


const answerQuestion = async(req, res) =>{
    const { questionid } = req.params;
    const {answer, userid} = req.body;

    try {
        await dbconnection.query("INSERT INTO answers (userid, questionid, answer) VALUE (?, ?, ?)", [userid, questionid, answer])
        return res.status(StatusCodes.OK).json({msg:"answer posted successully"})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:"error at posting answer to db"})
    }
}

const getAnswers = async(req, res) => {
    const { userid } = req.body
    const { questionid } = req.params
    try {
        response = await dbconnection.query("SELECT answer FROM answers WHERE questionid = ? AND userid = ?", [questionid, userid])
        return res.status(StatusCodes.OK).json({response})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg:"error at fetching answer from database"})
    }
}


module.exports = {answerQuestion, getAnswers}