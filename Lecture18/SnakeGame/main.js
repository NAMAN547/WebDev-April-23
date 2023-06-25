
const canvas = document.getElementById("canvas");
const pen =  canvas.getContext("2d");

    pen.fillStyle = "yellow"

   
    let init_x = 10;

    let init_y = 20



    function init(){

        pen.fillRect(init_x,init_y, 20, 30)


 
    }

    function draw(){

        pen.clearRect(0,0,1200,600)
        pen.fillRect(init_x,init_y, 20,30)


    }

    function update(){

        init_x = init_x + 10
    }

    init()



    function gameloop(){

        draw();
        update();

    }


    setInterval(gameloop, 100)