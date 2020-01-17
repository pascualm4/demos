

import { Customer } from "./ts/Customer";

// create a new instance
let firstCustomer = new Customer("Alice");
let newMessage: string = firstCustomer.announce();

// change the text on the page
let webHeading = document.querySelector('h1');
if (webHeading) {
    webHeading.textContent = newMessage;
}
