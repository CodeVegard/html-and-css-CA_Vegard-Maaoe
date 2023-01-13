const contactField = document.querySelector(".removeWhenSubmit")
const ctaBtn = document.querySelector(".cta_btn");
const nameInp = document.querySelector("#name");
const mailInp = document.querySelector("#email");
const messageInp = document.querySelector("#customers_message");

function validateMessageForm(input) {
  if (input.value) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};


function checkInputs() {
  if (nameInp.value && mailInp.value && messageInp.value.length > 10) {
    ctaBtn.disabled = false;
  } else {
    ctaBtn.disabled = true;
  }
}

nameInp.addEventListener("blur", () => {
  validateMessageForm(nameInp);
  checkInputs();
});
mailInp.addEventListener("blur", () => {
  validateMessageForm(mailInp);
  checkInputs();
});
messageInp.onkeyup = () => {
  validateMessageForm(messageInp);
  checkInputs();
}

function submitForm() {
  contactField.innerHTML = `<p class="openhours">Thank you ${nameInp.value} for sending us a message! We will reply to ${mailInp.value} in 2-3 days.`;
};

ctaBtn.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm();
})