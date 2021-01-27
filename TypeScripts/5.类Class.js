/*
 * @Author: Peng zhang
 * @Date: 2021-01-27 17:31:09
 * @LastEditTime: 2021-01-27 18:23:11
 * @Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    Animal.prototype.getType = function () {
        return "type is " + this.type;
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(type) {
        var _this = _super.call(this, 'Cat') || this;
        _this.name = type;
        return _this;
    }
    Cat.prototype.doubleName = function () {
        return "name is " + this.name + this.name;
    };
    return Cat;
}(Animal));
var dog = new Animal('Dog');
console.log(dog.getType());
var lili = new Cat('lili');
console.log(lili.doubleName(), lili.type);
