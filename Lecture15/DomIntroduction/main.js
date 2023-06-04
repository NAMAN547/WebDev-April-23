

// console.dir(document);
// console.log(document.head);

// console.log(document.body.children[0]);

// console.log(document.body.children[0].innerHTML)

// // document.body.children[0].textContent = "NAMAN'S  LIST"

// console.log(document.body.children[1].children[0].children[3].children[0]);

// document.body.children[1].children[0].children[3].children[0].style.color = "blue"



// target an element

 let firstLi =  document.getElementById("first-li")

 console.log(firstLi);

 firstLi.style.color = "red"


 Object.assign(firstLi.style,{color : "blue",
fontSize : "50px",
backgroundColor: "brown"})


let divELement = document.getElementsByTagName("li");

console.log(divELement)