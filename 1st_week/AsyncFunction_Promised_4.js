const fs = require('fs');

function ishu() // it does not have any call back function because of callback hell
{
    return new Promise(function(resolve){ // inside this block do some async logic bcz otherwise it does not make any sense and better to make it sync function in that scenario
        fs.readFile("a.txt","utf-8",function(error,data){
            resolve(data);
        });
    });
}

function onDone(data)
{
    console.log("Inside onDone");
    console.log(data);
}

// ishu().then(onDone); //One way to get the things done

//2nd way
let x = ishu();
console.log(x); // here we get a promise return from return new Promise(function(resolve)) which does not gaurante whether it will resolve 
                // the function or not but you take a promise
x.then(onDone);

/* Three states of promise
1. Resolved -> means when .then(onDone) function is called
2. Pending -> we get this in console.log(x) means x.then is not called that's why we get this
3. Rejected
*/