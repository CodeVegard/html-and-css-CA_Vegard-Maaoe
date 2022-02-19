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

//--------------------------------------------------------------------//

//I also want my site to be able to print the customers name and email when we get to the success page. This seems like it might be possible, but should not be my priority. Gotta focus on the task, namely the HTML and CSS. It seems possible, see links below:
// https://stackoverflow.com/questions/14939010/get-value-from-text-area
//https://gomakethings.com/getting-all-of-a-forms-elements-with-vanilla-js/
//https://www.codegrepper.com/code-examples/javascript/how+to+get+value+of+input+vanilla+js 

let name = getElementById("name").value;

console.log(getElementById())