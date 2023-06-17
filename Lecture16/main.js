

let list = document.querySelector(".list-group");

// // // console.log(list.parentElement);

// // list.parentElement.style.backgroundColor = "grey";

// // list.parentElement.style.backgroundColor = "blue"


// // console.log(list.nextElementSibling)



// //Creating an element


// let newEle = document.createElement("div");

// console.log(newEle);

// // adding an id
// newEle.id = "special-div"


// // adding a class

// newEle.className = "main-div div-1 div-2"

// console.log(newEle.classList
//     )

// // any attribute

// newEle.setAttribute("href", "http://google.com")


// // let  text = document.createTextNode("this is some content");

// // let headingEle = document.getElementById("header-title");

// // console.log(headingEle)

// // console.log(text);



// newEle.appendChild(document.createTextNode("new content"))

// // list.appendChild(newEle)

// let referenceLi = document.querySelector(".list-group-item")

// console.log(referenceLi)

// list.insertBefore(newEle, referenceLi )



// event


// console.log(form);


// form.addEventListener("submit",(event)=>{

    


//    let inputValue = form.children[0].value;

//    let newLi = document.createElement("li");

//    console.log(newLi);

//    let buttonEle = document.createElement("button");

//    buttonEle.className = "btn btn-danger btn-sm float-right delete"

//    buttonEle.appendChild(document.createTextNode("X"));

//    newLi.appendChild(buttonEle)

//    newLi.className = "list-group-item";

//    newLi.appendChild(document.createTextNode(inputValue));

//    list.appendChild(newLi)

// })




//Events in JS

// let form = document.getElementById("addForm");


// form.addEventListener("submit" , (event)=>{
//   event.preventDefault()

//     console.log(event)

// })


let heading = document.getElementById("header-title");

heading.addEventListener("click",(e)=>{

    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);

    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "rgb("+e.clientX+","+e.clientY+", 40)"

    // console.log(e.clientX)
    // console.log(e.offsetX)
    // console.log(e.shiftKey)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)

    // console.log(e.type)
})



// let divElement = document.getElementsByClassName("output");

// divElement[0].addEventListener("mouseout", (e)=>{

//     console.log(e.type)
// })


// let inputElement = document.getElementById("item");


// inputElement.addEventListener("blur", (e)=>{

//     console.log(e.type)
// })


// form events

let form = document.getElementById("addForm");

form.addEventListener("submit", (e)=>{

    e.preventDefault();
    console.log(e.type)

})



