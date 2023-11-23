import { module as BaseModule } from 'modujs';

export default class extends BaseModule {
	constructor(m){
		super(m);
	}

	init() {
		this.checkCf7();
	}

	checkCf7() {
		var forms = document.querySelectorAll('.wpcf7-form');

		

		if (!forms.length) return;

		let elements = document.querySelectorAll('.wpcf7-form-control');
		elements.forEach(element => {
			if (element.classList.contains('wpcf7-validates-as-required')) {
				element.required = true;
			}
		});

		document.addEventListener('wpcf7submit', function (event) {
			const msg = document.querySelector('.wpcf7-response-output');
			msg.setAttribute('role', 'alert');
			if (event.detail.status == 'validation_failed') { // if validation fails
				let invFields = event.detail.apiResponse.invalid_fields;
				let error_id = '#' + invFields[0].idref;
				document.querySelector(error_id).focus();
			}
		}, false);

		forms.forEach(element => {
			element.addEventListener('wpcf7mailsent', function (event) {
				const rows = this.querySelectorAll('.forms__row');
				for (let i = 1; i < rows.length; i++) {
					rows[i].classList.add('hide');
				}
			});
		});
	}
}