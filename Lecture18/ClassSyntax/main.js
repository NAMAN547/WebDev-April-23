
class Car{

    constructor(name, price, color, isDiskBrake){

        this.name = name;
        this.price = price;
        this.color = color;
        this.isDiskBrake = isDiskBrake

    }

    getName(){

        console.log(`the name of our car is ${this.name}`)
    }

    get carColor(){

        return this.color;
    }

    set carPrice(price){

        this.price = price;
    }


    static getCarDetails(){


        return car.getName()

    }
}

   const car = new Car("BMW", 200, "blue", true);

   console.log(car.getName())

   console.log(car)