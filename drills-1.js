'use strict';
function min(numbers){
  if (!numbers || numbers.length === 0){
    return null;
  }
  let currentMin = Infinity;
  let i = 0;
  while(i < numbers.length){
    if(numbers[i] < currentMin){
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

function max(numbers){
  if (!numbers || numbers.length === 0){
    return null;
  }
  let currentMax = Number.NEGATIVE_INFINITY;
  let i = 0;
  while(i < numbers.length){
    if(numbers[i] > currentMax){
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

let numbersArray = [2,3,4,5,6,7,8];
console.log(max(numbersArray));
console.log(min(numbersArray));

function average(numbers) {
  if (!numbers || (numbers.length === 0)) {
    return null;
  }

  let sum = 0;
  numbers.forEach((value) => {
    sum += value;
  });
  
  return sum / numbers.length;
}

console.log(average(numbersArray));


function repeat(fn,n){
  for(let i = 0; i < n; i++){
    fn();
  }
}
function hello(){
  console.log("hello world");
}
function goodbye(){
  console.log("goodbye world");
}

repeat(hello,5);
repeat(goodbye, 5);

function filter(arr, fn) {
  const newArray = [];
  for (const item of arr) {
    if (fn(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

console.log(filter(myNames, (name) => name[0] === 'R'));

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    const needsS = warningCounter === 0 || warningCounter >= 2;
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${needsS ? 's' : ''} today!`);
  }
}

let icyRoadsWarning = hazardWarningCreator('icyRoads');
icyRoadsWarning('main street');
icyRoadsWarning('side street');
icyRoadsWarning('main street');

const debrisFallingWarning = hazardWarningCreator('debris falling');
debrisFallingWarning('main street');
debrisFallingWarning('main street');

icyRoadsWarning('main street');
