//1 Object

// const car = {
//     color: "red",
//     brand: "BMW",
//     price: 4000
// }

// const login =() => {
//     this.isLogin =true
//     console.log(`${name} зайшов в программу!` )
// }



// const user = {
//     Id: 10,
//     name: "Alex",
//     age: 30,
//     car: {
//         color: "red",
//         brand: "BMW",
//         price: 4000
//     },
//     isLogin: false,
//     phoneList:[
//         "357235925798",
//         "584874352825",
//         "347932679567"
//     ],
//     lastName: "Шевченко",
//     email: "alex@gmail.com"
// };

// console.log(user.car);

// //Object House

// const house = {
//     location: "Kyiv",
//     color: "green",
//     bedrooms: 5,
//     hasGarden: 2,
//     price: 750000
//   };

//   house.owner = "Dmytro";
//   delete house.bedrooms;

//   console.log(house)

// Object Massive

// const MIN_PRICE = 0
// const MAX_PRICE = 100000

// const garage = [
//     {name:"Mazda Rx 7",price:4500,year:2002,color:"red"},
//     {name:"Vaz 101",price:5000,year:2010,color:"blue"},
//     {name:"Volvo",price:7500,year:2012,color:"grey"},
//     {name:"WV Golf 4",price:3500,year:2022,color:"green"},
//     {name:"Mazda R 3",price:2500,year:1999,color:"yellow"},
//     {name:"Audi Q4",price:4600,year:2007,color:"black"},
// ]

// function priceRange (cars,minPrice = MIN_PRICE,maxPrice = MAX_PRICE){
//   const newCars =[]
//   for(let car of cars){
//     if (car.price>= minPrice && car.price <= maxPrice){
//         newCars.push(car)
//     }
//   }

//   return newCars
// }

// console.log ("old",garage)
// console.log("new",priceRange(garage,5000,6000))

// Object Massive 2
const users = [
    { name: "Dmytro", year: "1995", gender: "male", hobby: "swimming", contry: "Ukraine" },
    { name: "Sam", year: "2007", gender: "male", hobby: "football", contry: "USA" },
    { name: "Jeff", year: "1994", gender: "male", hobby: "kung fu", contry: "Tokio" },
    { name: "Alex", year: "2010", gender: "male", hobby: "judo", contry: "Japan" },
    { name: "Pedro", year: "2009", gender: "male", hobby: "rally driver", contry: "Mexico" }
];

function filterAdults(users) {
    const currentYear = new Date().getFullYear();
    return users.filter(user => currentYear - user.year >= 18);
}

console.log(filterAdults(users));

