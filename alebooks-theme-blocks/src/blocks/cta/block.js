import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { InnerBlocks } from '@wordpress/block-editor';
import './styles/editor.scss';

registerBlockType('wp-artsolut-blocks/cta', {
	title: 'Cta',
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	}
})