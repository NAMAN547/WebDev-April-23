

// console.dir(document);
// console.log(document.head);

// console.log(document.body.children[0]);

// console.log(document.body.children[0].innerHTML)

// // document.body.children[0].textContent = "NAMAN'S  LIST"

// console.log(document.body.children[1].children[0].children[3].children[0]);

// document.body.children[1].children[0].children[3].children[0].style.color = "blue"



// target an element

//  let firstLi =  document.getElementById("first-li")

//  console.log(firstLi);

//  firstLi.style.color = "red"


//  Object.assign(firstLi.style,{color : "blue",
// fontSize : "50px",
// backgroundColor: "brown"})




// target by class

// let heading = document.getElementsByClassName("title");

// console.log(heading)

// // console.log(heading[0].innerHTML)


// for(let  i = 0; i < heading.length; i++){

//     heading[i].style.color = "red"

// }


//

let list = document.querySelectorAll("ul > li");

// console.log(list)

for(let listItem of list){

    listItem.style.color = "green";
    listItem.style.fontSize = "32px"

}



let inputElement = document.querySelectorAll("input[type='text']");


inputElement[1].style.backgroundColor = "yellow";



console.log(inputElement[1].value)



let button = document.querySelector("button");

console.log(button.innerHTML)

button.innerHTML= "send"


