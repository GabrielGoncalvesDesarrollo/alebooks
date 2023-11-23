import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
import edit from './edit';
import './styles/editor.scss';


registerBlockType('wp-artsolut-blocks/home-slider', {
	title: 'Home Slider',
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	}
})