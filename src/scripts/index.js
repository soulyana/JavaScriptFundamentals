import "../styles/index.scss";
import { Car } from "./models/car";
import $ from "jquery";

let car = new Car(123);
console.log(car.id);

//Timers - fire off aysnchorously
//setTimeout() executes a function one time in the future

let timeoutId = setTimeout(function() {
  console.log("1 second passed");
}, 1000);
//setInterval() fires repeatedly

let intervalId = setInterval(function() {
  console.log("1 second passed");
}, 1000);

//if need to cancel
clearInterval(intervalId);

//The location object
//Properties: href, hostname, port, pathname, search
//Methods: assign(), reload()
//access on window, the global obj
console.log(location.href);

//the document object
//Properties: body, forms, links
//Methods: createElement(), createEvent(), getElementById(), getElemenetsByClassName()
//Events: onload, onclick, onkeypress
//Select DOM elements
document.getElementById("elementId");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");

let el = document.getElementById("first");
let els = document.getElementsByClassName("p1");
let els1 = document.getElementsByTagName("p");

console.log(els1);

// Modifying DOM Elements
// let element = document.getElementById('elementId');
// element.textContent = 'new text here';
// element.setAttribute('name', 'nameValue');
// element.classList.add('myClassName');
// element.style.color = 'blue';

let element = document.getElementById("first");
element.textContent = "New Content...";
element.setAttribute("foo", "fooValue");
element.classList.add("p2");
element.style.color = "red";
console.log(element);

//Promises and Error Handling
//Error handling using try and catch
try {
  let car = newCar;
} catch (error) {
  console.log("error: ", error);
}
console.log("continuing...");

//finally - execute some code regardless of an error being thrown
try {
  let car = null;
} catch (error) {
  console.log("error: ", error);
} finally {
  console.log("this always executes");
}

//Developer defined errors
try {
  // code here...
  throw new Error("my custom error");
} catch (error) {
  console.log("error: ", error);
} finally {
  console.log("this always executes");
}

//Promises - designed to work with asynchournous javascript; temp holder for a value that will get back to you
//create a promise
// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(reject, 100, 'someValue');
//     }
// );
// console.log(promise);

//Settling a promise
// let promise = new Promise(
//     function(resolve, reject) {
//         setTimeout(resolve, 100, 'someValue');
//     }
// );
// promise.then(
//     value => console.log('fulfilled: ' + value),
//     error => console.log('rejected: ' + error)
// );

// //Data Access Using HTTP
// //HTTP Requests Using jQuery
// let promise1 = $.get("http://myid.mockapi.io/api/v1/users");
// promise1.then(
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );
// //HTTP POST using jQuery
// let user = {
//     name: 'Mark Zamoyta',
//     avatar: 'mark.jpg'
// };
// let promise2 = $.post("http://myid.mockapi.io/api/v1/users", user);
// promise2.then(
//     data => console.log('data: ', data),
//     error => console.log('error: ', error)
// );

//FORMS
//Preventing Form Submission
//The submit event
let form = document.getElementById("user-form");

form.addEventListener("submit", event => {
  let user = form.elements["user"];
  let avatarFile = form.elements["avatar-file"];
  let userError = document.getElementById("user-error");

  if (user.value.length < 4) {
    userError.textContent = "Invalid Entry";
    userError.style.color = "red";
    user.style.borderColor = "red";
    user.focus(); //to give focus to error field

    console.log(user.value, avatarFile.value);
    //prevent the browser from submitting the form
    event.preventDefault();
  }
});
