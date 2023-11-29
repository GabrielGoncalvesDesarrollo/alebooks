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
	{ name: 'transparent', color: 'transparent' },
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
		const { iconName, buttonColor, showAsLink, extendButton, catButton } = attributes;

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
					<PanelRow className="art-mt-xs">
					<BaseControl
						label="Icono"
						help="Seleccione el icono que se desa mostrar en el boton"
						className='art-mt-xs'
					>
						<ButtonGroup>
							<ul class="art-btn-group">
								{iconlist.map((option) => {
									return(
										<li>
											<Button
												key={option.value}
												variant={(option.value == iconName)? 'primary' : ''}
												className={classnames({
													'is-active': 'left' === option.value,
												})}
												onClick={() => setAttributes({iconName:option.value})}
												icon={icons[option.value]}
												label={option.label}
											/>
										</li>
									)
								})}
							</ul>
							
						</ButtonGroup>

						<Button
							isDestructive
							key="resetIcons"
							onClick={() => setAttributes({ iconName: '' })}
						>
							Restaurar
						</Button>
					</BaseControl>
					</PanelRow>

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

					{/* <PanelRow className='art-mb-xs'>
						<BaseControl
							label='Visualización'
							help="aquí encontrarás varias pociones de visualización"
						>
							<ToggleControl
								className="art-mt-xs"
								label={__("¿Mostrar como un enlace")}
								checked={showAsLink}
								onChange={(newValue) => {
									setAttributes({ showAsLink: newValue });
								}}
							/>
						</BaseControl>
					</PanelRow> */}

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
				iconName: {
					type: 'string',
					default: ''
				},
				buttonColor: {
					type: 'string',
					default: ''
				},
				showAsLink: {
					type: 'boolean',
					default: false,
				},
				extendButton: {
					type: 'boolean',
					default: false,
				},
				catButton: {
					type: 'boolean',
					default: false,
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

			if (attributes.className) {
				attributes.className = removeClasses(attributes.className, "ico-");
				attributes.className = removeClasses(attributes.className, "color-");
			}

			let classes = [];

			classes.push({ "aslink": attributes.showAsLink });
			classes.push({ "extendButton": attributes.extendButton });
			classes.push({ "catButton": attributes.catButton });

			if (attributes.iconName) {
				classes.push(`ico-${attributes.iconName}`);
			}

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

	classes.push({ "aslink": attributes.showAsLink });
	classes.push({ "extendButton": attributes.extendButton });
	classes.push({ "catButton": attributes.catButton });

	if(attributes.iconName){
		classes.push(`ico-${iconName}`);
	}

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