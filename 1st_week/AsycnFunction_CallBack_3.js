
const fs = require('fs');

function ishu(fnToCall)  //it's a wrapper around the async function
{
    // it is a async function it's sugar coated way is Promise
    fs.readFile("a.txt","utf-8",function(error,data){ 
        console.log("I'm inside async function");
        fnToCall(data);
    })
}

function onDone(data)
{
    console.log("Inside Ondone");
    console.log(data);
}

ishu(onDone);