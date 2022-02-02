const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);
const FORM_STATE_STORAGE_KEY = "feedback-form-state";
let formData = {};
const { elements: { email, message } } = formRef;

const savedData = JSON.parse(localStorage.getItem(FORM_STATE_STORAGE_KEY));

 savedData.email ? email.value = savedData.email : email.value = '';
 savedData.message ? message.value = savedData.message : message.value = '';


// fillInputsOfFeedbackForm();

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

// function fillInputsOfFeedbackForm() {

//     if(savedData === null) return;
//     else  {
//         email.value = savedData.email;
//         message.value = savedData.message;
//     }

//     // }
//     //  savedData.email ? email.value = savedData.email : email.value = '';
//     //  savedData.message ? message.value = savedData.message : message.value = '';

//    }
     

    



