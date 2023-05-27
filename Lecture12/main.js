

// console.log("hello world")


//variables in Js

// let myName;

//  let myName = "naman tyagi";

//  var age;

//  var age = 30;

//  console.log(age);

// console.log(myName)


// const myName = "naman";

// myName = "john";

// console.log(myName);

// let  a = 24 ;

// console.log(a);


// age = 24;

// console.log(age);

// var age;



// scope of a variable

// let a = 10;

// function print(){

//     console.log(a);

//     let b = 20;

//     if(true){

//         // console.log(b)
//         var e = 100;
//         let c = 30;
//         const d = 40;
//     }

//     console.log(e) 
//     console.log(b)
//     // console.log(d)

// }

// print();
// console.log(e)

// let num = "string"/0;

// console.log(num, typeof num);

// let age = null;

// let myName ="naman"

// console.log(`my name is ${myName} and my age is ${age}`);


// let num1 = 100;

// let num1 = null;

// num1 = 24

// console.log(num1);

// let num2 = 100;

// num2 = null

// console.log(num2)

// let a = {

//   myname : "naman",

//   agfe : 24,

//   true : 1,

//   false : 0,

//   print : function(){

//     console.log("")
//   }

// }




// Type conversions in Js ----------------



function typeConversion(){

    let input = document.getElementById("inputelement").value;

    console.log(input, typeof input);

    console.log(+input, typeof +input);

    console.log(input, typeof input)

}

// let myVariable = NaN;

// let newVariable = Boolean(myVariable);

// console.log(newVariable, typeof newVariable)



// Operators in JS


// console.log( 5 % 2);

// console.log("1" + 2 + 2)

// console.log(4 ** 5)


// let count = 1;

// ++count;

// console.log(count)



// console.log( "")


// console.log( 0 === false)

// console.log("Stringejsbsxbshbxsh" > "string")


// if statement 


// let age = 15;

// if( age < 18){

//     console.log("you are a minor")

// }
// else if( age>= 18 && age < 60){

//     console.log("you are adult")

// }

// else{

//     console.log("tum budhe ho!")

// }


let weekDays = 1;

let aajKaDin;

switch(weekDays){

    case 1 : 

    aajKaDin = "monday";
    console.log("monday")


    case 2: 

    aajKaDin = "tue";

    console.log("tuesday")

   
    case 3 : 

    aajKaDin = "wednesday";



    default : 

    aajKaDin = "galat din";

    break;
}

console.log(aajKaDin)















