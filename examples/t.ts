function identity<T>(arg: T): T {
  return arg
}

console.log(identity<string>('Hello'))

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 19
myGenericNumber.add = function (x, y) {
  return x + y
}

interface LengthWise {
  length: number
}

function logIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}
