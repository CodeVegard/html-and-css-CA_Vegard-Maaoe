// This was done with help from this tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(10000);
  max = Math.floor(99999);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt());
// This was simply added to make sure the function runds properly.

let random_number = "random_number"

document.getElementById("random_number").innerHTML= getRandomInt()