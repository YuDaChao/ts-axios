// function printLabel(labeledObject: { label: string }) {
//   console.log(labeledObject.label)
// }
// let myObj = { size: 10, label: 'Size 10 Object' }
// printLabel(myObj)
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
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
var mySquare = createSquare({ colour: 'red', width: 40 }); // error
// let mySquare = createSquare({ width: 10, opacity: 0.5 } as SquareConfig)
console.log(mySquare);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) > -1;
};
var myArray = ['bob', 'fred'];
var myStr = myArray[0];
console.log(myStr);
