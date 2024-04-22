
const fs = require('fs');
//fs means file system, going to learn in node videos

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
    console.log("inside fs");
})

console.log("I will execute first before fs.readFile() function");