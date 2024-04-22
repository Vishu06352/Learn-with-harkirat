const fs = require('fs');

function ishu()
{
    return new Promise(function(resolve){ // inside this block do some async logic bcz otherwise it does not make any sense and better to make it sync function in that scenario
        fs.readFile("a.txt","utf-8",function(error,data)
        {
            resolve(data);
        })
    })
}

async function main()
{
    // const value = ishu(); // if we do not write await here we get a promise{<pending>}
    const value = await ishu();
    console.log("Successfuly done");
    console.log(value);
}

main();

// for await async we need to call a function like main(); otherwise it will not work