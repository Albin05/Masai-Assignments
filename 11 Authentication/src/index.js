const express = require("express");

const app = express();

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controllers");
const {register,login} = require("./controllers/auth.controllers");


app.use(express.json());

app.use("/users", userController);
app.post("/login", login);
app.post("/register", register);
app.use("/post", postController);

module.exports = app;