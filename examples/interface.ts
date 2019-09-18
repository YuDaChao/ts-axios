// function printLabel(labeledObject: { label: string }) {
//   console.log(labeledObject.label)
// }
// let myObj = { size: 10, label: 'Size 10 Object' }
// printLabel(myObj)

// interface LabeledValue {
//   label: string
// }
//
// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label)
// }
//
// let myObj = { size: 10, label: 'Size 10 Object' }
// printLabel(myObj)

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// let mySquare = { color: 'black' }
// console.log(createSquare(mySquare))
//
// interface Point {
//   readonly x: number
//   readonly y: number
// }
//
// let p1: Point = { x: 10, y: 10 }
// // p1.x = 20 error
//
// let a: number[] = [1,2,3]
// let ro: ReadonlyArray<number> = a
// // ro.length = 100 // error
// a = ro as number[]

let mySquare = createSquare({ colour: 'red', width: 40 }) // error
// let mySquare = createSquare({ width: 10, opacity: 0.5 } as SquareConfig)
console.log(mySquare)

interface SearchFun {
  (source: string, subString: string): boolean
}

let mySearch: SearchFun
mySearch = function (source: string, subString: string) {
  return source.search(subString) > -1
}

interface StrArray {
  [index: number]: string
}

let myArray: StrArray = ['bob', 'fred']

let myStr: string = myArray[0]
console.log(myStr)

interface NumberDictionary {
  [index: string]: number
  length: number
  name: number
}

interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  
  setTime(d: Date) {
  }

}
