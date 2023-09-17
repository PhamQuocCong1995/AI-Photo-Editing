const faqs = document.querySelectorAll(".faq-item");
const dots = document.querySelectorAll(".dot");

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
