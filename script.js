const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navlist');

burger.addEventListener('click', (e)=> {
    navbar.classList.toggle('display')
});


