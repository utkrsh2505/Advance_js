// class Circle {
//  constructor(radius){
//     this.radius = radius;
//  }
//  getCircumfrence = function(){
//      return(2*3.14*this.radius)
//  }
// }

// let p = new Circle(4);
// console.log(p.getCircumfrence());

// calculator

class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;

    }
    add = function(){
        console.log(this.a + this.b);
    }
    sub = function(){
        console.log(this.a - this.b);
    }
    mul = function(){
        console.log(this.a * this.b);
    }
    divide = function(){
        console.log(this.a / this.b);
    }
    
}


let p = new Calculator(3,2);
p.add();
p.sub();
p.mul();
p.divide();
console.log(p);