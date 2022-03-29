// keyof: interface의 키 값들을 union 형태로 받을 수 있다.

interface ID {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}

type UserKey = keyof ID // 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "name"

// Partial<T>: property를 모두 optional로 바꿔준다. 

let admin: Partial<ID> = {
    id: 1,
    name: "Bob"
}

/*
interface ID {
    id?: number
    name?: string
    age?: number
    gender?: "m" | "f"
}
 */

// Required<T>: 모든 property를 필수로 바꿔준다.

// Readonly<T>: 모든 property를 읽기 전용으로 바꾼다.

let kim: Partial<ID> | Readonly<ID> = {
    id: 1,
    name: "Yang",
    age: 10,
    gender: "m"
}

// kim.id = 10

// Record<K, T>: 키가 Key이고 값이 Type인 객체 타입

interface Guest {
    id: number;
    name: string;
    age: number;
}

function isValid(user:Guest) {
    const result: Record<keyof Guest, boolean> = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0
    }
    return result
}

// Pick<T, K>: Type에서 K(Property)만 골라서 사용한다.

interface About {
    id: number
    name: string
    age: number
    gender: "m" | "f"
}

const man: Pick<About, "id" | "name"> = {
    id: 0,
    name: "Chalie"
}

// Exclude<T1, T2>: Type1에서 Type2를 제외하고 사용하는 것

type T1 = string | number | boolean
type T2 = Exclude<T1, number>

// NonNullable<Type>: null, undefined를 제외한 타입 생성

type T3 = string | null | undefined | void
type T4 = NonNullable<T3>