const formRef = document.querySelector('.feedback-form');
console.log(formRef);
const FORM_STATE_STORAGE_KEY = "feedback-form-state";
let formData = {};


formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
// console.log(event.target.name)
formData[event.target.name] = event.target.value;
// console.log(formData);
localStorage.setItem(FORM_STATE_STORAGE_KEY, JSON.stringify(formData))
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.clear()
}
    



