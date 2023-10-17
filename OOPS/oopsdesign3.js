var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');

var input1 = input[0].trim().split(',');
var input2 = input[1].trim().split(',');
var input3 = input[2].trim().split(',');
//fill your code

class Shape{
    constructor(name, nos, color){
        this.name = name;
        this.nos = nos;
        this.color = color;
    }

    displayShapeColor(){
        console.log(this.name + " is in color " + this.color);
    }
}

class Circle extends Shape{
    displayShapeSides(){
        console.log("Circle has " + this.nos + " sides");
    }
}

class Square extends Shape{
    displayShapeSides(){
        console.log("Square has " + this.nos + " sides");
    }
}
