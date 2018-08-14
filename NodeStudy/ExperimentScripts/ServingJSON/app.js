var http = require('http');
var fs = require('fs');

var http = require('http');

// check the network tab and see the request
var server = http.createServer((req,res)=>{
    console.log('request was made:' + req.url);

    // the information of the response making it plain so the brower knows what to do with the response
    res.writeHead(200,{'Content-Type': 'application/json'});

    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    }

    // end expects a string or a buffer
    // converts to a json string format
    res.end(JSON.stringify(myObj));

});


// arguments: port/ipaddress/callback
server.listen(3000,'127.0.0.1', ()=>console.log("now listening to port 3000"));
