// This was done with help from this tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(10000);
  max = Math.floor(99999);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt());
// This was simply added to make check that the function runs properly.

let random_number = "random_number"

document.getElementById("random_number").innerHTML= getRandomInt()


// I also want to add a function which gets the email from my form (which is shown in the URL when filling out the form). 
// getting URL by using this method: https://stackoverflow.com/questions/6257463/how-to-get-the-url-without-any-parameters-in-javascript

let url = window.location.href.split('?')

console.log(url)

// getting a basic grasp on regex via:
//https://tutorial.eyehunts.com/js/javascript-extract-email-from-string-regex-example-code/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 

let regex = /([a-zA-Z0-999999._-]+%[a-zA-Z0-999999._-]+.[a-z])/; 

let email = regex.exec(url)

console.log(email)

// At this point I get "123%40123.no&s" when inputing "123@123.no" as the email, or "abc%40acb.no&s" from "abc@abc.no"