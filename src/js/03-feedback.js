import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const userEmail = document.querySelector('[name=email]');
const userMessage = document.querySelector('[name=message]');
const input = document.querySelector('form');

const getInputObj = () => localStorage.getItem(STORAGE_KEY);

isDatasInStorage();

input.addEventListener('input', throttle(inputChange, 500));
input.addEventListener('submit', formSubmit);


function inputChange(evt) {
    const inputEmail = userEmail.value;
    const inputMessage = userMessage.value;
    const newDatas = createInputObj(inputEmail, inputMessage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newDatas));
};

function createInputObj (email, message) {
    return {
        email,
        message,
    }
};

function formSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(JSON.parse(getInputObj()));
    localStorage.removeItem(STORAGE_KEY);
};

function isDatasInStorage() {
    const savedDatas = getInputObj();
    if (savedDatas) {
        autocomleteForm(JSON.parse(savedDatas));
    };
};

function autocomleteForm({email, message}) {
    userEmail.value = email;
    userMessage.value = message;
};