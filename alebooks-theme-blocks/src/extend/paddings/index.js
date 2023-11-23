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
import icons from './icons';
import lodash from 'lodash';
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

class PaddingComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			paddingTopXs,
			paddingTopMd,
			paddingTopXl,
			paddingLeftXs,
			paddingLeftMd,
			paddingLeftXl,
			paddingRightXs,
			paddingRightMd,
			paddingRightXl,
			paddingBottomXs,
			paddingBottomMd,
			paddingBottomXl,
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
							<span>{ __('Padding del contenido') } </span>
						</Fragment>
					}
					initialOpen = { initalOpenPanel }
					onToggle = {() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
					<TabPanel
						className="art-ext-tabpanel"
						tabs = {
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
						return(
							<Fragment>
								<BaseControl
									label={__('Padding superior', 'wp-artsolut-blocks')}
									className="art-ext-basecontrol"
								>
								{ (tabData.name === 'xl') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingTopXl == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingTopXl === option.value) {
														setAttributes({ paddingTopXl: '' });
													} else {
														setAttributes({ paddingTopXl: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'md') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingTopMd == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingTopMd === option.value) {
														setAttributes({ paddingTopMd: '' });
													} else {
														setAttributes({ paddingTopMd: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'xs') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingTopXs == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingTopXs === option.value) {
														setAttributes({ paddingTopXs: '' });
													} else {
														setAttributes({ paddingTopXs: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }


								</BaseControl>

								<BaseControl
									label={__('Padding Izquierda', 'wp-artsolut-blocks')}
									className="art-ext-basecontrol"
								>
								{ (tabData.name === 'xl') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingLeftXl == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingLeftXl === option.value) {
														setAttributes({ paddingLeftXl: '' });
													} else {
														setAttributes({ paddingLeftXl: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'md') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingLeftMd == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingLeftMd === option.value) {
														setAttributes({ paddingLeftMd: '' });
													} else {
														setAttributes({ paddingLeftMd: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'xs') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingLeftXs == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingLeftXs === option.value) {
														setAttributes({ paddingLeftXs: '' });
													} else {
														setAttributes({ paddingLeftXs: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								</BaseControl>
								<BaseControl
									label={__('Padding Derecha', 'wp-artsolut-blocks')}
									className="art-ext-basecontrol"
								>
								{ (tabData.name === 'xl') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingRightXl == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingRightXl === option.value) {
														setAttributes({ paddingRightXl: '' });
													} else {
														setAttributes({ paddingRightXl: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'md') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingRightMd == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingRightMd === option.value) {
														setAttributes({ paddingRightMd: '' });
													} else {
														setAttributes({ paddingRightMd: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'xs') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingRightXs == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingRightXs === option.value) {
														setAttributes({ paddingRightXs: '' });
													} else {
														setAttributes({ paddingRightXs: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }


								</BaseControl>
								<BaseControl
									label={__('Padding Inferior', 'wp-artsolut-blocks')}
									className="art-ext-basecontrol"
								>
								{ (tabData.name === 'xl') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingBottomXl == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingBottomXl === option.value) {
														setAttributes({ paddingBottomXl: '' });
													} else {
														setAttributes({ paddingBottomXl: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'md') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingBottomMd == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingBottomMd === option.value) {
														setAttributes({ paddingBottomMd: '' });
													} else {
														setAttributes({ paddingBottomMd: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }

								{ (tabData.name === 'xs') ? (
									<ButtonGroup className="art-btn-group">
										{spacingOptions.map((option, value) => (

											<Button
												key={option.value}
												variant={
													paddingBottomXs == option.value ? 'primary' : ''
												}
												isPressed={value === option.value}
												disabled={option.disabled}
												onClick={() => {
													if (paddingBottomXs === option.value) {
														setAttributes({ paddingBottomXs: '' });
													} else {
														setAttributes({ paddingBottomXs: option.value });
													}
												}}
											>
												{option.label}
											</Button>
										))}
									</ButtonGroup>
								) : ('') }
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
				paddingTopXl: {
					type: 'string',
					default: ''
				},
				paddingLeftXl: {
					type: 'string',
					default: ''
				},
				paddingRightXl: {
					type: 'string',
					default: ''
				},
				paddingBottomXl: {
					type: 'string',
					default: ''
				},
				paddingTopMd: {
					type: 'string',
					default: ''
				},
				paddingLeftMd: {
					type: 'string',
					default: ''
				},
				paddingRightMd: {
					type: 'string',
					default: ''
				},
				paddingBottomMd: {
					type: 'string',
					default: ''
				},
				paddingTopXs: {
					type: 'string',
					default: ''
				},
				paddingLeftXs: {
					type: 'string',
					default: ''
				},
				paddingRightXs: {
					type: 'string',
					default: ''
				},
				paddingBottomXs: {
					type: 'string',
					default: ''
				},
			}
		}
	}
	return settings;
}

const withPaddingComponent = createHigherOrderComponent(
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
			
/* 			if (props.attributes.styleH1) {
				classes.push({ 'styleH1': true });
			} else {
				classes.push({ 'styleH1': false });
			} */


			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<PaddingComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withPaddingComponent');


function applyExtraClass(extraProps, blockType, attributes) {

	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	const {
		paddingTopXs,
		paddingTopMd,
		paddingTopXl,
		paddingLeftXs,
		paddingLeftMd,
		paddingLeftXl,
		paddingRightXs,
		paddingRightMd,
		paddingRightXl,
		paddingBottomXs,
		paddingBottomMd,
		paddingBottomXl,
	} = attributes;
	
	let classes = [];

	if (paddingTopXs != null && paddingTopXs != ''){
		classes.push(`padding-top-${paddingTopXs}@xs`)
	}
	if (paddingLeftXs != null && paddingLeftXs != ''){
		classes.push(`padding-left-${paddingLeftXs}@xs`)
	}
	if (paddingRightXs != null && paddingRightXs != ''){
		classes.push(`padding-right-${paddingRightXs}@xs`)
	}
	if (paddingBottomXs != null && paddingBottomXs != ''){
		classes.push(`padding-bottom-${paddingBottomXs}@xs`)
	}
	//Md
	if (paddingTopMd != null && paddingTopMd != ''){
		classes.push(`padding-top-${paddingTopMd}@md`)
	}
	if (paddingLeftMd != null && paddingLeftMd != ''){
		classes.push(`padding-left-${paddingLeftMd}@md`)
	}
	if (paddingRightMd != null && paddingRightMd != ''){
		classes.push(`padding-right-${paddingRightMd}@md`)
	}
	if (paddingBottomMd != null && paddingBottomMd != ''){
		classes.push(`padding-bottom-${paddingBottomMd}@md`)
	}

	//Xl
	if (paddingTopXl != null && paddingTopXl != ''){
		classes.push(`padding-top-${paddingTopXl}@lg`)
	}
	if (paddingLeftXl != null && paddingLeftXl != ''){
		classes.push(`padding-left-${paddingLeftXl}@lg`)
	}
	if (paddingRightXl != null && paddingRightXl != ''){
		classes.push(`padding-right-${paddingRightXl}@lg`)
	}
	if (paddingBottomXl != null && paddingBottomXl != ''){
		classes.push(`padding-bottom-${paddingBottomXl}@lg`)
	}

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/PaddingComponet/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/PaddingComponet/advanced',
	withPaddingComponent
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/PaddingComponet/applyExtraClass',
	applyExtraClass
); 
