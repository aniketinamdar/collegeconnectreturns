const student = document.querySelector(".student");
const club = document.querySelector(".club");
const form = document.querySelector("#form");
const switchs = document.querySelectorAll(".switch");

let current = 1;

function tab2() {
    form.style.marginLeft = "-100%";
    student.style.background = "none";
    club.style.background = "linear-gradient(45deg, #00d5fc, #046af6);"
    switchs[current - 1].classList.add("active");
}
function tab1() {
    form.style.marginLeft = "0";
    club.style.background = "none";
    student.style.background = "linear-gradient(45deg, #00d5fc, #046af6);"
    switchs[current - 1].classList.remove("active");
}