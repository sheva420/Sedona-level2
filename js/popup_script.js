var popup = document.querySelector(".popup--success");
var popup_close = document.querySelector(".popup__button")
var popup_link = document.querySelector(".form__button");

popup_link.addEventListener("click", function(evt) {
	evt.preventDefault ();
	popup.classList.add("popup--show");
});

popup_close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("popup--show");
});