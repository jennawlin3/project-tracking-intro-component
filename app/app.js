const menuIcon = document.querySelector(".menu-icon");
const navMobile = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", e => {
    if(e) {
        navMobile.classList.toggle("hide");
    }
})