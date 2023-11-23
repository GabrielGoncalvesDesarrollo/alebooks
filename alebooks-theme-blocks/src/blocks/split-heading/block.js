import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import edit from './edit';
import './styles/editor.scss';

registerBlockType('wp-artsolut-blocks/split-heading', {
	title: 'Titulo partido',
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return null;
	}
})