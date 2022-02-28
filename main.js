//se a constant esta com um nome, logo eu nao posso tentar modificar.

/*const pessoa = {
	name: 'mayk',
	age: 37,
	falar: function () {
		console.log(pessoa.age)
	}
}

pessoa.falar()*/
// exemplo de código - ensinando como funciona o js

//document.body.style.background = 'red' isso faz o funco mudar dentro do js

/*  abre e fecha o menu quando clicar no ícone: hambúrguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
	element.addEventListener('click', function () {
		nav.classList.toggle('show')
	})
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
	link.addEventListener('click', function () {
		nav.classList.remove('show')
	})
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
	if (window.scrollY >= navHeight) {
		// scroll é maior que a altura do header
		header.classList.add('scroll')
	} else {
		// menor que a altura do header
		header.classList.remove('scroll')
	}
})

/* SWIPE PARA O CARROSSEL DA PAGINA*/
const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true
})

const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})
/* ScrollReveal:mostrar elementos quando der scroll na página */
scrollReveal.reveal(
	`#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
	{ interval: 100 }
)

/* botao voltar para o top*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll, function'())
{
	if (window.scroll >= 560) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}
