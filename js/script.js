const navToggle = document.querySelector(".nav-toggle");
const ul = document.querySelector("header nav ul");

navToggle.addEventListener("click", () => {
  navToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  ul.classList.toggle("active")
});