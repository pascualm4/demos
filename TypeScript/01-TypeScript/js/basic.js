"use strict";
exports.__esModule = true;
var Customer_1 = require("./ts/Customer");
// create a new instance
var firstCustomer = new Customer_1.Customer("Alice");
var newMessage = firstCustomer.announce();
// change the text on the page
var webHeading = document.querySelector('h1');
if (webHeading) {
    webHeading.textContent = newMessage;
}
