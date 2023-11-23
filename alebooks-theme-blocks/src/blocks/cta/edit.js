import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';

import * as Editor from '@wordpress/editor';
import * as Blockeditor from '@wordpress/block-editor';
const { InnerBlocks, InspectorControls, BlockControls, MediaUpload, MediaUploadCheck, __experimentalLinkControl: LinkControl } = Blockeditor || Editor; // Fallback to 
import './styles/editor.scss';
import { PanelBody, PanelRow, Icon, ColorPalette, ToggleControl } from '@wordpress/components';
import {removeClasses} from '../../tools';

import icons from '../../icons/icons';

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'wp-artsolut/container',
	'wp-artsolut-blocks/button',
	'wp-artsolut-blocks/grid',
	'wp-artsolut-blocks/column'
];	

const MY_TEMPLATE = [
	['wp-artsolut-blocks/container', { className: "", align: "full" } ,
			[
				['wp-artsolut-blocks/grid', { className: 'cta' },
					[
						[
							'wp-artsolut-blocks/column', { className: 'cta__image', sizeXl: 6, sixeMd: 6, sizeXs: 12 },
							[
								['core/image', { align: "full", sizeSlug: "full" }],
							]
						],
						[
							'wp-artsolut-blocks/column', { sizeXl: 1, sixeMd: 1, sizeXs: 12 },
						],
						[
							'wp-artsolut-blocks/column', { className: 'cta__content', sizeXl: 4, sixeMd: 4, sizeXs: 12 },
							[
								['core/heading', { level: 2 }],
								['core/paragraph', {}],
							]
						],
						[
							'wp-artsolut-blocks/column', { sizeXl: 1, sixeMd: 1, sizeXs: 12 },
						],
					]
				]
			]
	  ]
];

let colors = [
	{ name: 'white', color: '#FFFFFF' },
	{ name: 'olive', color: '#647854' },
	{ name: 'ore', color: '#988E49' },
	{ name: 'beige', color: '#F1F1E2' },
	{ name: 'red', color: '#D20A11' },
]

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes } = this.props;
		const { bgColor, bgColorName } = attributes;

		function setColorName(value) {

			let result = '';

			switch (value) {
				case '#647854':
					result = 'color-olive';
					break;
				case '#988E49':
					result = 'color-ore';
					break;
				case '#F1F1E2':
					result = 'color-beige';
					break;
				case '#D20A11':
					result = 'color-red';
					break;
				case '#FFFFFF':
					result = 'color-white';
					break;
			}
			setAttributes({ bgColorName: result });
		}

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody
						className="art-media-upload"
						title={
							<Fragment>
								<Icon icon={icons.options} className="art-ext-icon" />
								<span> {__("Opciones cta", "wp-arstolut-blocks")}</span>
							</Fragment>
						}
					>
						<PanelRow>
							<div className="art-row-label">Color de fondo</div>
							<ColorPalette
								value={bgColor}
								colors={colors}
								onChange={(value) => {
									setColorName(value);
									setAttributes({ bgColor: value });
								}}
								disableCustomColors={true}
							/>
						</PanelRow>
						
					</PanelBody>

				</InspectorControls>
				<InnerBlocks
					className="art-cta"
					template={MY_TEMPLATE}
					templateLock={false}
					allowedBlocks={ALLOWED_BLOCKS}
				/>
			</Fragment>
		)
	}
}
export default BlockEdit;