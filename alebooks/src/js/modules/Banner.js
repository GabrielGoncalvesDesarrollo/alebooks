import { module as BaseModule } from 'modujs';
import SimpleParallax from 'simple-parallax-js';

export default class extends BaseModule {
	constructor(m) {
		super(m);
	}

	init(){
		const banner = this.el;
		if (!banner ) return;

		new SimpleParallax(banner, {
			delay: .6,
			scale: 1.25,
			transition: 'cubic-bezier(0,0,0,1)'
		});
	}
}