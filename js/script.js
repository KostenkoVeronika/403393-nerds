var link = document.querySelector(".footer-contacts a");
var popup = document.querySelector(".footer-form-modal");
var overlay = document.querySelector(".footer-modal-overlay");
var close = popup.querySelector(".write-us-close");
var yourname = popup.querySelector("[name=yourname]");
var form = popup.querySelector("form");
var youremail = popup.querySelector("[name=youremail]");
var yourletter = popup.querySelector("[name=yourletter]");
link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("footer-form-show");
  popup.classList.add("footer-form-show");
  yourname.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("footer-form-show");
  popup.classList.remove("footer-form-show");
  popup.classList.remove("footer-form-error");
});
form.addEventListener("submit", function(event) {
  if (!yourname.value || !youremail.value || !yourletter.value) {
    event.preventDefault();
    popup.classList.remove("footer-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("footer-form-error");
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("footer-form-show")) {
      popup.classList.remove("footer-form-show");
      overlay.classList.remove("footer-form-show");
      popup.classList.remove("footer-form-error");
    }
  }
});