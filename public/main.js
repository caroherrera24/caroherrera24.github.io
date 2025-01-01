let  activeElement = "";
const items = document.querySelectorAll(".nav-item")
items.forEach((element) =>
    element.addEventListener("click", () => {
        items.forEach((element) => element.className = "");
        element.className = "active";
    }
));