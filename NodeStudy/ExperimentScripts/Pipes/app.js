var http = require('http');
var fs = require('fs');

var http = require('http');

// check the network tab and see the request
var server = http.createServer((req,res)=>{
    console.log('request was made:' + req.url);

    // the information of the response making it plain so the brower knows what to do with the response
    res.writeHead(200,{'Content-Type': 'text/plain'});

    // piping from a readstream to the browser response
    var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
    myReadStream.pipe(res);
});


// arguments: port/ipaddress/callback
server.listen(3000,'127.0.0.1', ()=>console.log("now listening to port 3000"));
