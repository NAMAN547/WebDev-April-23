
let form = document.getElementById("addForm")

let list = document.getElementsByClassName("list-group");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    let input = document.getElementById("item");

     let text = input.value;

     let newLI = document.createElement("li");

     newLI.className = "list-group-item"

     newLI.appendChild(document.createTextNode(text));

    

     let deleteButton = document.createElement("button");

     deleteButton.className = "btn btn-danger btn-sm float-right delete";

     deleteButton.appendChild(document.createTextNode("X"))

     newLI.appendChild(deleteButton);

     console.log(newLI);

     list.appendChild(newLI)
})


// remove Items

// list.addEventListener("click", removeItem)

// function removeItem(e){

//    if(e.target.classList.contains("btn-danger")){

//     let listItem = document.getElementById("items-list");

//     listItem.removeChild(e.target.parentElement)

//    }
// }




// filter items


let input = document.getElementById("filter");


input.addEventListener("keypress", filterItem)


function filterItem(e){

   let text = e.target.value.toLowerCase();

   let list = document.getElementsByTagName("ul");

   let arr = Array.from(list);

    for(let listItem of arr[0].children){

        let searchText = listItem.innerText;

        if(searchText.toLowerCase().indexOf(text) !== -1){

            listItem.style.display = "block"
        }
        else{

            listItem.style.display = "none"
        }     
    }

   

  
 
   


}
