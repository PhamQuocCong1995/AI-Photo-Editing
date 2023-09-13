const faqs = document.querySelectorAll(".faq-item");
const dots = document.querySelectorAll(".dot");

var moveButton = document.getElementById("move-button");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        dot.classList.add("active");
    });
});

function leftClick() {
    moveButton.style.left = "4px";
}

function rightClick() {
    moveButton.style.left = "143px";
}

let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("password-confirm");
let eyeIcon2 = document.getElementById("eyeicon-confirm");

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "type";
    } else {
        password.type = "password";
    }
};

eyeIcon2.onclick = function () {
    if (passwordConfirm.type == "password") {
        passwordConfirm.type = "type";
    } else {
        passwordConfirm.type = "password";
    }
};
