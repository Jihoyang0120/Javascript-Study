interface Add {
    (num1: number, num2: number):number;
}

const add: Add = function(x, y) {
    return x + y
}

add(10, 20)
// add(10, "30")

interface IsAdult {
    (age: number):boolean
}

const adult:IsAdult = (age) =>{
    return age > 19
}
adult(30) // true
console.log(adult(20))

// implements: 클래스를 정의할 때 사용된다.

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number;
    stop(): void
}

class bmw implements Car{
    color
    constructor(c:string){
        this.color = c
    }
    wheels = 4;
    door = 5;
    start() {
        console.log("붕붕")
    }
    stop() {
        console.log("끼익")
    }
}

const dada = new bmw("red")
dada.start()
dada.stop() 
console.log(dada)