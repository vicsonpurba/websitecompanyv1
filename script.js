const menu_icon = document.querySelector(".header .navigation-bar .navigation-list .nav-icon");
const mobileMenu = document.querySelector("header .navigation-bar .navigation-list ul");
const header = document.querySelector(".header.container");
menu_icon.addEventListener("click",() => {
    menu_icon.classList.toggle('active');// add active class in menu_icon
    mobileMenu.classList.toggle('active');// add active class in mobileMenu when toggle()
});
