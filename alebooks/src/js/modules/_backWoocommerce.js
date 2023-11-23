import { module as BaseModule } from 'modujs';

export default class extends BaseModule {
	constructor(m) {
		super(m);
	}

	init() {

		const load_text = this.el.getAttribute('data-load-text');
		const loading_text = this.el.getAttribute('data-loading-text');
		const ajaxContent = document.querySelector('.ajax-content');
		const action = this.el.getAttribute('data-action');
		const button = this.el;

		button.addEventListener('click', (event) => {
			event.preventDefault();
			loadMore();
		});



		const loadMore = () => {
			const data = new FormData();
			data.append("action", action);
			data.append("page", art.current_page);
			data.append("query", art.posts);

			console.log(art.current_page);

			button.textContent = loading_text;

			fetch(art.ajaxurl, {
				method: "POST",
				body: data,
			})
				.then((response) => response.text())
				.then((response) => {

					ajaxContent.insertAdjacentHTML("beforeend", response);
					art.current_page++;
					if (parseInt(art.current_page) >= parseInt(art.max_page)) {
						button.remove();
					} else {
						console.log(art.current_page, parseInt(art.max_page));
						button.textContent = load_text;
					}
				})
				.catch((error) => {
					this.loading = false;
					button.textContent = load_text;
				});
		}
	}
}