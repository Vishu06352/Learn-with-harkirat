let str1 = "Debit Card";
let str2 = "Bad Credit";

str1 = str1.split("").sort().join("");
str2 = str2.split("").sort().join("");

console.log(str1 + " "+ str2);