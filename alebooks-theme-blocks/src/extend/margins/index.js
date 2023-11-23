import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, checkboxControl, Icon, Button, ButtonGroup, TabPanel, Tooltip } from '@wordpress/components';
import { iconBackground } from '../../icons';
import { InspectorControls } from '@wordpress/block-editor';
import {removeClasses} from '../../tools';
import lodash from 'lodash';
import icons from './icons';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/container',
	'wp-artsolut-blocks/grid',
	'wp-artsolut-blocks/column',
	'core/paragraph',
	'core/heading',
	'core/image'
];

let spacingOptions = [
	{ label: __('xs', 'wp-artsolut-blocks'), value: 'xs' },
	{ label: __('sm', 'wp-artsolut-blocks'), value: 'sm' },
	{ label: __('md', 'wp-artsolut-blocks'), value: 'md' },
	{ label: __('lg', 'wp-artsolut-blocks'), value: 'lg' },
	{ label: __('xl', 'wp-artsolut-blocks'), value: 'xl' },
];

class MarginComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { 
			marginTopXs,
			marginTopMd,
			marginTopXl,
			marginLeftXs,
			marginLeftMd,
			marginLeftXl,
			marginRightXs,
			marginRightMd,
			marginRightXl,
			marginBottomXs,
			marginBottomMd,
			marginBottomXl,
		} = attributes;

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
							<span>{ __('Margenes del contenido') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<TabPanel
						className="art-ext-tabpanel"
						tabs={
							[
								{
									name: 'xl',
									title: (
										<Tooltip>
											<span>{icons.iconDesktop}</span>
										</Tooltip>
									),
									className: 'art-ext-tabpanel-tab',
								},
								{
									name: 'md',
									title: (
										<Tooltip>
											<span>{icons.iconTablet}</span>
										</Tooltip>
									),
									className: 'art-ext-tabpanel-tab',
								},
								{
									name: 'xs',
									title: (
										<Tooltip>
											<span>{icons.iconMobile}</span>
										</Tooltip>
									),
									className: 'art-ext-tabpanel-tab',
								}
							]
						}
					>
						{(tabData) => {
							return (
								<Fragment>
									<BaseControl
										label={__('margin superior', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginTopXl == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginTopXl === option.value) {
																setAttributes({ marginTopXl: '' });
															} else {
																setAttributes({ marginTopXl: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'md') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginTopMd == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginTopMd === option.value) {
																setAttributes({ marginTopMd: '' });
															} else {
																setAttributes({ marginTopMd: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginTopXs == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginTopXs === option.value) {
																setAttributes({ marginTopXs: '' });
															} else {
																setAttributes({ marginTopXs: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}


									</BaseControl>

									<BaseControl
										label={__('Margen Izquierda', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginLeftXl == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginLeftXl === option.value) {
																setAttributes({ marginLeftXl: '' });
															} else {
																setAttributes({ marginLeftXl: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'md') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginLeftMd == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginLeftMd === option.value) {
																setAttributes({ marginLeftMd: '' });
															} else {
																setAttributes({ marginLeftMd: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginLeftXs == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginLeftXs === option.value) {
																setAttributes({ marginLeftXs: '' });
															} else {
																setAttributes({ marginLeftXs: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

									</BaseControl>
									<BaseControl
										label={__('Margen Derecha', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginRightXl == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginRightXl === option.value) {
																setAttributes({ marginRightXl: '' });
															} else {
																setAttributes({ marginRightXl: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'md') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginRightMd == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginRightMd === option.value) {
																setAttributes({ marginRightMd: '' });
															} else {
																setAttributes({ marginRightMd: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginRightXs == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginRightXs === option.value) {
																setAttributes({ marginRightXs: '' });
															} else {
																setAttributes({ marginRightXs: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}


									</BaseControl>
									<BaseControl
										label={__('Margen Inferior', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginBottomXl == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginBottomXl === option.value) {
																setAttributes({ marginBottomXl: '' });
															} else {
																setAttributes({ marginBottomXl: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'md') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginBottomMd == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginBottomMd === option.value) {
																setAttributes({ marginBottomMd: '' });
															} else {
																setAttributes({ marginBottomMd: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<ButtonGroup className="art-btn-group">
												{spacingOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															marginBottomXs == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (marginBottomXs === option.value) {
																setAttributes({ marginBottomXs: '' });
															} else {
																setAttributes({ marginBottomXs: option.value });
															}
														}}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										) : ('')}
									</BaseControl>
								</Fragment>
							)
						}}

					</TabPanel>


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
				marginTopXl: {
					type: 'string',
					default: ''
				},
				marginLeftXl: {
					type: 'string',
					default: ''
				},
				marginRightXl: {
					type: 'string',
					default: ''
				},
				marginBottomXl: {
					type: 'string',
					default: ''
				},
				marginTopMd: {
					type: 'string',
					default: ''
				},
				marginLeftMd: {
					type: 'string',
					default: ''
				},
				marginRightMd: {
					type: 'string',
					default: ''
				},
				marginBottomMd: {
					type: 'string',
					default: ''
				},
				marginTopXs: {
					type: 'string',
					default: ''
				},
				marginLeftXs: {
					type: 'string',
					default: ''
				},
				marginRightXs: {
					type: 'string',
					default: ''
				},
				marginBottomXs: {
					type: 'string',
					default: ''
				},
			}
		}
	}
	return settings;
}

const withMarginComponent = createHigherOrderComponent(
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
						<MarginComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withMarginComponent');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	const {
		marginTopXs,
		marginTopMd,
		marginTopXl,
		marginLeftXs,
		marginLeftMd,
		marginLeftXl,
		marginRightXs,
		marginRightMd,
		marginRightXl,
		marginBottomXs,
		marginBottomMd,
		marginBottomXl,
	} = attributes;

	let classes = [];

	if (marginTopXs != null && marginTopXs != '') {
		classes.push(`margin-top-${marginTopXs}@xs`)
	}
	if (marginLeftXs != null && marginLeftXs != '') {
		classes.push(`margin-left-${marginLeftXs}@xs`)
	}
	if (marginRightXs != null && marginRightXs != '') {
		classes.push(`margin-right-${marginRightXs}@xs`)
	}
	if (marginBottomXs != null && marginBottomXs != '') {
		classes.push(`margin-bottom-${marginBottomXs}@xs`)
	}
	//Md
	if (marginTopMd != null && marginTopMd != '') {
		classes.push(`margin-top-${marginTopMd}@md`)
	}
	if (marginLeftMd != null && marginLeftMd != '') {
		classes.push(`margin-left-${marginLeftMd}@md`)
	}
	if (marginRightMd != null && marginRightMd != '') {
		classes.push(`margin-right-${marginRightMd}@md`)
	}
	if (marginBottomMd != null && marginBottomMd != '') {
		classes.push(`margin-bottom-${marginBottomMd}@md`)
	}

	//Xl
	if (marginTopXl != null && marginTopXl != '') {
		classes.push(`margin-top-${marginTopXl}@lg`)
	}
	if (marginLeftXl != null && marginLeftXl != '') {
		classes.push(`margin-left-${marginLeftXl}@lg`)
	}
	if (marginRightXl != null && marginRightXl != '') {
		classes.push(`margin-right-${marginRightXl}@lg`)
	}
	if (marginBottomXl != null && marginBottomXl != '') {
		classes.push(`margin-bottom-${marginBottomXl}@lg`)
	}

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/MarginComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/MarginComponent/advanced',
	withMarginComponent
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/MarginComponent/applyExtraClass',
	applyExtraClass
); 