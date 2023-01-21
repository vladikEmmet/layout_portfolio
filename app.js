const burgerBtn = document.querySelector(".burger-wrap");
const burgerX = burgerBtn.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".mobile-nav");
const changeLanguageBtns = document.querySelectorAll(".change-language-btn");
const mobileNav = document.querySelector(".mobile-nav-list");

mobileNav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    document.body.classList.toggle("noscroll");
    burgerX.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  }
});

burgerBtn.addEventListener("click", function () {
  document.body.classList.toggle("noscroll");
  burgerMenu.classList.toggle("active");
  burgerX.classList.toggle("active");
});

document.addEventListener("touchmove", function (e) {
  if (burgerMenu.classList.contains("active")) {
    e.preventDefault();
  }
});

changeLanguageBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    console.log("click");
    e.preventDefault();
    document
      .querySelectorAll(".change-language-ru")
      .forEach((btnRu) => btnRu.classList.toggle("active"));
    document
      .querySelectorAll(".change-language-eng")
      .forEach((btnEng) => btnEng.classList.toggle("active"));
  })
);
