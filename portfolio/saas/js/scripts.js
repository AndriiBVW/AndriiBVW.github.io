var menu_elem = document.getElementById('mainNav');
var title_elem = document.querySelector('.toggle');
var navToggle1 = document.getElementById('nav-toggle1');
var navToggle2 = document.getElementById('nav-toggle2');
var navToggle3 = document.getElementById('nav-toggle3');
var navToggle4 = document.getElementById('nav-toggle4');
var navToggle5 = document.getElementById('nav-toggle5');

title_elem.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};

navToggle1.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};

navToggle2.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};

navToggle3.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};

navToggle4.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};

navToggle5.onclick = function() {
	menu_elem.classList.toggle('nav_closed');
	title_elem.classList.toggle('toggle_active');
};