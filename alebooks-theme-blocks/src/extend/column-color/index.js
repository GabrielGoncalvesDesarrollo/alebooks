import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, checkboxControl, Icon, Button, ButtonGroup } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import icons from './icons.js';
import lodash from 'lodash';
let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/column',
];


let colors = [
	{ name: "white", color: "#FFFFFF" },
	{ name: "light-grey", color: "#F8F7F7" },
	{ name: "black", color: "#1C1B1B" },
	{ name: "red", color: "#F0392D" },
	{ name: "black-b", color: "#000000" },
];

function removeClasses(classNamesString, classToken) {
	return classnames(classNamesString.split(' ')).split(' ').filter((className) => !className.startsWith(classToken)).join(' ');
}

function getColorName(colorValue) {
	const color = colors.find((c) => c.color === colorValue);
	if (color) {
		return color.name;
	} else {
		return null;
	}
}

class ColumnColorComponent extends Component {

	constructor(props) {
		super(props);
	}

	

	render() {
		const { attributes, setAttributes } = this.props;
		const { columnBgColor, columnBgColorName } = attributes;

		let allow = false;

		const name = this.props.name;

		/* function setColorName(value) {
			let result = '';

			switch (value){
				case '#F5F5F6':
					result = 'gray';
					break;
				case '#F5F5F6':
					result = 'gray';
					break;
				case '#F5F5F6':
					result = 'gray';
					break;
				default:
					result = '';
					break;
			}
			setAttributes({ columnBgColorName: result });
		} */

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
							<Icon icon={ icons.pantone } className = "art-ext-icon" />
							<span>{ __('Colores') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<BaseControl
						label={__('Color de fondo')}
						help={__('Seleccione el color de fondo de la columna')}
						className="art-ext-basecontrol"
					>
						<ColorPalette
							value={columnBgColor}
							colors={colors}
							onChange={(value) => {
								setAttributes({ columnBgColor: value, columnBgColorName: getColorName(value) });
							}}
							disableCustomColors={true}
						/>
					</BaseControl>

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
				columnBgColor: {
					type: 'string',
					default: ''
				},
				columnBgColorName: {
					type: 'string',
					default: ''
				},
			}
		}
	}
	return settings;
}

const withColumnColorControl = createHigherOrderComponent(
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
				attributes.className = removeClasses(attributes.className, 'bg-');

			let classes = [];
			let colorName = attributes.columnBgColorName;

			if ( colorName ) {
				classes.push(`bg-${colorName}`);
			}
		
			attributes.className = classnames(attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
						<BlockEdit { ...props } />
						<ColumnColorComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withColumnColorControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}
	const { columnBgColor, columnBgColorName } = attributes;

	let classes = [];
	
	let colorName = columnBgColorName;
	if (colorName) {
		classes.push(`bg-${colorName}`);
	}

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/column-color-component/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/column-color-component/advanced',
	withColumnColorControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/column-color-component/applyExtraClass',
	applyExtraClass
); 