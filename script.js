const menubtn = document.getElementById('menu');
const navlinks = document.getElementById('navlinks');

menubtn.addEventListener('click', () => {
    navlinks.classList.toggle('show');
})