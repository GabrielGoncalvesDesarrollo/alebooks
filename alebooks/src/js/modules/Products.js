import { module as BaseModule } from 'modujs';

export default class extends BaseModule {
	constructor(m){
		super(m);
	}

	init(){
		let isDown = false;
		let startX = false;
		let scrollLeft;

		this.el.addEventListener('mousedown', (e) => {
			isDown = true;

			this.el.classList.add('active');
			startX = e.pageX - this.el.offsetLeft;
			scrollLeft = this.el.scrollLeft;
		});

		this.el.addEventListener('mouseleave', (e) => {
			isDown = false;
			this.el.classList.remove('active');
		});

		this.el.addEventListener('mouseup', () => {
			isDown = false;
			this.el.classList.remove('active');
		});

		this.el.addEventListener('mousemove', (e) => {
			if (!isDown) return;

			e.preventDefault();
			const x = e.pageX - this.el.offsetLeft;
			const walk = (x - startX) * 1; //scroll-fast
			this.el.scrollLeft = scrollLeft - walk;
		});
	}
}