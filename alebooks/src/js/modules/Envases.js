import { module as BaseModule } from 'modujs';
import swiper from 'swiper';

export default class extends BaseModule {
	constructor(m){
		super(m);
	}

	init(){
		const swipermain = this.el.querySelector('.swipermain');
		const thumbs = this.el.querySelector('.swiperthumb');
		const fichas = this.el.querySelectorAll('.product__ficha li');

		let thumsblides = parseInt(thumbs.getAttribute('data-slides'));
		
		let slidethumbs = new Swiper( thumbs, {
				spaceBetween: 30,
				/* centeredSlides: true, */
				slidesPerView: thumsblides,
				freeMode: false,
			}
		);

		let slidemain = new Swiper(swipermain, {
			spaceBetween: 0,
			centeredSlides: true,
			slidesPerView: 1,
			freeMode: false,
			thumbs: {
				swiper: thumbs,
			},
		});

		// Agregar el evento slideChange al objeto Swiper
		slidemain.on('slideChange', function () {
			// Obtener el índice del slide actual
			const activeSlideIndex = slidemain.activeIndex;

			// Acceder al slide actual mediante el método slides y el índice obtenido
			const activeSlide = slidemain.slides[activeSlideIndex];

			// Hacer lo que necesites con el slide actual
			let data = parseInt(activeSlide.getAttribute('data-item'));

			fichas.forEach(element => {
				element.classList.remove('hide');

				let item = parseInt(element.getAttribute('data-item'));
				if( item != data ){
					console.log(item, data);
					element.classList.add('hide');
				}	else {
					element.classList.remove('hide');
				}
			});
		});
	}

	
}