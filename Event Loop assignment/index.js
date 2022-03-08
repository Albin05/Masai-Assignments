const express = require("express");
const app = express();

// REST APIs

app.get("", function (req, res){
    res.send("hello");
});

app.get("/books", function (req, res){
    res.send({book_1: {name: "In Search of Lost Time", author: "Marcel Proust"}, book_2: {name: "Ulysses", author: "James Joyce"}, book_3: {name: "Don Quixote", author: "Miguel de Cervantes"}, book_4: {name: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez"}})
})


app.listen(5000, () => {
    console.log("listening on port 5000");
});
