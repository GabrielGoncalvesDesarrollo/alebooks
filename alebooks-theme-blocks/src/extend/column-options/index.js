import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, PanelRow, ColorPalette, checkboxControl, Icon, Button, ButtonGroup, ToggleControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';
import {removeClasses} from '../../tools';
import lodash from 'lodash';
import icons from './icons.js';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/column'
];

class ColumnOptionsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { borderCornerBottomRight, borderCornerBottomLeft, borderCornerTopLeft, borderCornerTopRight, overFlowed } = attributes;

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
							<Icon icon={ icons.options } className = "art-ext-icon" />
							<span>{ __('Opciones de columna') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<PanelRow>
					<ToggleControl
						className="art-mt-xs"
						label={__("Imagen contenida")}
						checked={overFlowed}
						onChange={(newValue) => {
						setAttributes({ overFlowed: newValue });
						}}
					/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							className="art-mt-xs"
							label={__("Redondeado a la columna (superior derecho)")}
							checked={borderCornerTopRight}
							onChange={(newValue) => {
								setAttributes({ borderCornerTopRight: newValue });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							className="art-mt-xs"
							label={__("Redondeado a la columna (superior izquierdo)")}
							checked={borderCornerTopLeft}
							onChange={(newValue) => {
								setAttributes({ borderCornerTopLeft: newValue });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							className="art-mt-xs"
							label={__("Redondeado a la columna (inferior izquierdo)")}
							checked={borderCornerBottomLeft}
							onChange={(newValue) => {
								setAttributes({ borderCornerBottomLeft: newValue });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							className="art-mt-xs"
							label={__("Redondeado a la columna (inferior derecho)")}
							checked={borderCornerBottomRight}
							onChange={(newValue) => {
								setAttributes({ borderCornerBottomRight: newValue });
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
				maskLeft: {
					type: 'boolean',
					default: false
				},
				borderCornerTopRight: {
					type: 'boolean',
					default: false
				},
				borderCornerTopLeft: {
					type: 'boolean',
					default: false
				},
				borderCornerBottomLeft: {
					type: 'boolean',
					default: false
				},
				borderCornerBottomRight: {
					type: 'boolean',
					default: false
				},
				overFlowed: {
					type: 'boolean',
					default: false
				},
			}
		}
	}
	return settings;
}

const withColumnOptionsComponent = createHigherOrderComponent(
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


			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<ColumnOptionsComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withInspectorControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/ColumnOptionsComponet/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/ColumnOptionsComponet/advanced',
	withColumnOptionsComponent
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/ColumnOptionsComponet/applyExtraClass',
	applyExtraClass
); 
