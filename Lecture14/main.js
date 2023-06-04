
// //Arrays method continue

// // reduce

// // let arr = [1,2,3,4,5,6,7,8,9,10];

// // console.log(arr.reduce((sum, curr)=> sum + curr,0));


// // 

// // let arr1 = [1,4,5,3, 15]

// // console.log(arr1.sort((a,b)=>b-a));

// // console.log(arr1);


// // console.log(arr1.reverse());
// // console.log(arr1);


// // console.log( [0,1,2,3] == [0,1,2,3]);


// function compareArrays(array1, array2){

//     if( array1.length != array2.length){

//         return false;
//     }

//     for(let i = 0; i < array1.length; i++){

//         if( array1[i] != array2[i]){

//             return false
//         }
//     }

//     return true;
// }

// const arr1 = [1,2,3,4,5];
// const arr2 = [1,2,3,4,5];
// const arr3 = [2,5,7,8,9,10];

// console.log(compareArrays(arr1,arr2));
// console.log(compareArrays(arr1,arr3))


// let nestedArray = [1,2,3,[4,5,6,7, [8,9,10, [11,12,13]]]];

// console.log(nestedArray.flat(3));

// // console.log(nestedArray);


// let string = "this is a string";

// console.log(string.split("").join("_"))



// Objects 

let person1 = {

    name : "Shivam",
    age: 19, 

    address: "rohini sector 15",

    favMovies : ["mera badla","mera badla chandramukhi", "meri jung", "jeene nhi dunga" ],

    "fav colors" :"red",

    print : function(){
        console.log("this is a function inside object")
    },


}

const person2 = {

    hobbies: ["running", "movies"],

    __proto__: person1
}


// console.log(person["fav colors"])

// console.log(Object.keys(person));

// console.log(Object.values(person));
// console.log(Object.entries(person));


// person1.name = "Rohan";

// console.log(person1.print());


// let person2 = person1 

// console.log(person == person2);

// person2.name = "kartik bhaiya";

// console.log(person);

// person1 = null;

// console.log(person1);

// console.log(person2);

// console.log(person1.name)

// person2 =  null;


// const person2 = Object.create(person1);
