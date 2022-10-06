import throttle from 'lodash.throttle';

getEl = x => document.querySelector(x);

const form = getEl('.feedback-form');
const emailEl = getEl('input[name="email"]');
const messageText = getEl('textarea[name="message"]');

formStorage();

form.addEventListener('input', throttle(localForm, 500));
form.addEventListener('submit', formLog);

function localForm(event) {
  const feedbackForm = {
    email: emailEl.value,
    message: messageText.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function formLog(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

function formStorage() {
  let textMess = localStorage.getItem('feedback-form-state');
  if (textMess) {
    const storageText = localStorage.getItem('feedback-form-state');
    const { email, message } = JSON.parse(storageText);
    emailEl.value = email;
    messageText.value = message;
  }
}
