
//Object Orient Programm

// class Car{
//     brand;
//     type;
//     maxSpeed;


//     constructor(brand,type,maxSpeed){
//         this.brand = brand
//         this.type = type
//         this.maxSpeed = maxSpeed
//     }

// getBrand(){
//     return this.brand
// }


// setBrand(newValue){
//     this.brand = newValue
// }




//     getFullName(){
//         return `Автомобіль з брендом:${this.brand},типом: ${this.type}, і максимальною швидкістю: ${this.maxSpeed}`
//     }
// }


// const car = new Car("bmw","sedan",250)
// const car1 = new Car("mers","sedan",300)


// console.log(car.getFullName())
// console.log(car1.getFullName())

// //Наслідування
// class Person {
//     name;
//     age;


//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     getFullInfo(){
//         return `name: ${this.name}, age:${this.age}`
//     }
// }

// class Worker extends Person{
//     isWork;


//     constructor(name,age,isWork){
//         super(name,age);
//         this.isWork = isWork
//     }

//     work(){
//         return `${this.name}is work!`
//     } 
// }

// class Developer extends Worker{
//     lvl;

//     constructor(name,age,isWork,lvl){
//         super(name,age,isWork);
//         this.lvl =lvl

//     }
// }





// const alex = new Person("Alex",30)
// const mary = new Person("Mary",24)
// const worker = new Person("Leonid",40)

// console.log(alex)
// console.log(mary)

// const personList =[mary,developer,worker]

// for (let i = 0; i < personList.length; i++) {
//  console.log(personList[i].getFullInfo())
// }

// class Engine{

// }

// class Wheel {


// }

// class Car {
// engine;
// wheels;


// constructor(){
//     this.engine = new Engine();
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
// }

// }

// const engine = new Engine()
// const car = new Car(engine)
// console.log(car)

// Object Orient Programm
// class Human {
//     name;
//     age;
//     contry;


//     constructor(name,age,contry){
//         this.name = name
//         this.age = age
//         this.contry = contry
//     }

//     getName(){
//         return this.name;
//     }
    
//     setName(value){
//         this.name = value;
//     }
//     getAge(){
//         return this.age;
//     }
    
//     setAge(value){
//         this.age = value;
//     }
//     getContry(){
//         return this.contry;
//     }
    
//     setContry(value){
//         this.contry = value;
//     }
    
//     getFullInfo(){
//     return `name: ${this.name},age: ${this.age}, contry: ${this.contry}`
//     }
// }


// const human = new Human("Jeff",35,"USA")

// console.log(human)

// Наследование
// class Human {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     getInfo() {
//       console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
//   }
  
//   class Knight extends Human {
//     constructor(name, age, horse, sword) {
//       super(name, age);
//       this.horse = horse;
//       this.sword = sword;
//       this.attackPower = 50;
//       this.defensePower = 15;
//     }
  
//     attack() {
//       console.log(`${this.name} attacks with ${this.sword} and deals ${this.attackPower} damage!`);
//     }
  
//     getInfo() {
//       super.getInfo();
//       console.log(`Horse: ${this.horse}, Sword: ${this.sword}, Attack: ${this.attackPower}, Defense: ${this.defensePower}`);
//     }
//   }
  
//   const knight = new Knight("Daymon", 30, "BlackSabath", "Himars");
//   knight.getInfo();
//   knight.attack();
  