let fs = require('fs');

fs.readFile('DATA','utf8',function(err, contents){
    console.log(contents);
});

console.log('Despues de llamar readFile');