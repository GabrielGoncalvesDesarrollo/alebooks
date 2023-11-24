import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, Icon, Button, ButtonGroup, PanelRow, ToggleControl} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import lodash from 'lodash';
import icons from './icons.js';
import { List } from 'react-virtualized';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/button'
];

const colors = [
	{ name: 'white', color: '#FFFFFF' },
	{ name: 'black', color: '#000000' },
	{ name: "red", color: "#F0392D" },
];

const iconlist = [
	{ label: 'Flecha', value: 'arrow'},
];


function getColorName(colorValue) {
	const color = colors.find((c) => c.color === colorValue);
	if (color) {
		return color.name;
	} else {
		return null;
	}
}

function removeClasses(classNamesString, classToken) {
	return classnames(classNamesString.split(' ')).split(' ').filter((className) => !className.startsWith(classToken)).join(' ');
}

class ButtonOptionsComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes, classNames } = this.props;
		const { buttonColor } = attributes;

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
							<span>{ __('Configuración botón') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
				
					<PanelRow className='art-mt-xs'>
						<BaseControl
							label="Colores"
							help="Seleccione el color del botón"
						>
							<ColorPalette
								colors={colors}
								className="art-mt-xs"
								value={buttonColor}
								onChange={(newColor) => {
									setAttributes({ buttonColor: newColor });
								}}
								disableCustomColors
							/>
						</BaseControl>		
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
				buttonColor: {
					type: 'string',
					default: ''
				},
			}
		}
	}
	return settings;
}

const withButtonOptionsControl = createHigherOrderComponent(
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
				attributes.className = removeClasses(attributes.className, "color-");


			let classes = [];

			let colorName = getColorName(attributes.buttonColor);

			if (colorName) {
				classes.push(`color-${colorName}`);
			}

			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<ButtonOptionsComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withButtonOptionsControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];



	let colorName = getColorName(attributes.buttonColor);
	if (colorName) {
		classes.push(`color-${colorName}`);
	}

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/button-options/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/button-options/advanced',
	withButtonOptionsControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/button-options/applyExtraClass',
	applyExtraClass
); 