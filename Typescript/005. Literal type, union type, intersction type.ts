// Literal Types

type Job = "police" | "developer" | "teacher"

interface UserObject {
    name: string
    job: Job
}

interface HighSchoolStudnet {
    name: string;
    grade: 1|2|3
}

const id: UserObject = {
    name: "Bob",
    // job: "student"
    job: "developer"

}

// Union Types

interface Audio {
    name: "audio"
    color: "black";
    start(): void
}

interface Mobile {
    name: "mobile"
    color: "gray"
    call(): void
}

function getGift(gift: Audio | Mobile) {
    console.log(gift.color)
    if(gift.name === "audio") {
        gift.start()
    } else {
        gift.call()
    }
}


// Intersction Types

interface Bottle {
    name: string
    start(): void
}

interface Starbucks {
    name: string
    color: string
    price: number
}

const starbucksBottle: Bottle & Starbucks = {
    name: "bottle",
    start()
    {},
    color: "red",
    price: 1000
}