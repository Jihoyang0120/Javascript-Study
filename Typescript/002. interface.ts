// interface: property를 정의해서 객체를 표현하고자 할 때 interface 사용.

type Score = 'A' | "B" | "C" | "F"

interface User {
    name: string;
    age: number;
    gender?: string
    // 입력을 해도 되고, 안해도 되는 속성은 Optional(?) 처리
    readonly birthYear: number;
    [grade:number] : Score;
}

let user: User = {
    name: "xx",
    age: 30,
    birthYear: 2000,
    1 : "A",
    2 : "B"
}

user.age = 10
user.gender = "male"
// user.birthYear = 3000

console.log(user.gender)
