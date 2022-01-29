// let list  = { name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' };

// let {name : Name, hostname,password} = list;
// console.log(Name,password);
//*********************************************** 
// let list = {  name: 'masai', address: {  pincode: 560095 }  };
// let {address} = list;

// let {pincode : pin} = address;
// console.log(pin);

//******************************** 

// let arr = [ 100, 200, 500, 600 ] ;
// let [first,second] = arr;
// console.log(first,second);

//********************************************* 
// let arr = [ 100, [  50, 60, 70  ]   ] ;
// let [,second] = arr;
// let [first,sec, third] = second;
// console.log(first);

//*********************************** 
let arr1= [  1, {  
    arr: [ 1, 2, 3 ]
  }
] ;

let [,second] = arr1;
let {arr} = second;
let [fir,sec,thir] = arr;
console.log(sec,thir);
