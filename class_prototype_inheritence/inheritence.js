class Grandparent{
    constructor(name){
        this.name = name
    }
    print = function(age){
        console.log(`Grandparent name is ${this.name} and age is ${age}`)
    }
}

class Parent extends Grandparent{
    constructor(name ,nationality){
        super(name)
        this.nationality = nationality;
    }
    printParent = function(pName){
        console.log(`parent  name is ${pName} Grandparent name is ${this.name}`)
    }
}

// let Gparent = new Grandparent("rakesh");
// Gparent.print(65);

let p2 = new Parent("rakesh", 40);
console.log(p2)
p2.printParent("ram");
