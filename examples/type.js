"use strict";
exports.__esModule = true;
var isDone = true;
var decimal = 10; // 十进制
var hex = 0x003; // 十六进制
var binary = 10; // 二进制
var octal = 63; // 八进制
var color = 'blue';
color = 'red';
var fullName = 'Bob';
var age = 30;
var sentence = "Hello my name is " + fullName + ", age is " + age;
// let list: number[] = [1, 2, 3]
var list = [1, 2, 3];
var t;
t = ['hello', 23];
// t = [23, 'hello']  // error
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 2
var colorName = Color[1];
console.log(colorName);
var notSure = 7;
notSure = 'sure';
notSure = false;
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
function keepWholeObj(wholeObj) {
    var a = wholeObj.a, _a = wholeObj.b, b = _a === void 0 ? 10 : _a;
    console.log(a, b);
}
keepWholeObj({ a: 'foo' });
