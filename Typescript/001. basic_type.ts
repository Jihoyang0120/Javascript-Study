let age:number = 30
let isAdult:boolean = true
let a0:Array<number> = [1,2,3]
let a1:number[] = [1,2,3]

let week1:Array<string> = ["mon", "tue", "wed"]
let week2:string[] = ["tur", "fri", "sat"]

// Tuple

let toople:[string, number];
toople = ["a", 1]
// twople[1].toLowerCase();

// void, never

function sayHi():void {
    console.log("hihi")
}
// 아무것도 반환하지 않는 함수에 사용

function showError():never {
    throw new Error()
}

function infLoop():never {
    while (true) {
        // do something
    }
}
// 영원히 끝나지 않는 함수에 사용

// enum
enum Os {
    Window,
    Ios,
    Andriod
}

console.log(Window)
console.log(0)

let myOs:Os;

myOs = Os.Window

// null, undefiend

let one: null = null
let two: undefined = undefined