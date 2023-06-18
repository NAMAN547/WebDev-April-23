
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





//  apply theme





// store the themes

function storeTheme(theme){

    localStorage.setItem("theme", theme)

}

function applyTheme(){


     const activeTheme =localStorage.getItem("theme");

      themeColors.forEach((themeOption)=>{

        if(activeTheme === themeOption.id){

            themeOption.checked = true
        }
      })
}

let themeColors = document.querySelectorAll('input[type="radio"]');


themeColors.forEach((themeOption)=>{

    themeOption.addEventListener("click", ()=>{

        storeTheme(themeOption.id)

    })

})


document.onload = applyTheme()







// drag and drop 


let listItem = document.querySelectorAll(".list-group .list-group-item");

let dragSrcElement = null;


function dragStart(e){

    dragSrcElement = this;

   e.dataTransfer.effectAllowed = "move"

   e.dataTransfer.setData("text/plain", this.firstChild.textContent )

}

function dragEnter(e){

    // console.log(e.type)
}

function dragOver(e){

    e.preventDefault();

    e.dataTransfer.dropEffect = "move"

   
}

function dragLeave(e){

    // console.log(e.type)
}

function handleDrop(e){

    if(dragSrcElement !== this){

        dragSrcElement.firstChild.textContent = this.firstChild.textContent;

        this.firstChild.textContent = e.dataTransfer.getData("text/plain")
    }
}




listItem.forEach((item)=>{

    item.addEventListener("dragstart", dragStart)
    item.addEventListener("dragenter", dragEnter)
    item.addEventListener("dragover", dragOver)
    item.addEventListener("dragleave", dragLeave)
    item.addEventListener("drop", handleDrop)
})


