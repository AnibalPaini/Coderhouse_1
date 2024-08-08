hamburguesa= document.querySelector(".header__menu");
hamburguesa.onclick=function(){
    navBar= document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hamburguesa.classList.toggle("active");
}