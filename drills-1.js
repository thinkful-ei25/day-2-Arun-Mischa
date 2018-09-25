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