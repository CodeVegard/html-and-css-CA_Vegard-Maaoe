
const ctaBtn = document.querySelector(".cta_btn");

function activateBtn() {
  ctaBtn.disabled = false;
};

let nameInp = document.querySelector("#name");
const mailInp = document.querySelector("#email");
const addressInp = document.querySelector("#street");
const cityInp= document.querySelector("#city");
const countryInp = document.querySelector("#country");
const zipInp = document.querySelector("#zip");
const cardTypeInp = document.querySelector("#cardtype");
const cardNameInp = document.querySelector("#card_owner");
const cardNumberInp = document.querySelector("#card_number");
const cardMonthInp = document.querySelector("#expiry_month");
const cardYearInp = document.querySelector("#expiry_year");
const cardCcvInp = document.querySelector("#CCV");


function checkForm(inputFromCheckInp){
  console.log("checking form");
  if (inputFromCheckInp.value) {
    activateBtn();
  }
};


function checkInp(input){
  input.addEventListener("blur",() => {
  checkForm(input);
});
};

checkInp(nameInp);
checkInp(mailInp);
checkInp(addressInp);
checkInp(cityInp);
checkInp(countryInp);
checkInp(zipInp);
checkInp(cardTypeInp);
checkInp(cardNameInp);
checkInp(cardNumberInp);
checkInp(cardMonthInp);
checkInp(cardYearInp);
checkInp(cardCcvInp);