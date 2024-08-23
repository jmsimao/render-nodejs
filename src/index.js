
import express from "express";
import { rotas } from "../routes/homeRoutes.js";

//var express = require('express');
const app = new express();
const PORT = 7700;
 
// View engine setup
app.set('view engine', 'ejs');

app.use(rotas);

// Without middleware
app.get('/user', function(req, res){
 
    // Rendering home.ejs page
    res.render('home');
})
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT %d%s", PORT, ".");
});