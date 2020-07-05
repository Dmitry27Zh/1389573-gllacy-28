var buttonFeedback = document.querySelector('.button-feedback');
var modalFeedback = document.querySelector('.modal-feedback');
var modalClose = modalFeedback.querySelector('.modal-close');
var feedbackForm = modalFeedback.querySelector('.feedback-form');
var feedbackInputName = feedbackForm.querySelector('.feedback-input-name');
var feedbackInputEmail = feedbackForm.querySelector('.feedback-input-email');
var feedbackTextarea = feedbackForm.querySelector('.feedback-textarea');
var isStorageAvailable = true;
var StorageName;
var StorageEmail;

try{
  StorageName = localStorage.getItem('feedback-user-name');
} catch (error) {
  isStorageAvailable = false;
}

if(isStorageAvailable) {
  StorageEmail = localStorage.getItem('feedback-user-email');
}

buttonFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  if(isStorageAvailable) {
    feedbackInputName.value = StorageName;
    feedbackInputEmail.value = StorageEmail;
    feedbackTextarea.focus();
  } else {
    feedbackInputName.focus();
  }
})

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
}) 

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-error');
  }
})

feedbackForm.addEventListener('submit', function(evt) {
  if(!feedbackInputName.value || !feedbackInputEmail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  } else {
    localStorage.setItem('feedback-user-name', feedbackInputName.value);
    localStorage.setItem('feedback-user-email', feedbackInputEmail.value);
  }
})



