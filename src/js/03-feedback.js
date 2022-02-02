const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);
const FORM_STATE_STORAGE_KEY = "feedback-form-state";
let formData = {};
const { elements: { email, message } } = formRef;


fillInputsOfFeedbackForm();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {

formData[event.target.name] = event.target.value;

localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formData))

};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FORM_STATE_STORAGE_KEY);
    console.log(formData);
}

function fillInputsOfFeedbackForm() {
    const savedData = JSON.parse(localStorage.getItem(FORM_STATE_STORAGE_KEY));
     if(savedData.email) {
         email.value = savedData.email;
    
    }
    if(savedData.message) {

     message.value = savedData.message;
   
   } else {
    email.value = '';
    message.value = '';

   }
     
  }
    



