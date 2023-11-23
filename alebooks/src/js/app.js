import modular from 'modujs';
import * as modules from './modules';

import {html} from './utils/environment';

function find(value) {
	return document.querySelectorAll(value);
}

function $(value) {
	return document.querySelector(value);
}

const app = new modular({
	modules: modules
});

window.onload = (event) => {
	const $style = document.getElementById('app-css-css');

	if ($style) {
		if ($style.isLoaded) {
			init();
		} else {
			$style.addEventListener('load', (event) => {
				init();
			});
		}
	} else {
		console.warn('The "main-css" stylesheet not found');
	}
};

function setupMenu() {
    const menu = $(".hmenu");
    const body = $("body");
    const header = $(".header");
    const navigation = $(".navigation");
    const navmenu = $(".nav-menu");
    const btnclose = $(".btn-close");
    const bg = $(".navigation .bg");
    /* const items = find(".navigation a"); */
    const links = document.querySelectorAll('.am-click-menu a');
    const lastLink = links[links.length - 1];

    
    /* const dropdowns = find('.dropdown-toggle'); */

    console.log(menu);
    
    if (!menu) return;

    document.addEventListener("keydown", (event) => {
      if (event.code == "Escape") {
        if (navigation.classList.contains("open")) {
          btnclose.click();
        }
      }
      if (event.code == "Tab" && !event.shiftKey) {
        console.log(lastLink, document.activeElement);
        if (lastLink == document.activeElement) {
          menu.click();
        }
      }
    });

    const menuOpts = {
      menuId: 'nav-menu',
      click: true
    }

    const nav = new Navigation(menuOpts);
		nav.init();

    menu.addEventListener('click', (event) =>{
      event.stopPropagation();
      const expanded = menu.getAttribute('aria-expanded');

      if (expanded === 'false') {
        menu.setAttribute("aria-expanded", "true");
      }

      if (expanded === 'true') {
        menu.setAttribute("aria-expanded", "false");
      }
      header.classList.toggle('open');
      navigation.classList.toggle("open");
      navmenu.classList.toggle("open");
      body.classList.toggle("no-scroll");
    });
  }

function setupForm(){
	const form = $('.mailpoet_form');
	const success = $('.mailpoet_validate_success');
	const error = $('.mailpoet_validate_error');

	if(!form) return;

	success.setAttribute('role', 'success');
	error.setAttribute('role', 'error');

}

function setupBackTop(){
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Agrega un evento de clic al botón
  backToTopBtn.addEventListener("click", function () {
    // Desplázate suavemente hacia la parte superior de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Animación de desplazamiento suave
    });
  });

  // Muestra u oculta el botón según la posición del usuario en la página
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
      backToTopBtn.classList.add('show') // Mostrar el botón
    } else {
      backToTopBtn.classList.remove('show'); // Ocultar el botón
    }
  });
}

function init(){
	app.init(app);

	setupForm();
	setupMenu();
  setupBackTop();

	html.classList.add('is-loaded');
	html.classList.add('is-ready');

	/* setupMenu(); */

	// Credits
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		var args = ['%c Developed by Artsolut studio \u00A9 https://artsolut.es', 'background: #000000; padding:10px; color: #ffffff;'];
		window.console.log.apply(console, args);
	} else if (window.console) {
		window.console.log('Developed by Artsolut estudio - https://artsolut.es');
	}
}