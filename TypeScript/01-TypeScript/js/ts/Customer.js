"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
        this.isActive = true;
    }
    Customer.prototype.announce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
exports.Customer = Customer;
