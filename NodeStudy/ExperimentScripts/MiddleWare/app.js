var express = require('express');

// set-up the express app
var app = express();

// tells express to use ejs for the view engine
app.set('view engine', 'ejs');

/*
// to use middle-ware
// can attach to one route or () to attach to all routes
// parameters: foler/callback: req/res/next
// next is used to finish this middleware you can go on the next
app.use('/assets', (req,res,next)=>{
    // needed to move to the next middleware
    console.log(req.url);
    next();
});
*/

// static middle-ware. no need to use the next()
// map the route to a folder called assets
app.use('/assets', express.static('assets'));


app.get('/', (req,res)=>{
    res.render('index');
    console.log(req.url);
});

app.get('/contact', (req,res)=>{
    res.render('contact');
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

