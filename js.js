<
script >
    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function (letra, i) {

            setTimeout(function () {
                elemento.innerHTML += letra;
            }, 75 * i)

        });
    }
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo); <
/script>




<
script >
    const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); <
/script>


<
script >
    ScrollReveal().reveal('header')
ScrollReveal().reveal('.nav')
ScrollReveal().reveal('.banner')
ScrollReveal().reveal('.banner-top')
ScrollReveal().reveal('.card-white')
ScrollReveal().reveal('.main-bottom')
ScrollReveal().reveal('.card')
ScrollReveal().reveal('.information')
ScrollReveal().reveal('footer')
ScrollReveal().reveal('.down')
ScrollReveal().reveal('.attribution') <
    /script>