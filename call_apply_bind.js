function Teacher(standard,age){
    this.standard = standard,
    this.age = age
    this.print = function(){
        console.log(`My name is ${this.name} and age is ${this.age}`)

    }

}
function Person(name,subject,standard,age){
  //  Teacher.call(this,standard,age);
  //Teacher.apply(this,[standard,age]);
  let tecg = Teacher.bind(this,standard,age);
        tecg();
    this.name = name,
    this.subject = subject
}

 let p1 = new Person("ram","math",6,12);
 //p1.print();
 console.log(p1)