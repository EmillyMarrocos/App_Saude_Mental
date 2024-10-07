const iconBoxes = document.querySelectorAll(".icon-box");
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

iconBoxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        body.classList.add("prevent-background-scroll");
    });
});

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        modal.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
        e.target.style.display = "none";
        body.classList.remove("prevent-background-scroll");
    }
});

maximizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let modal = btn.closest(".popup");
        let container = modal.querySelector(".popup-container");
        let body = modal.querySelector(".popup-body");

        if (modal.classList.contains("maximized")) {
            container.style.width = "min(500px, 90%)";
            container.style.top = "10%";
            body.style.height = "auto";
        } else {
            container.style.width = "100%";
            container.style.top = "50%";
            body.style.height = "90vh";
        }

        modal.classList.toggle("maximized");
    });
});
