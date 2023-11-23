import { module as BaseModule } from 'modujs';
import modularLoad from 'modularload';
import { html } from '../utils/environment';

export default class extends BaseModule {
	constructor(m) {
		super(m);
	}

	init() {
		this.analyticsId = this.getData('analytics');

		console.log(this.el);

		const load = new modularLoad({
			enterDelay: 1600,
			transitions: {
				customTransition: {}
			}
		});

		load.on('loading', (transition, oldContainer) => {

			/* 
			html.classList.remove('has-dom-animated');
			html.classList.remove('has-dom-ready');
			html.classList.remove('has-scrolled');
			html.setAttribute('data-theme', null); 
			*/

			/* 
			html.classList.remove('has-members-open');
			html.classList.remove('has-members-closing');
			html.classList.remove('has-footer-inview'); 
			*/

			if (html.getAttribute('data-template') == 'error') {
				this.call('disable', 'Error');
			}

			setTimeout(() => {
				if (html.classList.contains('has-menu-open')) {
					html.classList.remove('has-menu-open');
					html.classList.add('has-menu-closing');
				}
			}, 400)

		});

		load.on('loaded', (transition, oldContainer, newContainer) => {
			window.scrollTo(0, 0);

			this.call('destroy', oldContainer, 'app');
			this.call('update', newContainer, 'app');

			this.call('reset', 'Menu');

			html.classList.remove('has-menu-closing');
			html.setAttribute('data-template', newContainer.getAttribute('data-template'));

			// google tag manager
			if (window.gtag && this.analyticsId != null) {
				gtag('config', this.analyticsId, {
					'page_path': location.pathname,
					'page_title': document.title
				});
			}

			setTimeout(() => {
				html.classList.add('has-dom-ready');

				setTimeout(() => {
					html.classList.add('has-dom-animated');
				}, 2000);
			}, 1000);
		});
	}
}
