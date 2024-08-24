
import express from "express";
import { rotas } from "../routes/homeRoutes.js";

//var express = require('express');
const app = new express();
const hostname = "localhost";
//const hostname = "192.168.0.22";
const PORT = 7700;
 
// View engine setup
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(rotas);

// Without middleware
app.get('/', function(req, res){
    // Rendering home.ejs page
    res.render('home');
})
 
app.listen(PORT,
    hostname, 
    function(err){
    if (err) console.log(err);
    console.log("Server %s listening on PORT %d.", hostname, PORT);
});