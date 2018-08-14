var express = require('express');

// set-up the express app
var app = express();


app.get('/', (req,res)=>{
    //res.send('this is the homepage');
    res.sendfile(__dirname + '/index.html');
});

app.get('/contact', (req,res)=>{
    //res.writeHead({'Content-Type': 'text/plain'});
    res.send('this is the contact page');
});

app.get('/profile/:name', (req,res)=>{
    res.send(`You requested to see a profile with the name of ${req.params.name}`);
});


app.listen(3000,()=> console.log('listening at port http://localhost:3000'));

