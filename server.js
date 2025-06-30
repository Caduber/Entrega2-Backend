const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'hbs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"/views")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session(
    {
        secret: 'segredoo',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 6000, secure: false },
    }
));

function checkLogin(req, res, next) {
    if (req.session.logado) {
        next();
    }
    else{
        res.redirect('login');
    }
}


app.get("/", (req, res) => {
    if (req.session.logado == true) {
        res.render('index', {nome: req.session.nome});
    }
    else{
        res.send("Você não está logado, <a href=\"/login\">Clique aqui para fazer login</a>")
    }
});

app.get("/login", (req, res) => {
    req.session.logado = true;
    req.session.nome = "TADEUUUU"
    res.render('login');
});

app.listen(8080, () =>{
    console.log("Rodando!");
})
