function getSize(arr:Array<number> | Array<string> | Array<boolean> ):number {
    return arr.length
}

const arr1 = [1,2,3]
getSize(arr1);


const arr2 =["a", "b", "c"]
getSize(arr2)

const arr3 = [false, true, false]
getSize(arr3)

// generic 

function Arrlength<T>(arr: T[]): number {
    return arr.length
}

const arr4 = [{}, {}, {name: "Tim"}]
Arrlength<object>(arr4)

const arr5 = ["a", "b", "c"]
Arrlength<string>(arr5)


interface Phone<T> {
    name: string;
    price: number
    option: T
}
/*
const p1: Phone<object> = {
    name: "G",
    price: 100,
    option: {
        color: "red",
        coupon: false
    }
}
*/

const p1: Phone<{color: string; coupon: boolean}> = {
    name: "G",
    price: 100,
    option: {
        color: "red",
        coupon: false
    }
}

const p2: Phone<string> = {
    name: "G",
    price: 100,
    option: "good"
}

interface Korean {
    name: string;
    age: number
}

interface KeyHolder {
    name: string;
    color: string;
}

interface Book {
    price: number
}

const korean: Korean = {name: "Yang", age: 22}
const keyHolder: KeyHolder = {name: "Jiho's Keyholder", color: "black"}
const book: Book = {price: 3000}

function showName<T extends {name: string}>(data: T):string {
    return data.name
}