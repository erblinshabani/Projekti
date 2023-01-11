const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
var navList = document.getElementById('nav-list');

hamburger.addEventListener("click", () => {
    navList.classList.toggle('nav-list-active')
    hamburger.classList.toggle('hamburger-active')
})

if (navMenu.classList != "active") {
    navMenu.addEventListener("click", () => {
        hamburger.classList.remove('hamburger-active');
        navList.classList.remove('nav-list-active')
    })
}