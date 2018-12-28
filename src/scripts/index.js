import '../styles/index.scss';
import { Car } from './models/car';

let car = new Car(123);
console.log(car.id);

//Timers - fire off aysnchorously 
//setTimeout() executes a function one time in the future

let timeoutId = setTimeout( function() {
    console.log('1 second passed');
}, 1000);
//setInterval() fires repeatedly 

let intervalId = setInterval( function() {
    console.log('1 second passed');
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
document.getElementById('elementId');
document.getElementsByClassName('className');
document.getElementsByTagName('tagName');

let el = document.getElementById('first');
let els = document.getElementsByClassName('p1');
let els1 = document.getElementsByTagName('p');

console.log(els1);

// Modifying DOM Elements
// let element = document.getElementById('elementId');
// element.textContent = 'new text here';
// element.setAttribute('name', 'nameValue');
// element.classList.add('myClassName');
// element.style.color = 'blue';

let element = document.getElementById('first');
element.textContent = 'New Content...';
element.setAttribute('foo', 'fooValue');
element.classList.add('p2');
element.style.color = 'red';
console.log(element);
