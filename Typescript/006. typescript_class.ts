class Animal {
    color: string;
    constructor(color:string) {
        this.color = color
    }
    start() {
        console.log("start")
    }
}

const cat = new Animal("white")

class Animal1 {
    constructor(public color:string) {
        this.color = color
    }
    start() {
        console.log("start")
    }
}

const dog = new Animal("white")

class Animal2 {
    constructor(readonly color:string) {
        this.color = color
    }
    start() {
        console.log("start")
    }
}

const kangaroo = new Animal("white")


// 접근 제한자(Access modifier) - public, private, protected

class Animal3 {
    protected name: string = "lion"
    color: string;
    static leg: string
    constructor(color: string) {
        this.color = color
    }
    start() {
        console.log("start")
        console.log(this.name)
        console.log(Animal3.leg)
    }
}

class lion extends Animal3 {
    constructor(color: string) {
        super(color)
    }
    showName() {
        console.log(super.name)
    }
}

const z4 = new lion("Black")
// console.log(z4.name)

/* 
public: 자식 클래스 내부에서 접근할 수 있다.(아무것도 안적으면 public) 
private(#): 자식 클래스 내부에서 접근할 수 없다.

protected: 자식 클래스 내부에서 접근 할 수 있다. (클래스 인스턴스로는 접근 X)
*/

// Abstract class

abstract class Animal4 {
    protected name: string = "lion"
    color: string;
    static leg: string
    constructor(color: string) {
        this.color = color
    }
    start() {
        console.log("start")
        console.log(this.name)
        console.log(Animal3.leg)
    }
}

abstract class koala{
    color: string
    constructor(color: string) {
        this.color = color
    }
    onTree() {
        console.log("koala is on tree")
    }
    abstract doSomething():void
}

class babyKoala extends koala {
    constructor(color: string){
        super(color)
    }
    doSomething(){
        console.log("feed me")
    }
}
// 추상 클래스는 상속받은 쪽에서 구체적인 구현을 해야된다. 