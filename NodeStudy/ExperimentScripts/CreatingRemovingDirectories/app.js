var fs = require('fs');

/*
// delete a file, make sure the file exists!
fs.unlink('writeMe.txt', ()=>{
    console.log('file deleted');
});
*/

/*
// creating a directory
// arguments: path/callback
fs.mkdir('stuff', ()=>{
    // readFile has two parameters err and data as a callback
    fs.readFile('readMe.txt', 'utf8', (err,data)=>{
        fs.writeFileSync('./stuff/writeMe.txt');
    });
});
*/

// deleteing a directory
//fs.rmdir();

fs.unlink('stuff/writeMe.txt',()=>{
    fs.rmdir('stuff',()=> console.log('deleted file and directory'));
});