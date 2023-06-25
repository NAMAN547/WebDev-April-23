const canvas = document.getElementById("canvas");
const pen =  canvas.getContext("2d");

    pen.fillStyle = "yellow"

    const cs = 20
    const init_x = 10
    const init_y = 20


class Snake{

    constructor(){

        this.init_len = 5
        this.direction = "right"
        this.cells= []
    }

    createSnake(){
 
    }

    drawSnake(){

        for(let i = 0; i <= this.init_len; i++){

            this.cells.push({

                x:i,
                y: 0
            })
        }

        
        for(let i = 0; i < this.cells.length; i++){

            const cell =this.cells[i];

            console.log(cell)

            pen.fillRect(cell.x*cs, cell.y*cs, cs-2,cs-2)
        }    

    }
}


  const snake = new Snake()


  function init(){

    snake.createSnake()


  }

  function draw(){

    snake.drawSnake()


  }

  init();

  draw();

//   function gameloop(){

//     draw();
//     // update();

// }


// setInterval(gameloop, 100)

//   console.log(snake)

