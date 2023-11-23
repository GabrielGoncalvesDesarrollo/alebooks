import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, PanelRow, ToggleControl , ColorPalette, checkboxControl, Icon, Button, ButtonGroup } from '@wordpress/components';
import { iconBackground } from '../../icons';
import { InspectorControls } from '@wordpress/block-editor';
import {removeClasses} from '../../tools';
import icons from "./icons.js";
import lodash from 'lodash';
let initalOpenPanel = false;


const allowedBlocks = [
	'core/list'
];

class ListOptionsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;

		const { numType } = attributes;

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
							<span>{ __('Opciones de lista') } </span>
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
							label={__("Mostrar números")}
							checked={numType}
							onChange={(newValue) => {
								setAttributes({ numType: newValue });
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
				numType: {
					type: "boolean",
					default: false
				},
			}
		}
	}
	return settings;
}

const withListOptionsComponent = createHigherOrderComponent(
	(BlockEdit) =>
		function (props) {
			const {attributes} = props;

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
			classes.push({ "numType": attributes.numType });


			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<ListOptionsComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withListOptionsComponent');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];
	classes.push({ "numType": attributes.numType });


	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/ListOptionsComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/ListOptionsComponent/advanced',
	withListOptionsComponent
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/ListOptionsComponent/applyExtraClass',
	applyExtraClass
); 