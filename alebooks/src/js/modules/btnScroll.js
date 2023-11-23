import { module as BaseModule } from 'modujs';

export default class extends BaseModule {
	constructor(m) {
		super(m);
	}

	init() {
    const scrollButton = this.el;
    const banner = document.querySelector('.banner');
    const bannerHeight = banner.clientHeight;

    const additionalScroll = 225;

    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: window.scrollY + bannerHeight + additionalScroll,
        behavior: 'smooth'
      });
    });
  }
}