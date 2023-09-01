var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');

var input1 = input[0].trim().split(',');
var input2 = input[1].trim().split(',');

//console.log(input1);
//console.log(input2);

//Fill your code here

function SuperHero(name, alias, planet){
    this.name = name;
    this.alias = alias;
    this.planet = planet;
