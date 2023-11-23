import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './styles/editor.scss';
import icons from './icons.js';

registerBlockType('wp-artsolut-blocks/faq', {
	title: 'FAQ',
	icon: icons.timelinenew,
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return null;
	}
});

export const defaultItem = {
	icon: '',
	title: __('Texto visible'),
	description: __('Texto oculto')
};