export {}
let isDone: boolean = true
let decimal: number = 10 // 十进制
let hex: number = 0x003 // 十六进制
let binary: number = 0b1010 // 二进制
let octal: number = 0o77 // 八进制
let color: string = 'blue'
color = 'red'
let fullName: string = 'Bob'
let age: number = 30
let sentence: string = `Hello my name is ${fullName}, age is ${age}`

// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]

let t: [string, number]
t = ['hello', 23]
// t = [23, 'hello']  // error

enum Color { Red, Green, Blue }
let c: Color = Color.Blue
console.log(c) // 2
let colorName: string = Color[1]
console.log(colorName)

let notSure: any = 7
notSure = 'sure'
notSure = false

//  结构
// let input: [number, number] = [1,2]
// let [first, second] = input
//
// function f([first, second]: [number, number]) {
//   console.log(first, second)
// }
// f(input)

// let [first, ...second] = [1,2,3,4,5]
// console.log(first, second)
// let [,second,,fourth] = [1,2,3,4]
// let o = {
//   a: 'foo',
//   b: 12,
//   c: 'bar'
// }
//
// let {a: newName, b}: {a: string, b: number} = o

function keepWholeObj(wholeObj: { a: string, b?: number }) {
  let { a, b = 10 } = wholeObj
  console.log(a, b)
}

keepWholeObj({a: 'foo'})
