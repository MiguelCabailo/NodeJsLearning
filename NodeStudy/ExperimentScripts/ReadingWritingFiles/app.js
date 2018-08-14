var fs = require('fs');

/*
// synchronous version of reading files
// the contents are stored in readMe. 
// first argument is the path, second is the encoding
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

// arguments: path/content/
fs.writeFileSync('writeMe.txt', readMe);
*/

// async versions:
// arguments : path/encoding/callback function is needed to fire
// arguments of the callback: error if there is/data or what was read
fs.readFile('readMe.txt', 'utf8', (err, data)=>{
    fs.writeFile('writeMe2.txt', data, ()=>{
        console.log("file written");
    });
});


