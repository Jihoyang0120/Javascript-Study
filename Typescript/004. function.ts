// function

function q(num1: number, num2: number) {
    return num1 + num2;
}

function w(num1: number, num2: number): void {
    console.log(num1 + num2)
}

function isChild(age: number):boolean {
    return age < 19
}

function hello(name: string, age?: number):string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`
    } else {
        return `Hello, ${name}`
    }
}
// 필수 매개변수가 선택적 매개변수 앞에 와야된다.

console.log(hello("Sam"))
console.log(hello("Sam"))

function sum(...nums:Array<number>) {
    return nums.reduce((result, num) => result + num, 0)
}

sum(1,2,3,4,5)

interface UserName {
    name: string
}

const jake: UserName = {name: "Sam"}

function getName(this:UserName, age: number, gender:'m'|"f") {
    console.log(this.name)
}
// this type을 정할 때는 함수의 첫번째 매개변수 자리에 this:type
const ab = getName.bind(jake)
ab(30, "m")


/* overload */

interface Info {
    name: string,
    age: number
}

function info (name:string, age: string): string;
function info (name:string, age: number): Info;
function info (name: string, age: number | string):Info | string{
    if (typeof age === "number") {
        return {
            name, age
        }
    } else {
        return "나이는 숫자로 입력해주세요"
    }
}

const sam: Info = info("Sam", 30)
const jane: string = info("jane", "30")
