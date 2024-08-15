var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function CanFly(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.fly = function () {
            console.log('Flying');
        };
        return class_1;
    }(Base));
}
function CanSwim(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.swim = function () {
            console.log('Swimming');
        };
        return class_2;
    }(Base));
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var BirdFish = /** @class */ (function (_super) {
    __extends(BirdFish, _super);
    function BirdFish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BirdFish;
}(CanSwim(CanFly(Animal))));
var birdFish = new BirdFish('Nemo');
birdFish.fly(); // Output: Flying
birdFish.swim(); // Output: Swimming
