gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

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

const svgContainer = document.querySelector("#cloud-animation");
const cloud = svgContainer.querySelector(".cloud");
const sun = svgContainer.querySelector(".sun-group")
const sunFace = svgContainer.querySelector(".face")
let tl = gsap.timeline();
    tl.to(".sun-group", {y:-55, x: 20, duration: 2, scale: 1.3});
    tl.to(".ray", { duration: 1, opacity: 0.6 }, 0);
// cloud.addEventListener("mouseenter", () => {
//     tl.reverse();
// })
// cloud.addEventListener("mouseleave", () => {
//         tl.play();

// })
// tl.set(".sun-group", {svgOrigin: "106 106"});
// cloud.addEventListener("mouseenter", () => {
//     gsap.to(".sun-group", {rotation:"+=22.5"})
// })
const faces = ["big-smile-face", "big-smile-face-2", "dead-face", "frowny-face", "hypnotized-face", "sad-face", "skeptical-face", "smiley-face", "surprised-face", "heart-eyes-face"]
let randomFace;
svgContainer.addEventListener("mouseenter", () => {
    // tl.to(".cloud", { duration: 0.5, x:-50, opacity: 0 })
    tl.to(".sun-group", { y: -60, x: 25, duration: 1 })
    randomFace = Math.floor(Math.random() * 10);
    let faceFilename = "public/images/faces/" + faces[randomFace] + ".svg"
    sunFace.setAttribute("href", faceFilename)
    if (randomFace == 8) {
        sunFace.setAttribute("height", 40)
        sunFace.setAttribute("y", 120)
    }

    tl.to(".face", { duration: 1, opacity: 1 }, "<")
    Draggable.create(".sun-group", {
    })
})

svgContainer.addEventListener("mouseleave", () => {
    tl.to(".face", { duration: 1, opacity: 0 })
    if (randomFace == 8) {
        sunFace.setAttribute("height", 30)
        sunFace.setAttribute("y", 125)
    }
    sunFace.setAttribute("href", "");
    tl.to(".sun-group", { y: -55, x: 20, duration: 1 }, "<")
})

