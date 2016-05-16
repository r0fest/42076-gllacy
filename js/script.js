// modal
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

// map
window.onload = function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(document.getElementById("YMapsID"));

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(30.32939868, 59.93933100), 16);
    map.addControl(new YMaps.Zoom());

    var s = new YMaps.Style();
    s.balloonContentStyle = new YMaps.BalloonContentStyle(
        new YMaps.Template("<b style='color: #000'>$[name]</b><div style='color: #000'>$[description]</div>")
    );

    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "img/marker.svg";
    s.iconStyle.size = new YMaps.Point(79, 142);
    s.iconStyle.offset = new YMaps.Point(-37, -139);
    s.iconStyle.shadow = new YMaps.IconShadowStyle();
    s.iconStyle.shadow.href = "img/marker_shadow.png";
    s.iconStyle.shadow.size = new YMaps.Point(182, 110);
    s.iconStyle.shadow.offset = new YMaps.Point(0, -110);

    // Создает метку в центре Москвы
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.323055,59.938631), {style: s});

    placemark.name = "GllacyShop";
    placemark.description = "Торговля мороженным ООО 'Gllacy Shop'";

    // Добавляет метку на карту
    map.addOverlay(placemark);
};


// locallogin
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
