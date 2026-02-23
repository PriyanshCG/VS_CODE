//q1
// class Student{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }
// //obj  is blueprint  of 
// // obj is instance  of class
// let s1 = new Student ("Priyansh",18);
// let s2 = new Student ("Priya",18);
// let s3 = new Student ("Pansh",18);

// console.log(s1.name, s1.age);
// console.log(s2.name, s2.age);
// console.log(s3.name, s3.age);


//q2
// class Car{
//   constructor(brand,price){
//     this.brand = brand;
//     this.price = price;
//   }
// }

// class Owner{
//   constructor(name){
//     this.name = name;
//   }
// }

// let car1 = new Car("BMW X7", 6988890);
// let car2 = new Car("Audi R8", 4599999);
// let owner1 = new Owner("Rohit Sharma");

// console.log("Owner:", owner1.name);
// console.log("Car 1:", car1.brand,  car1.price);
// console.log("Car 2:", car2.brand,  car2.price);


//q3
// class Mobile {
//   constructor(model,cost){
//     this.model = model;
//     this.cost = cost;
//   }
// }  

// let m1 = new Mobile("IPhone 17", 120000);
// let m2 = new Mobile("Samsung S25", 110000);
// let m3 = new Mobile("Poxo F7", 32000);

// console.log(m1.model, m1.cost);
// console.log(m2.model, m2.cost);
// console.log(m3.model, m3.cost);


//q4
// class Teacher{
//   constructor(name){
//     this.name = name;
//   }  
// }

// class Subject{
//   constructor(title){
//     this.title = title;
//   }
// }

// class Classroom{
//   constructor(roomNo){
//     this.roomNo = roomNo;
//   }
// }
// let t1 = new Teacher("Neel Sir");
// let sub1 = new Subject("JavaScript");
// let c1 = new Classroom(702);

// console.log("Teacher:", t1.name);
// console.log("Subject:", s1.title);
// console.log("Classroom:", c1.roomNo);






//q1
// class Student{
//   constructor(name,marks){
//     this.name = name;
//     this.marks = marks;
//   }
  
//   hello(){
//     console.log("method");
//   }
  
//   get_name(){
//     console.log(this.name);
//   }
  
//   static get_marks(){
//     console.log(this.marks)
//   }
// }

// let s1 = new Student ("Priyansh",18);

// s1.hello();
// s1.get_name();
// s1.get_marks();



// class Car {
//   constructor(brand,price){
//     this.brand = brand;
//     this.price = price;
//   }
// }

// class Owner extends Car {
//   constructor(name,brand,price){
//     super(brand,price);
//     this.name = name;
//   }
// }

// let owner1 = new Owner("Rohit Sharma", "lembo",1234560);

// console.log(owner1.name, owner1.brand, owner1.price);




// class Teacher{
//   constructor(name){
//     this.name = name;
//   }  
// }

// class Subject extends Teacher{
//   constructor(title,name){
//     super(name)
//     this.title = title;
//   }
// }

// class Classroom extends Subject{
//   constructor(roomNo,name,title){
//     super(name,title)
//     this.roomNo = roomNo;
//   }
// }
// let c1 = new Classroom("Neel Sir","js",702);


// console.log("Teacher:", c1.name);
// console.log("Subject:", c1.title);
// console.log("Classroom:", c1e.roomNo);


function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreeting() {
  console.log("Greeting completed");
}

greet("Arjun", afterGreeting);