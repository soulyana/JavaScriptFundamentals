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