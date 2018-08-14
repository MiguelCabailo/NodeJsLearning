var http = require('http');
var fs = require('fs');

var http = require('http');

// check the network tab and see the request
var server = http.createServer((req,res)=>{
    //access a property in the request object = req.url
    console.log('request was made:' + req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/ninja') {
        var ninjas = [{name:'ryu', age:29}, {name:'yoshi', age: 32}];
        res.writeHead(200,{'Content-Type' : 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});


// arguments: port/ipaddress/callback
server.listen(3000,'127.0.0.1', ()=>console.log("now listening to port 3000"));
