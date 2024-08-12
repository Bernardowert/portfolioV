const btnTheme = document.querySelectorAll('.js-btn-theme');


function HandleTheme(){
   document.documentElement.classList.toggle('theme-white');
}

console.log(btnTheme);


btnTheme.forEach(item =>{
    item.addEventListener('click', HandleTheme);
})


const btnOpenMobile = document.querySelector('.js-menu-mobile');
const btnCloseMobile = document.querySelector('.js-close-mobile');


function HandleMobile(){
    document.documentElement.classList.toggle('menu-mobile-opened');
}

btnOpenMobile.addEventListener('click', HandleMobile);
btnCloseMobile.addEventListener('click',HandleMobile);