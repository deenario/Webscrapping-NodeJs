const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./data/test.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
    
    rp(line).then(function(html){
        //success!
        var $ = cheerio.load(html);
        var title = $("title").text();  
        console.log(title)
    }).catch(function(err){
        //handle error
        console.log(err)
    });
    
});
