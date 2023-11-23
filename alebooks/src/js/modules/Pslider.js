import { module as BaseModule } from 'modujs';
import Swiper from 'swiper';


export default class extends BaseModule {
	constructor(m) {
		super(m);
	}

	init(){
		const swipermain = this.el.querySelector('.mainswiper');
		const next = this.el.querySelector('.slide-button-next');
		const prev = this.el.querySelector('.slide-button-prev');
		
		let slidemain = new Swiper(swipermain, {
			slidesPerView: 4,
			spaceBetween: 0,
			freeMode: true,
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				1200:{
					slidesPerView: 4,
				}
			}
		});

		next.addEventListener('click', function(){
			slidemain.slideNext();
		});

		prev.addEventListener('click', function(){
			slidemain.slidePrev();
		});
	}
}