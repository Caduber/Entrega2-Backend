const express = require('express');
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/views")));

app.get("/", (req, res) => {
    
    res.send(path.join(__dirname, "/views/index.html"));
});

app.get("/painel", (req, res) => {
    res.send(path.join(__dirname, "/painel.html"))
});

app.listen(8080, () =>{
    console.log("Rodando!");
})
