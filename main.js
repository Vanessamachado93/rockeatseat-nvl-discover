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
