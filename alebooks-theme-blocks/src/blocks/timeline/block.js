import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './styles/editor.scss';
import icons from './icons.js';

registerBlockType('wp-artsolut-blocks/timeline', {
	title: 'Timeline',
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
	title: __('Titulo'),
	image: __('imagen'),
	description: __('texto')
};