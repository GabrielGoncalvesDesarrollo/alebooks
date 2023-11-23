import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';

import * as BlockEditor from "@wordpress/block-editor";
import * as Editor from "@wordpress/editor";

const { InnerBlocks } = BlockEditor || Editor;


import './styles/editor.scss';

registerBlockType('wp-artsolut-blocks/banner', {
	title: 'Banner',
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return <InnerBlocks.Content />;

	}
})