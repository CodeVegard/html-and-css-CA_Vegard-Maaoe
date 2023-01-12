const ctaBtn = document.querySelector(".cta_btn");
const nameInp = document.querySelector("#name");
const mailInp = document.querySelector("#email");
const addressInp = document.querySelector("#street");
const cityInp = document.querySelector("#city");
const countryInp = document.querySelector("#country");
const zipInp = document.querySelector("#zip");
const cardTypeInp = document.querySelector("#cardtype");
const cardNameInp = document.querySelector("#card_owner");
const cardNumberInp = document.querySelector("#card_number");
const cardMonthInp = document.querySelector("#expiry_month");
const cardYearInp = document.querySelector("#exipiry_year");
const cardCcvInp = document.querySelector("#ccv");

function regExTest(thingToCheck, expression, container) {
  if (typeof thingToCheck === "number") { // Here's a nut to crack. When the thing I check is a number, I don't check the input itself, but the converted value stored in "zipNum". Because of that, my function can't target the correct HTML item to add a class to 
    const checkThis = thingToCheck;
    const result = expression.test(checkThis);
    if (result ===  true && result !== null) {
      container.classList.remove("invalid");
      container.classList.add("valid");
      console.log(thingToCheck);
      console.dir(container)
    } else {
      container.classList.remove("valid");
      container.classList.add("invalid");
    }
  }
  if (typeof thingToCheck === "string") {
    const checkThis = thingToCheck.value.toLowerCase();
    const result = expression.test(checkThis);
    if (result === true) {
      thingToCheck.classList.remove("invalid");
      thingToCheck.classList.add("valid");
    } else {
      thingToCheck.classList.remove("valid");
      thingToCheck.classList.add("invalid");
    }
  }
};

function validateCheckOutForm(input, container) {
  if (typeof input === "number") {
    let regEx = /^\d+$/;
    regExTest(input, regEx, container);
  }
  if (input === mailInp) {
    let regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    regExTest(input, regEx);
  } else {
    let regEx = /^[a-z æøå ,.'-]+$/;
    regExTest(input, regEx);
  }
  if (nameInp.value && mailInp.value && addressInp.value && cityInp.value && countryInp.value && zipInp.value && cardTypeInp.value && cardNameInp.value && cardNumberInp.value && cardMonthInp.value && cardYearInp.value && cardCcvInp.value) {
    ctaBtn.disabled = false;
  } else {
    ctaBtn.disabled = true;
  }
};

nameInp.addEventListener("blur", () => {
  validateCheckOutForm(nameInp);
});
mailInp.addEventListener("blur", () => {
  validateCheckOutForm(mailInp);
});
addressInp.addEventListener("blur", () => {
  validateCheckOutForm(addressInp);
});
cityInp.addEventListener("blur", () => {
  validateCheckOutForm(cityInp);
});
countryInp.addEventListener("blur", () => {
  validateCheckOutForm(countryInp);
});
zipInp.addEventListener("blur", () => {
  let zipNum = Number(zipInp.value);
  validateCheckOutForm(zipNum, zipInp);
});
cardTypeInp.addEventListener("blur", () => {
  validateCheckOutForm(cardTypeInp);
});
cardNameInp.addEventListener("blur", () => {
  validateCheckOutForm(cardNameInp);
});
cardNumberInp.addEventListener("blur", () => {
  validateCheckOutForm(cardNumberInp);
});
cardMonthInp.addEventListener("blur", () => {
  validateCheckOutForm(cardMonthInp);
});
cardYearInp.addEventListener("blur", () => {
  validateCheckOutForm(cardYearInp);
});
cardCcvInp.addEventListener("blur", () => {
  validateCheckOutForm(cardCcvInp);
});