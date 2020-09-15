
let add: (x: number, y: number) => number // err

interface Add {
	(x: number, y: number): number
}

type Add1 = (x: number, y: number) => number

let addFn: Add1 = (a, b) => a + b;
console.log(addFn(1, 2))