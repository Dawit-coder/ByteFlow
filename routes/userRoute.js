const express = require("express");
const { register, login, checkUser } = require("../controller/userController");
const router = express.Router();
//Authentication Middleware
const authMiddleware = require("../middleware/authMiddleware")
//REGISTER ROUTE
router.post("/register", register)

//LOGIN
router.post("/login", login)

//Check User
router.get("/check", authMiddleware, checkUser)

module.exports = router