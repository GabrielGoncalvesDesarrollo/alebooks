import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './styles/editor.scss';
import icons from './icons.js';

registerBlockType('wp-artsolut-blocks/icon', {
	title: 'Icono',
	ico: icons.ico,
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return null;
	}
})