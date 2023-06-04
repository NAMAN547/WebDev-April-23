

// // implicit binding

// // let person = {

// //     name : "naman",
// //     age : 24,
// //     print : ()=>{
// //         console.log(this)
// //     }
// // }
// // console.log(person.print())



// // let print = ()=>{

// //     return this;

// // }

// // console.log(print())



// // explicit binding


// let person = {

//     name : "naman",
//     age: 24
// }

// function print(car1,car2){

//     console.log(`my name is ${this.name} and age is : ${this.age} and favcars are : ${car1}, ${car2}`)

// }

// let favCars = ["bmw", "audi", "mercedes"]

// // print.call(person, favCars[0], favCars[1])

// // print.apply(person, favCars)

// //  let newFn= print.bind(person, favCars[0], favCars[1]);

// //  newFn()

function print(){

    console.log(this)
}
