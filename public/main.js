let  activeElement = "";
const items = document.querySelectorAll(".nav-item");
items.forEach((element) =>
    element.addEventListener("click", () => {
        items.forEach((element) => element.className = "");
        element.className = "active";
    }
));

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".left-section");
const closeIcon = document.querySelector("#close-icon");
const openIcon = document.querySelector("#open-icon");
// const ariaExpanded = nav.getAttribute("aria-expanded");
let open = false;
hamburger.addEventListener("click", () => {
    if (!open) {
        nav.classList.remove("hidden");
        closeIcon.classList.remove("hidden");
        openIcon.classList.add("hidden");
        open = true;

    } else {
        nav.classList.add("hidden");
        closeIcon.classList.add("hidden");
        openIcon.classList.remove("hidden");
        open = false;
    }

    if (open) {
        items.forEach((element) =>
            element.addEventListener("click", () => {
                nav.classList.add("hidden");
                closeIcon.classList.add("hidden");
                openIcon.classList.remove("hidden");
                open = false;
            }
        ));
    }

    hamburger.setAttribute("aria-expanded", open);
})