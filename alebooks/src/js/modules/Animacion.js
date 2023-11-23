import { module as BaseModule } from 'modujs';

var imageLeft = '';
var imageRight = '';
var imageCenter = '';
var imagenes;
var index = 0;

function Animacion(m) {
	BaseModule.call(this, m);
}

Animacion.prototype = Object.create(BaseModule.prototype);
Animacion.prototype.constructor = Animacion;

Animacion.prototype.init = function () {
	imageLeft = document.querySelector('.home-animation__left img');
	imageRight = document.querySelector('.home-animation__right img');
	imageCenter = document.querySelector('.home-animation__center img');

	console.log(imageLeft)

	imagenes = [imageRight, imageCenter, imageLeft ];

	// Llamar a la función showNextImage después de esperar 3 segundos
	setTimeout(this.showNextImage.bind(this), 3000);
};

Animacion.prototype.showNextImage = function () {
	if (index < imagenes.length) {
		imagenes[index].classList.add('show');
		index++;
		setTimeout(this.showNextImage.bind(this), 1000); // Mostrar siguiente imagen después de 1 segundo
	}
}

export default Animacion;
