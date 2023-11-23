import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, PanelRow, ColorPalette, checkboxControl, Icon, Button, ButtonGroup, ToggleControl } from '@wordpress/components';
import { iconBackground } from '../../icons';
import { InspectorControls } from '@wordpress/block-editor';
import {removeClasses} from '../../tools';
import lodash from 'lodash';
let initalOpenPanel = false;


const allowedBlocks = [
	'core/image',
	'da/wp-swiper-slides'
];

class ImageOptionsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { negativeMargin, scaleImage, fixImage } = attributes;

		let allow = false;

		const name = this.props.name;

		if (!allow) {
			allow = allowedBlocks.includes(name);
		}

		if (!allow) {
			return null;
		}

		return(
			<InspectorControls>
			<PanelBody
					title= {
						<Fragment>
							<Icon icon={ iconBackground } className = "art-ext-icon" />
							<span>{ __('Opciones de imagen') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<PanelRow className='art-mb-xs'>
						<ToggleControl
							className="art-mt-xs"
							label={__("Margen negativo")}
							checked={negativeMargin}
							onChange={(newValue) => {
								setAttributes({ negativeMargin: newValue });
							}}
						/>
					</PanelRow>

					<PanelRow className='art-mb-xs'>
						<ToggleControl
							className="art-mt-xs"
							label={__("Agrandar imagen (efecto)")}
							checked={scaleImage}
							onChange={(newValue) => {
								setAttributes({ scaleImage: newValue });
							}}
						/>
					</PanelRow>
					<PanelRow className='art-mb-xs'>
						<ToggleControl
							className="art-mt-xs"
							label={__("Fix de imagen")}
							checked={fixImage}
							onChange={(newValue) => {
								setAttributes({ fixImage: newValue });
							}}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}

function addAttributes(settings) {
	const { attributes } = settings;
	if (allowedBlocks.includes(settings.name)) {
		return {
			...settings,
			attributes: {
				...attributes,
				negativeMargin: {
					type: 'boolean',
					default: false
				},
				scaleImage: {
					type: 'boolean',
					default: false
				},
				fixImage: {
					type: 'boolean',
					default: false
				},
			}
		}
	}
	return settings;
}

const withImageOptionsComponent = createHigherOrderComponent(
	(BlockEdit) =>
		function (props) {

			if (!allowedBlocks.includes(props.name)) {
				return (
					<BlockEdit { ...props } />
				);
			}

			const hasCustomClassName = hasBlockSupport(
				props.name,
				'customClassName',
				true
			);

			let classes = [];
			classes.push({ 'scale-image': props.attributes.scaleImage });
			classes.push({ 'fix-image': props.attributes.fixImage });
			


			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
					<ImageOptionsComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withImageOptionsComponent');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];
	classes.push({ 'scale-image': attributes.scaleImage });
	classes.push({ 'fix-image': attributes.fixImage });


	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/ImageOptionsComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/ImageOptionsComponent/advanced',
	withImageOptionsComponent
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/ImageOptionsComponent/applyExtraClass',
	applyExtraClass
); 