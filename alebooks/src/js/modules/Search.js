import { module as BaseModule } from 'modujs';
import Navigation, { displayMenu } from "a11y-menu";



export default class extends BaseModule {
	constructor(m){
		super(m);
	}

	init(){		
        const modalOverlay = document.getElementById('modalOverlay');
        const searchIcon = document.querySelector('.search__icon');
        const closeModal = document.getElementById('closeModal');

        searchIcon.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        });
	}
}