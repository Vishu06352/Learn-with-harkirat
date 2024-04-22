function calculateArithmetic1(num1,num2,type)
{
    if(type == "Sum")
    {
        const value = sumFunction(num1,num2);
        return value;
    }
    if(type == "minus")
    {
        const value = minusFunction(num1,num2);
        return value;
    }
}

function sumFunction(num1,num2)
{
    return num1+num2;
}

function minusFunction(num1,num2)
{
    return num1-num2;
}

console.log(calculateArithmetic1(1,2,"Sum"));


// Now converting the above function into callback function

function calculateArithmetic2(num1,num2,fnToCall)
{
    return fnToCall(num1,num2);
}

console.log(calculateArithmetic2(8,4,minusFunction));