var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.movie = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + " m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, age) {
        return _super.call(this, name, age) || this;
    }
    Snake.prototype.movie = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 10; }
        console.log(this.age);
        _super.prototype.movie.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var sam = new Snake('Sammy', 23);
// sam.name = 'Jack'
sam.movie();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            console.log('getName');
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            console.log('setName');
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person('Jack');
console.log(p.name);
p.name = 'Tom';
console.log(p.name);
