const express = require("express");
const userRouter = express.Router();

const {registerUser, loginUser, logoutUser} = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/auth", authMiddleware);
userRouter.post("/logout", authMiddleware, logoutUser);

module.exports = userRouter;