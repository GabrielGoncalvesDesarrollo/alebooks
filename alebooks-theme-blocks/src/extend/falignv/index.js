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
	'wp-artsolut-blocks/column',
];

let spacingOptions = [
	{ label: __('xs', 'wp-artsolut-blocks'), value: 'xs' },
	{ label: __('sm', 'wp-artsolut-blocks'), value: 'sm' },
	{ label: __('md', 'wp-artsolut-blocks'), value: 'md' },
	{ label: __('lg', 'wp-artsolut-blocks'), value: 'lg' },
	{ label: __('xl', 'wp-artsolut-blocks'), value: 'xl' },
];

let verticalOptions = [
	{ label: __('top', 'wp-artsolut-blocks'), key: 'vtop', value: 'start', icon: icons.top },
	{ label: __('center', 'wp-artsolut-blocks'), key: 'vcenter', value: 'center', icon: icons.center },
	{ label: __('bottom', 'wp-artsolut-blocks'), key: 'vbottom', value: 'end', icon: icons.bottom },
	{ label: __('between', 'wp-artsolut-blocks'), key: 'vbetween', value: 'between', icon: icons.between }
]

class FaligmentvComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { YverticalXs, YverticalMd, YverticalXl, XverticalXs, XverticalMd, XverticalXl } = attributes;

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
							<Icon icon={ icons.align } className = "art-ext-icon" />
							<span>{ __('Alineación vertical') } </span>
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
										label={__('Alineación Y', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<ButtonGroup className="art-btn-group">
												{verticalOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															YverticalXl == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (YverticalXl === option.value) {
																setAttributes({ YverticalXl: '' });
															} else {
																setAttributes({ YverticalXl: option.value });
															}
														}}
													>
														<Icon icon={option.icon} />
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'md') ? (
											<ButtonGroup className="art-btn-group">
												{verticalOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															YverticalMd == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (YverticalMd === option.value) {
																setAttributes({ YverticalMd: '' });
															} else {
																setAttributes({ YverticalMd: option.value });
															}
														}}
													>
														<Icon icon={option.icon}/>
													</Button>
												))}
											</ButtonGroup>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<ButtonGroup className="art-btn-group">
												{verticalOptions.map((option, value) => (

													<Button
														key={option.value}
														variant={
															YverticalXs == option.value ? 'primary' : ''
														}
														isPressed={value === option.value}
														disabled={option.disabled}
														onClick={() => {
															if (YverticalXs === option.value) {
																setAttributes({ YverticalXs: '' });
															} else {
																setAttributes({ YverticalXs: option.value });
															}
														}}
													>
														<Icon icon={option.icon} />
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
				YverticalXs: {
					type: 'string',
					default: ''
				},
				YverticalMd: {
					type: 'string',
					default: ''
				},
				YverticalXl: {
					type: 'string',
					default: ''
				},
				XerticalXs: {
					type: 'string',
					default: ''
				},
				XverticalMd: {
					type: 'string',
					default: ''
				},
				XverticalXl: {
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
						<FaligmentvComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withFaligmentvComponent');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	const {
		YverticalXs, 
		YverticalMd, 
		YverticalXl
	} = attributes;

	let classes = [];

	if (YverticalXs != null && YverticalXs != '') {
		classes.push(`justify-${YverticalXs}@xs`)
	}

	if (YverticalMd != null && YverticalMd != '') {
		classes.push(`justify-${YverticalMd}@xs`)
	}

	if (YverticalXl != null && YverticalXl != '') {
		classes.push(`justify-${YverticalXl}@xl`)
	}

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/FaligmentvComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/FaligmentvComponent/advanced',
	withInspectorControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/FaligmentvComponent/applyExtraClass',
	applyExtraClass
); 