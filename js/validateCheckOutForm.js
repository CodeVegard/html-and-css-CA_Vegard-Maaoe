const ctaBtn = document.querySelector(".cta_btn");
const nameInp = document.querySelector("#name");
const mailInp = document.querySelector("#email");
const addressInp = document.querySelector("#street");
const cityInp= document.querySelector("#city");
const countryInp = document.querySelector("#country");
const zipInp = document.querySelector("#zip");
const cardTypeInp = document.querySelector("#cardtype");
const cardNameInp = document.querySelector("#card_owner");
const cardNumberInp = document.querySelector("#card_number");
const cardMonthInp = document.querySelector("#expiry_month");
const cardYearInp = document.querySelector("#exipiry_year");
const cardCcvInp = document.querySelector("#ccv");

function validateCheckOutForm() {
    if(nameInp.value && mailInp.value && addressInp.value && cityInp.value && countryInp.value && zipInp.value && cardTypeInp.value && cardNameInp.value && cardNumberInp.value && cardMonthInp.value && cardYearInp.value && cardCcvInp.value){
      ctaBtn.disabled = false;
    } else {
      ctaBtn.disabled = true;
    }
};

nameInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
mailInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
addressInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cityInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
countryInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
zipInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardTypeInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardNameInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardNumberInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardMonthInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardYearInp.addEventListener("blur", () => {
  validateCheckOutForm();
});
cardCcvInp.addEventListener("blur", () => {
  validateCheckOutForm();
});



/*
nameInp.onkeyup = () => {validateForm();};
mailInp.onkeyup = () => {validateForm();};
addressInp.onkeyup = () => {validateForm();};
cityInp.onkeyup = () => {validateForm();};
countryInp.onkeyup = () => {validateForm();};
zipInp.onkeyup = () => {validateForm();};
cardTypeInp.onkeyup = () => {validateForm();};
cardNameInp.onkeyup = () => {validateForm();};
cardNumberInp.onkeyup = () => {validateForm();};
cardMonthInp.onkeyup = () => {validateForm();};
cardYearInp.onkeyup = () => {validateForm();};
cardCcvInp.onkeyup = () => {validateForm();};
/*


function checkForm(){
  console.log("checking form");
  console.log(nameInp.value, mailInp.value, addressInp.value, cityInp.value, countryInp.value, zipInp.value, cardTypeInp.value, cardNameInp.value, cardNumberInp.value, cardMonthInp.value, cardYearInp.value, cardCcvInp.value);
  if (nameInp.value, mailInp.value, addressInp.value, cityInp.value, countryInp.value, zipInp.value, cardTypeInp.value, cardNameInp.value, cardNumberInp.value, cardMonthInp.value, cardYearInp.value, cardCcvInp.value) {
    activateBtn();
  }
};
 */

/*
function checkInp(input){
  input.addEventListener("blur",() => {
    checkForm(nameInp, mailInp, addressInp, cityInp, countryInp, zipInp, cardTypeInp, cardNameInp, cardNumberInp, cardMonthInp, cardYearInp, cardCcvInp);
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
*/