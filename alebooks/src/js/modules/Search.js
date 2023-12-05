import { module as BaseModule } from 'modujs';



export default class extends BaseModule {
	constructor(m){
		super(m);
	}

	init() {
        const modalOverlay = document.getElementById('modalOverlay');
        const searchIcon = document.querySelector('.search__icon');
        const closeModal = document.getElementById('closeModal');

        searchIcon.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        setTimeout(() => {
        modalOverlay.style.opacity = '1';
        }, 50);
        });

        closeModal.addEventListener('click', () => {
        modalOverlay.style.opacity = '0'; 
        setTimeout(() => {
        modalOverlay.style.display = 'none';
        }, 300);
        });
        }
}
