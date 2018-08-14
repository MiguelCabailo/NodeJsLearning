var express = require('express');

// set-up the express app
var app = express();

// tells express to use ejs for the view engine
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/contact.html')
});

// dynamic content
app.get('/profile/:name', (req,res)=>{

    // dummy data
    // cycle through the hobbies
    var data = {age: '29', job: 'ninja', hobbies: ['eating','fighting','fishing']};

    // renders a view
    // it knows to look in the views folder
    // parameters : path/pass data to a view
    // can access the params by using the person object
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000,()=> console.log('listening at port http://localhost:3000'));

