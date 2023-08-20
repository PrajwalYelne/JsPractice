var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code

var num = Number(input);

function isPrime(num)
{
    let count = 0;

    for(let i = 1; i <= num; i++)
    {
        if (num % i == 0)
            count++;
    }
