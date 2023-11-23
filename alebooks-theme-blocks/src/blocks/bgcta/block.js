import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import './styles/editor.scss';

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';

const { InnerBlocks } = BlockEditor || Editor;


const TEMPLATE_LEFT =	[
	['wp-artsolut-blocks/grid', {className: 'bgcta'},
		[
			['wp-artsolut-blocks/column', {} ],
			['wp-arstolut-blcoks/column', {} ],
		]
	]
]

registerBlockType('wp-artsolut-blocks/bg-cta', {
	title: 'Background Cta',
	category: 'wp-artsolut-blocks', 
	keywords: [
	],
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	}
})