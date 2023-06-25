const canvas = document.getElementById("canvas");
const pen =  canvas.getContext("2d");

    pen.fillStyle = "yellow"

    const cs = 67
    const init_x = 10
    const init_y = 20;
    const W = 1200
    const H = 600
    let food = null 
    let count = 0


class Snake{

    constructor(){

        this.init_len = 5
        this.direction = "right"
        this.cells= []
    }

    createSnake(){

        for(let i = 0; i <= this.init_len; i++){

            this.cells.push({

                x:i,
                y: 0
            })
        }
 
    }

    drawSnake(){

       
        for(let i = 0; i < this.cells.length; i++){

            const cell =this.cells[i];

            if( i === this.cells.length-1){

                pen.fillStyle = "red"

            }else{

                pen.fillStyle = "yellow"
            }

            pen.fillRect(cell.x*cs, cell.y*cs, cs-2,cs-2)
        }    

    }

    updateSnake(){

        let headX = this.cells[this.cells.length-1].x;
        let headY = this.cells[this.cells.length-1].y;

        let nextX;
        let nextY;

        if( headX === food.x && headY === food.y){

            food = randomFood();
            count++
        }

        else{

            this.cells.shift()
        }

        if(this.direction === "right"){

            nextX = headX + 1;
            nextY = headY;

            console.log(canvas.width)

            if( headX*cs >= W -cs){

                gameOver(intervalId)

            }

            

        }
        else if(this.direction === "left"){

            nextX = headX -1
            nextY = headY

            if(headX*cs < 0){

                gameOver(intervalId)
            }

           
        }
        else if(this.direction === "up"){

            nextX = headX;
            nextY = headY -1
            if( headY*cs <= 0 ){

                gameOver(intervalId)
            }
        }
        else if( this.direction === "down"){

            nextX = headX;
            nextY = headY+1

            if( headY*cs > H -cs){
                gameOver(intervalId)
            }
        }

        this.cells.push({
            x: nextX,
            y:nextY
        })

        console.log(this.cells)


    }

    changeDirection(direction){

        this.direction = direction
    }
}


  const snake = new Snake()


  function init(){

    snake.createSnake()
     food = randomFood()


    function keypressed(e){

       if(e.key === "ArrowRight"){

        snake.changeDirection("right")

       }
       else if(e.key === "ArrowLeft"){

        snake.changeDirection("left")
       }

       else if(e.key === "ArrowUp"){

        snake.changeDirection("up")
       }

       else if( e.key === "ArrowDown"){

        snake.changeDirection("down")
       }
    }

  document.addEventListener("keydown", keypressed)

  }

  function draw(){


    pen.clearRect(0,0, W, H);

    pen.fillStyle = "red"

     pen.font = "30px sans-serif"
    pen.fillText(` Score : ${count}`, 30,30)


    pen.fillRect(food.x*cs, food.y*cs, cs-2,cs-2);

    snake.drawSnake()


  }

  function update(){

    snake.updateSnake()


  }

  function randomFood(){

    let foodX = Math.floor(Math.random()*10);
    let foodY = Math.floor(Math.random()*10);

    const foodCordinate = {

        x: foodX,
        y: foodY
    }

    return foodCordinate

  }

  init();


  function gameloop(){

    draw();
    update();

}




 var intervalId = setInterval(gameloop, 200);

 function gameOver(intervalId){

    clearInterval(intervalId)

}



//   console.log(snake)

