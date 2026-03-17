const navToggle = document.querySelector(".nav-toggle");
const ul = document.querySelector("header nav ul");

let count = 0;
navToggle.addEventListener("click", () => {
    count++;
    if (count === 1) {
        navToggle.innerHTML = ` <i class="fa-solid fa-xmark"></i>`
        ul.classList.add("active")
    }
    if (count === 2) {
        navToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        ul.classList.remove("active")
        count = 0;
    }
})