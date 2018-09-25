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