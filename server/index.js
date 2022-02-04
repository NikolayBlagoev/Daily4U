const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

class Info{
    constructor(dateString,quote, poem, movie,fact, book){
        this.dateString = dateString;
        this.quote = quote;
        this.poem = poem;
        this.movie = movie;
        this.fact = fact;
        this.book = book;
    }
}

var current_info = new Info("", null, null, null, null, null);
app.get('/quote', (req, res) => {
    
    var dateString = new Date().toISOString().slice(0, 10);
    if(dateString != current_info.dateString){
        console.log("UPDATE VALUE");
        let new_info = JSON.parse(fs.readFileSync('entries/'+dateString+'.json'));
        current_info = new Info(dateString, new_info.quote,
            new_info.poem, new_info.movie, new_info.movie, new_info.fact, new_info.book);
    }
    console.log(current_info.quote.quote)
    res.send(current_info.quote);
});

app.get('/poem', (req, res) => {
    
    var dateString = new Date().toISOString().slice(0, 10);
    if(dateString != current_info.dateString){
        console.log("UPDATE VALUE");
        let new_info = JSON.parse(fs.readFileSync('entries/'+dateString+'.json'));
        current_info = new Info(dateString, new_info.quote,
            new_info.poem, new_info.movie, new_info.movie, new_info.fact, new_info.book);
    }
    res.send(current_info.poem);
});

app.get('/movie', (req, res) => {
    
    var dateString = new Date().toISOString().slice(0, 10);
    if(dateString != current_info.dateString){
        console.log("UPDATE VALUE");
        let new_info = JSON.parse(fs.readFileSync('entries/'+dateString+'.json'));
        current_info = new Info(dateString, new_info.quote,
            new_info.poem, new_info.movie, new_info.movie, new_info.fact, new_info.book);
    }
    res.send(current_info.movie);
});

app.get('/fact', (req, res) => {
    
    var dateString = new Date().toISOString().slice(0, 10);
    if(dateString != current_info.dateString){
        console.log("UPDATE VALUE");
        let new_info = JSON.parse(fs.readFileSync('entries/'+dateString+'.json'));
        current_info = new Info(dateString, new_info.quote,
            new_info.poem, new_info.movie, new_info.movie, new_info.fact, new_info.book);
    }
    res.send(current_info.fact);
});

app.get('/book', (req, res) => {
    
    var dateString = new Date().toISOString().slice(0, 10);
    if(dateString != current_info.dateString){
        console.log("UPDATE VALUE");
        let new_info = JSON.parse(fs.readFileSync('entries/'+dateString+'.json'));
        current_info = new Info(dateString, new_info.quote,
            new_info.poem, new_info.movie, new_info.movie, new_info.fact, new_info.book);
    }
    res.send(current_info.book);
});
app.get('/*', (req, res) => {
    
    res.send("You are not supposed to be here");
});
app.listen(port, () => {
  console.log(`Application running`);
});
