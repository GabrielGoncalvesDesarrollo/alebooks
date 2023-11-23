import { module as BaseModule } from 'modujs';

export default class extends BaseModule {
    constructor(m) {
        super(m);
    }

    init() {
        const menu = this.el;
        const navigation = document.querySelector('.nav-mobile');
        const body = document.querySelector('body');
        const header = document.querySelector('.header');
        const logo = document.querySelector('.logo-link');

        if (!menu) return;

        menu.addEventListener('click', () => {
            header.classList.toggle('open');
            menu.classList.toggle('is-active');
            navigation.classList.toggle('open');
            body.classList.toggle('no-scroll');

            // Cambiar el logo al abrir/cerrar el menú
            if (logo) {
                logo.classList.toggle('white-logo');
            }
        });
    }
}
