var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');

 
class Employee{
    constructor(name, dept, DOJ){
        this.name = name;
        this.dept = dept;
        this.DOJ = DOJ;
    }
}
