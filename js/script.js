const navMobile = document.querySelector('.nav-mobile');
const closeMenu = document.querySelector('#close');
const openMenu = document.querySelector('#open');


closeMenu.addEventListener('click', close);
openMenu.addEventListener('click', show);



function show() {
    navMobile.style.display = "flex";
    navMobile.style.top = '0';
    openMenu.style.display = "none";
    closeMenu.style.display = "inline-block";


}

function close() {
    navMobile.style.display = 'none';
    openMenu.style.display = "inline-block";
    closeMenu.style.display = "none";

}