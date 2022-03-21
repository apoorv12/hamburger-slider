const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navlist');

// burger.addEventListener('click', (e)=> {
//     navbar.classList.toggle('display')
// });

burger.addEventListener('click', () => {
    navbar.classList.toggle('open');
    burger.classList.toggle('open');
});


