import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import './style/editor.scss';

registerBlockType('wp-artsolut-blocks/imgcarrousel', {
	title: 'Carrousel de Imagenes',
	description: 'Muestra múltiples imágenes en una galería enriquecida.',
	category: 'wp-artsolut-blocks',
	keywords: [
		__('Layout'),
		__('Carrousel')
	],
	edit,
	save: () => {
		return null;
	}
})
