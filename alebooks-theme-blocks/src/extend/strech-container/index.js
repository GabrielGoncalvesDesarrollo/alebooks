import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, checkboxControl, Icon, Button, ButtonGroup, ToggleControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import icons from './icons';
import lodash from 'lodash';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/container',
	'wp-artsolut-blocks/grid',
];

class SizeGridComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { centerStrech } = attributes;

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
							<Icon icon={ icons.size } className = "art-ext-icon" />
							<span>{ __('Ajustar') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<ToggleControl
						label={__('Reducir al centro')}
						help={__('Reduce el ancho del grid al centro')}
						checked={centerStrech}
						onChange={(newValue) => {
							setAttributes({ centerStrech: newValue })
						}}
						className='art-mt-xs'
					/>

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
				attr: {
					type: 'boolean',
					default: false
				},
				centerStrech: {
					type: 'boolean',
					default: false
				}

			}
		}
	}
	return settings;
}

const withSizeGridComponentControl = createHigherOrderComponent(
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
			classes.push({ 'strech-center': props.attributes.centerStrech });
			

			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<SizeGridComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withSizeGridComponentControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];
	classes.push({ 'center-strech': attributes.centerStrech });

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/sizegrid/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/sizegrid/advanced',
	withSizeGridComponentControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/sizegrid/applyExtraClass',
	applyExtraClass
); 