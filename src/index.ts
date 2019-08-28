let str1: string = 'hello'

document.write(str1)

class A {
    constructor(color: string) {
        this.color = color
    }
    color: string
    say(): void {
        console.log(this.color);
    }
}

let a: A = new A('red')
console.log(a);
console.log(A.prototype);






