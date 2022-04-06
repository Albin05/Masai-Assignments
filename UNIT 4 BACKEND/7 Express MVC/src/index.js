const express = require("express");
const app = express();

app.use(express.json());


const submissionControllers = require("./controllers/submission.controllers");

app.use("/submissions", submissionControllers);


module.exports = app;

