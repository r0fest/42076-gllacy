var loginElement = document.querySelector('.js-login');
var submitElement = document.querySelector('.header-login-form form');


submitElement.addEventListener('submit', function(e) {
	e.preventDefault();

	localStorage.setItem("login", loginElement.value);
});

var loginText = localStorage.getItem('login');


window.addEventListener('load', function() {
	loginElement.value = loginText;
});
