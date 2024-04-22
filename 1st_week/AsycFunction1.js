
function findSum(n)
{
    let i = 0;

    for (let index = 0; index < n; index++) {
        i += index;
    }
    return i;
}

function findSumTill100()
{
    console.log(findSum(100));
}

setTimeout(findSumTill100,1000);
console.log("Hello World")

//point 4 from now on
let a = 0;
for(let i = 0 ;i < 10000000;i++)
{
    a++;
}
console.log("Hellow world 2");
//here we can see that for loop 1000000000 is too big and by this time the setTime should log, but it will not log because
// first it execute all the below code and then log



/* 
    Notes
    1. Asyc functions are those in which there is context switching and delegect task to other member or function
    2. For eg in js we have Async function such as -> setTimeOut, FS (File read) and Fetch for API
    3. From LOC 1 to 18 what we are doing is that we made a Async function call which will start after 1000 sec and till then thread is not 
        blocked instead it go on and execute the code below code and after it get execute then it will console.log the findSumTill100
    4. If there are more than 1 console statement like from LOC 1 -18 we have only hello world to print, but if there are 2 or more than it will 
        print all of them first and then it will console.log the findSumTill100 

*/