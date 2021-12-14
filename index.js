const express = require("express");
const ejs = require("ejs");

const app = express()

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/movies', function(req, res) {
  res.render('../views/movies.ejs');
});

app.get('/series', function(req, res) {
  res.render('../views/series.ejs');
});

app.get('/suggestion', function(req, res) {
  res.render('../views/suggestion.ejs');
});

app.get('/21', function(req, res) {
    res.render('../views/21.ejs');
});

app.get('/allamerican', function(req, res) {
    res.render('../views/allamerican.ejs');
});

app.get('/cinderella', function(req, res) {
    res.render('../views/cinderella.ejs');
});

app.get('/f9', function(req, res) {
    res.render('../views/f9.ejs');
});

app.get('/greatestshowman', function(req, res) {
    res.render('../views/greatestshowman.ejs');
});

app.get('/hkills', function(req, res) {
    res.render('../views/hkills.ejs');
});

app.get('/homealone', function(req, res) {
    res.render('../views/homealone.ejs');
});

app.get('/jane', function(req, res) {
    res.render('../views/jane.ejs');
});

app.get('/jumanji', function(req, res) {
    res.render('../views/jumanji.ejs');
});

app.get('/lastsong', function(req, res) {
    res.render('../views/lastsong.ejs');
});

app.get('/moneyheist', function(req, res) {
    res.render('../views/moneyheist.ejs');
});

app.get('/nerve', function(req, res) {
    res.render('../views/nerve.ejs');
});

app.get('/oth', function(req, res) {
    res.render('../views/oth.ejs');
});

app.get('/outerbanks', function(req, res) {
    res.render('../views/outerbanks.ejs');
});

app.get('/pll', function(req, res) {
    res.render('../views/pll.ejs');
});

app.get('/riverdale', function(req, res) {
    res.render('../views/riverdale.ejs');
});

app.get('/spiderman', function(req, res) {
    res.render('../views/spiderman.ejs');
});

app.get('/squidgame', function(req, res) {
    res.render('../views/squidgame.ejs');
});

app.get('/supernatural', function(req, res) {
    res.render('../views/supernatural.ejs');
});

app.get('/teenwolf', function(req, res) {
    res.render('../views/teenwolf.ejs');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));