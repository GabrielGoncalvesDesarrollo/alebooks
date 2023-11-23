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
	'wp-artsolut-blocks/column'
];

let aspectOptions = [
	{ label: __('1 / 1', 'wp-artsolut-blocks'), value: '1:1' },
	{ label: __('16 / 9', 'wp-artsolut-blocks'), value: '16:9' },
];

class AspectComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { aspectXs, aspectMd, aspectXl } = attributes;

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
							<Icon icon={ icons.aspect } className = "art-ext-icon" />
							<span>{ __('Relación de aspecto') } </span>
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
										label={__('Padding superior', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<Fragment>
												<ButtonGroup className="art-btn-group">
													{aspectOptions.map((option, value) => (

														<Button
															key={option.value}
															variant={
																aspectXl == option.value ? 'primary' : ''
															}
															isPressed={value === option.value}
															disabled={option.disabled}
															onClick={() => {
																if( aspectXl === option.value ){
																	setAttributes({ aspectXl: '' });
																} else {
																	setAttributes({ aspectXl: option.value });
																}
																
															}}
														>
															{option.label}
														</Button>
													))}
												</ButtonGroup>
											</Fragment>
										) : ('')}

										{(tabData.name === 'md') ? (
											<Fragment>
												<ButtonGroup className="art-btn-group">
													{aspectOptions.map((option, value) => (

														<Button
															key={option.value}
															variant={
																aspectMd == option.value ? 'primary' : ''
															}
															isPressed={value === option.value}
															disabled={option.disabled}
															onClick={() => {
																if( aspectMd == option.value ){
																	setAttributes({ aspectMd: '' });
																} else {
																	setAttributes({ aspectMd: option.value });
																}
															}}
														>
															{option.label}
														</Button>
													))}
												</ButtonGroup>
											</Fragment>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<Fragment>
												<ButtonGroup className="art-btn-group">
													{aspectOptions.map((option, value) => (

														<Button
															key={option.value}
															variant={
																aspectXs == option.value ? 'primary' : ''
															}
															isPressed={value === option.value}
															disabled={option.disabled}
															onClick={() => {
																if(aspectXs === option.value){
																	setAttributes({ aspectXs: '' });
																} else {
																	setAttributes({ aspectXs: option.value });
																}

															}}
														>
															{option.label}
														</Button>
													))}
												</ButtonGroup>
											</Fragment>
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
				aspectXs: {
					type: 'string',
					default: ''
				},
				aspectMd: {
					type: 'string',
					default: ''
				},
				aspectXl: {
					type: 'string',
					default: ''
				},
			}
		}
	}
	return settings;
}

const withInspectorControl = createHigherOrderComponent(
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


			let classes = [];


			props.attributes.className = classnames(props.attributes.className, classes);

			if (hasCustomClassName && props.isSelected) {
				return (
					<Fragment>
					<BlockEdit { ...props } />
						<AspectComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withAspectComponent');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];

	/* if (attributes.aspect && attributes.aspect !== '' )
		classes.push(`aspect-ratio-${attributes.aspect}`) */

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/AspectComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/AspectComponent/advanced',
	withInspectorControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/AspectComponent/applyExtraClass',
	applyExtraClass
); 