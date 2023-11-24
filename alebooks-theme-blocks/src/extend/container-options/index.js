import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, PanelRow, ColorPalette, ToggleControl, Icon, Button, ButtonGroup } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { removeClasses } from '../../tools';
import lodash from 'lodash';
import icons from './icons.js';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/container',
	'wp-artsolut-blocks/grid',
];

const colors = [
	{ name: "white", color: "#FFFFFF" },
	{ name: "light-grey", color: "#F8F7F7" },
	{ name: "black", color: "#1C1B1B" },
	{ name: "red", color: "#F0392D" },
	{ name: "black-b", color: "#000000" },
];


function getColorName(colorValue) {
	const color = colors.find((c) => c.color === colorValue);
	if (color) {
		return color.name;
	} else {
		return null;
	}
}

class ContainerOptionsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { cbgColor, cbgColorName, paddingRightLeft } = attributes;

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
							<span>{ __('Opciones del contenedor') } </span>
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
							label={__("espaciado a los lados")}
							checked={paddingRightLeft}
							onChange={(newValue) => {
								setAttributes({ paddingRightLeft: newValue });
							}}
						/>
					</PanelRow>

					
			</PanelBody>
			<PanelBody
				title={
					<Fragment>
						<Icon icon={icons.options} className="art-ext-icon" />
						<span>{__("Color de fondo")} </span>
					</Fragment>
				}
				className="art-mb-xs"
				initialOpen={initalOpenPanel}
				onToggle={() => {
					initalOpenPanel = !initalOpenPanel;
				}}
			>
					<ColorPalette
						colors={colors}
						className="art-mt-xs"
						value={cbgColor}
						onChange={(newColor) => {
							setAttributes({ cbgColor: newColor, cbgColorName: getColorName(newColor) });
						}}
						disableCustomColors
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
				topDecoration: {
					type: 'boolean',
					default: false
				},
				cbgColor: {
					type: 'string',
					default: 'false'
				},
				cbgColorName: {
					type: 'string',
					default: 'false'
				},
				paddingRightLeft: {
					type: 'boolean',
					default: false
				},
			}
		}
	}
	return settings;
}

const withContainerOptionscontrol = createHigherOrderComponent(
	(BlockEdit) =>
		function (props) {
			const { attributes } = props;

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

			if (attributes.className)
				attributes.className = removeClasses(attributes.className, "bg-color-");

			let classes = [];
			/* classes.push({ 'topDecoration': props.attributes.topDecoration }); */
			
			
			/* let colorName = getColorName(attributes.cbgColor);
			if (colorName) {
				classes.push(`bg-color-${colorName}`);
			} */

			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<ContainerOptionsComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withContainerOptionscontrol');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];
	/* if (attributes.borderRounded)
		classes.push('borderRounded');

	if (attributes.alignRight)
		classes.push('alignRight');
	
	classes.push({ 'topDecoration': attributes.topDecoration });

	let colorName = getColorName(attributes.bgColor);
	if (colorName) {
		classes.push(`bg-color-${colorName}`);
	}	 */

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/container-option/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/container-option/advanced',
	withContainerOptionscontrol
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/container-option/applyExtraClass',
	applyExtraClass
); 