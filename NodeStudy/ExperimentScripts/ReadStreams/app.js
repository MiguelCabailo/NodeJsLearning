var http = require('http');
var fs = require('fs');

// read the file a little bit at a 
// the buffer will pass the data up in chunks
// arguments: path/encoding(default is a buffer)
var myReadStream = fs.createReadStream(__dirname + "/readme.txt", 'utf8');

// recognize when we recieve one chunk of data by using the eventEmitter of the readstream
// data event
myReadStream.on('data', (chunk)=>{
    console.log('new chunk recieved:');
    console.log(chunk);
});


/*
var http = require('http');

// check the network tab and see the request
var server = http.createServer((req,res)=>{
    console.log('request was made:' + req.url);


    // the information of the response making it plain so the brower knows what to do with the response
    res.writeHead(200,{'Content-Type': 'text/plain'});
    // since the response type is plain text lets send some
    res.end('Hey ninjas');

    // res.send() will check the structure of the output and set the header info accordingly
});


// arguments: port/ipaddress/callback
server.listen(3000,'127.0.0.1', ()=>console.log("now listening to port 3000"));
*/