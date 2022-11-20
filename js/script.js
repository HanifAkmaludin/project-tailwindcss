const navbar = document.getElementById("navbar");
const containerNav = document.querySelector("#navbar .container");
const navLg = document.querySelector("#navbar .container.container-navbar");
window.addEventListener("scroll", () => {
    containerNav.classList.toggle("area-nav", window.scrollY == 0);
});

const hamburger = document.querySelector("#navbar .container .hamburger");
const line1 = document.querySelector(
    "#navbar .container .hamburger span:nth-child(1)"
);
const line2 = document.querySelector(
    "#navbar .container .hamburger span:nth-child(2)"
);
const line3 = document.querySelector(
    "#navbar .container .hamburger span:nth-child(3)"
);
const container = document.querySelector("#navbar .container");
const nav = document.querySelector("#navbar .container .nav");
const navlinks = document.querySelector("#navbar .container .navbar-links");
const navlinksPosition = document.querySelector(
    "#navbar .container .navbar-links.bottom-10"
);

hamburger.addEventListener("click", () => {
    const animation = document.querySelector("#navbar .container.lebar");
    const navlinksBottom = document.querySelector(
        "#navbar .container .navbar-links.navbottom"
    );
    line1.classList.toggle("rotate-span-1");
    line2.classList.toggle("animation-span-2");
    line3.classList.toggle("rotate-span-3");
    nav.classList.toggle("jarak");
    console.log(typeof container.getAttribute("class"));
    if (navlinksBottom !== null) {
        navlinks.classList.remove("navbottom");
        navlinks.classList.add("bottom-10");
    } else if (navlinksPosition !== null) {
        navlinks.classList.remove("bottom-10");
        navlinks.classList.add("navbottom");
    }

    if (animation !== null) {
        container.classList.remove("lebar");
        container.classList.toggle("lebarReverse");
    } else {
        container.classList.remove("lebarReverse");
        container.classList.toggle("lebar");
    }
});

// @keyframes lebarReverse {
//     0% {
//         @apply w-full h-[300px];
//     }
//     50% {
//         @apply w-full h-[33px];
//     }
//     100% {
//         @apply w-[60%] h-[33px];
//     }
// }

// .lebar {
//     @apply lebar 1.5s forwards;
// }

// .lebarReverse {
//     @apply lebarReverse 1.5s forwards;
// }
// @keyframes lebar {
//     0% {
//         @apply w-[60%] h-[33px];
//     }
//     50% {
//         @apply w-full h-[33px];
//     }
//     100% {
//         @apply w-full h-[300px];
//     }
// }
