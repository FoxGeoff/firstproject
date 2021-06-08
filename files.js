fs = require('fs');

// this is asyn for sync 'fs.writeFileSync()'
fs.writeFile('myFile.txt', "this was created async",  (err) => {
    if(err) throw err;
    console.log('created file');
});

// this will delete the file
fs.unlink('myFile.txt', (err) => {
    if(err) throw err;
    console.log('file deleted!');
});
