const express = require("express");

const userController = require("./controllers/user.controllers.");

const app = express();

app.use(express.json());

app.use("/register", userController);

module.exports = app;