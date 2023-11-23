import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import * as Editor from '@wordpress/editor';
import * as Blockeditor from '@wordpress/block-editor';
const { InnerBlocks, InspectorControls, BlockControls, MediaUpload, MediaUploadCheck, __experimentalLinkControl: LinkControl } = Blockeditor || Editor; // Fallback to 

import './styles/editor.scss';

const ALLOWED_BLOCKS = [
	'wp-artsolut-blocks/container',
	'wp-artsolut-blocks/grid',
	'wp-artsolut-blocks/column',
	'da/wp-swiper-slides',
	'da/wp-swiper-slide',
	'core/html',
];

const MY_TEMPLATE = [
	['wp-artsolut-blocks/grid', { className: 'slider' },
		[
			['wp-artsolut-blocks/column', { className: 'slider__content', sizeXl: 12, sizeMd: 12, sizeXs: 12 },
				[
					['da/wp-swiper-slides', { "tabsData": [{ "slug": "slide-1" }, { "slug": "slide-2" }] }]
				]
			]
		]
	]
];


class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes } = this.props;
		return(
			<Fragment>
			<InspectorControls>

			</InspectorControls>
			<InnerBlocks
				className="art-slider"
				template={MY_TEMPLATE}
				templateLock={false}
				allowedBlocks={ALLOWED_BLOCKS}
			/>
			</Fragment>
		)
	}
}
export default BlockEdit;