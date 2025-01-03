const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken");
async function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        console.log("Authorization header missing or invalid formate")
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg:"Authentication invalid" })
    }
    const token = authHeader.split(" ")[1]
    try {
        const {username, userid} = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {username, userid}
        console.log("authenticated user", req.user)
        next()

    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg:"Authentication invalid" })
    }
}

module.exports = authMiddleware