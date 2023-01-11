const contactField = document.querySelector(".removeWhenSubmit")
const ctaBtn = document.querySelector(".cta_btn");
const nameInp = document.querySelector("#name");
const mailInp = document.querySelector("#email");
const messageInp = document.querySelector("#customers_message");

function validateMessageForm() {
    if (nameInp.value && mailInp.value && messageInp.value){
      ctaBtn.disabled = false;
    } else {
      ctaBtn.disabled = true;
    }  
  };
  
  nameInp.addEventListener("blur", () => {
    validateMessageForm();
  });
  mailInp.addEventListener("blur", () => {
    validateMessageForm();
  });
  messageInp.onkeyup = () =>{
    validateMessageForm();
  }

function submitForm(name) {
    contactField.innerHTML = `<p class="openhours">Thank you ${nameInp.value} for sending us a message! We will reply to ${mailInp.value} in 2-3 days.`;
};

ctaBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    submitForm();
})