// This was done with help from this tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  min = Math.ceil(10000);
  max = Math.floor(99999);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt());
// I can see this runs like it should

let random_number = "random_number"

document.getElementById("random_number").innerHTML= getRandomInt();


// I also want to add a function which gets the email from my form (which is shown in the URL when filling out the form). 
// getting URL by using this method: https://stackoverflow.com/questions/6257463/how-to-get-the-url-without-any-parameters-in-javascript

let url = window.location.href.split('?');

console.log(url);

// Getting a basic grasp on regex via:
//https://tutorial.eyehunts.com/js/javascript-extract-email-from-string-regex-example-code/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 

let regex = /([email=]+[a-zA-Z0-999999._-]+%[a-zA-Z0-999999._-]+.[a-z])/g; 

let emailcoded = regex.exec(url);

console.log(emailcoded);

// At this point I get "123%40123.no&s" when inputing "123@123.no" as the email, or "abc%40acb.no&s" from "abc@abc.no"

// Found a possible solution here:
//https://stackoverflow.com/questions/31803648/decoding-40-back-to-using-jquery-to-populate-input-fields 


// And this seems to work, but there's two arrays (ie, "123%40123.no&s" AND "123%40123.no&s") and I only want the first one. Found a solution here:
//https://stackoverflow.com/questions/4090491/how-to-get-the-first-element-of-an-array

let emaildecoded = decodeURIComponent(emailcoded[0]);

console.log(emaildecoded);


// This works, but I'm left with "abc@acb.no&s". Found a possible solution here:
//https://flaviocopes.com/how-to-remove-last-char-string-js/ 

let emailsliced = emaildecoded.slice(6, -2)

console.log(emailsliced);

document.getElementById("email").innerHTML= emailsliced;

//I know this is probably both ugly and insecure, but that wasn't my goal. JS is not in the corriculum atm, this was only done for fun.