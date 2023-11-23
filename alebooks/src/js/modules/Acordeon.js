import { module as BaseModule } from "modujs";

export default class extends BaseModule {
  constructor(m) {
    super(m);
  }

  init() {
    // Obtén todos los elementos del acordeón
    const accordionItems = document.querySelectorAll('.faq__item');

    // Agrega un event listener a cada elemento del acordeón
    accordionItems.forEach((item) => {
        const title = item.querySelector('.faq__item__title');
        const content = item.querySelector('.faq__item__content');

        // Agrega un evento de clic al elemento 'faq__item'
        item.addEventListener('click', () => {
            // Alternar la visibilidad del contenido
            content.classList.toggle('active');
            // Cambiar el icono de flecha
            title.querySelector('.faq__arrow').classList.toggle('active');
            // Agrega o quita la clase 'active' al elemento 'faq__item'
            item.classList.toggle('active');
        });
    });
  }
}
