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

function regExNum(thingToCheck, container, minNum, maxNum) {
  if (thingToCheck >= minNum && thingToCheck < maxNum) {
    container.classList.remove("invalid");
    container.classList.add("valid");
  } else {
    container.classList.remove("valid");
    container.classList.add("invalid");
  }
};

function validateCheckOutForm(input) {
  if (input.value) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

function checkInputs() {
  if (nameInp.value && mailInp.value && addressInp.value && cityInp.value && countryInp.value && zipInp.value && cardTypeInp.value && cardNameInp.value && cardNumberInp.value && cardMonthInp.value && cardYearInp.value && cardCcvInp.value) {
    ctaBtn.disabled = false;
  } else {
    ctaBtn.disabled = true;
  }
}

nameInp.addEventListener("blur", () => {
  validateCheckOutForm(nameInp);
  checkInputs();
});
mailInp.addEventListener("blur", () => {
  validateCheckOutForm(mailInp);
  checkInputs();
});
addressInp.addEventListener("blur", () => {
  validateCheckOutForm(addressInp);
  checkInputs();
});
cityInp.addEventListener("blur", () => {
  validateCheckOutForm(cityInp);
  checkInputs();
});
countryInp.addEventListener("blur", () => {
  validateCheckOutForm(countryInp);
  checkInputs();
});
zipInp.addEventListener("blur", () => {
  let zipNum = Number(zipInp.value);
  regExNum(zipNum, zipInp, 1, 10000);
  checkInputs();
});
cardTypeInp.addEventListener("blur", () => {
  validateCheckOutForm(cardTypeInp);
  checkInputs();
});
cardNameInp.addEventListener("blur", () => {
  validateCheckOutForm(cardNameInp);
  checkInputs();
});
cardNumberInp.addEventListener("blur", () => {
  validateCheckOutForm(cardNumberInp);
  checkInputs();
});
cardMonthInp.addEventListener("blur", () => {
  validateCheckOutForm(cardMonthInp);
  checkInputs();
});
cardYearInp.addEventListener("blur", () => {
  const cardYearNum = cardYearInp.value;
  regExNum(cardYearNum, cardYearInp, 2023, 2030);
  checkInputs();
});
cardCcvInp.addEventListener("blur", () => {
  const cardCcvNum = cardCcvInp.value;
  regExNum(cardCcvNum, cardCcvInp, 1, 999);
  checkInputs();
});

cardCcvInp.onkeyup = () => {
  const cardCcvNum = cardCcvInp.value;
  regExNum(cardCcvNum, cardCcvInp, 1, 999);
  checkInputs();
}