//scroll suave em links internos href#
const menuItems = document.querySelectorAll('nav a[href^="#"]');
console.log(menuItems);
menuItems.forEach(item => {
	item.addEventListener('click', ScrollIdClick);
});
function ScrollIdClick(event) {
	event.preventDefault();
	const elementoClicado = event.target;
	const idElementoClicado = elementoClicado.getAttribute('href');
	const section = document.querySelector(idElementoClicado).offsetTop;
	console.log(section.offsetTop);
	window.scroll({
		top: section - 50,
		behavior: "smooth",
	});
}