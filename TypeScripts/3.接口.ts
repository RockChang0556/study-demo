
let add: (x: number, y: number) => number // err


// 以下 interface type 两种写法功能一致
interface Add {
	(x: number, y: number): number
}

type Add1 = (x: number, y: number) => number

let addFn: Add1 = (a, b) => a + b;
console.log(addFn(1, 2))

interface AnimalType {
	type: string
	getType(): string
}
class Animal1 implements AnimalType {
  public type: string;
  constructor(type: string) {
    this.type = type;
  }
  getType() {
    return `type is ${this.type}`
  }
}