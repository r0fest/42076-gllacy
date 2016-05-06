var modal = document.querySelector('.form-feedback');
var ModalLink = document.querySelector('.js-modal');
var modalClose = document.querySelector('.form-feedback-close');
var submitFeedback = document.querySelector('.feedback');
var modalFocus = document.querySelector('#name');
var mailFeedback = document.querySelector('#mail');
var textareaFeedback = document.querySelector('.feedback textarea');
var nameFeedback = modalFocus;
var modalShadow = document.createElement('div');


function Close() {
	modal.classList.add('modal-hide');
	modalShadow.classList.add('modal-hide-shadow');

	setTimeout(function() {
		modal.classList.remove('modal-show');
		document.body.removeChild(modalShadow);	
		modal.classList.remove('modal-hide');
		modalShadow.classList.remove('modal-hide-shadow');
	}, 600);
}

ModalLink.addEventListener('click', function(e) {
	e.preventDefault();

	document.body.appendChild(modalShadow);
	modalShadow.classList.add('modal-show-shadow');

	modal.classList.add("modal-show");

	if(nameStorage && mailStorage) {
		nameFeedback.value = nameStorage;
		mailFeedback.value = mailStorage;
		textareaFeedback.focus();
	} else { 
		modalFocus.focus();
	}
});

submitFeedback.addEventListener('submit', function(e) {
	e.preventDefault();

	localStorage.setItem("name", nameFeedback.value);
	localStorage.setItem("mail", mailFeedback.value);
});

var nameStorage = localStorage.getItem('name');
var mailStorage = localStorage.getItem('mail');

modalClose.addEventListener('click', function(e) {
	e.preventDefault();

	Close();
});

modalShadow.addEventListener('click', function(e) {
	e.preventDefault();

	Close();
});

window.addEventListener('keydown', function(e) {
	if(e.keyCode === 27) {
		Close();
	}
});