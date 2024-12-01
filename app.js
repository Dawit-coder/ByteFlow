const express = require('express');
require("dotenv").config()
const app = express();

const port = 5000;

const cors = require('cors')

app.use(cors())

//db connection
const dbconnection = require("./db/dbConfig")

//User Route middleware file
const userRoutes = require("./routes/userRoute");

//Use question route middleware file
const questionRoutes = require("./routes/questionRoute");

//authentication middleware
const authMiddleware = require('./middleware/authMiddleware');


// json middleware to extract json data
app.use(express.json())

//Use Route middleware 
app.use("/api/users", userRoutes)

//question Route middleware 
app.use("/api/questions", authMiddleware, questionRoutes)

//answer Route middleware file


async function start(){
    try {
        const result = await dbconnection.execute("select 'test' ")
        await app.listen(port)
        console.log("database connection established")
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log(error.message)       
    }
}
start();

