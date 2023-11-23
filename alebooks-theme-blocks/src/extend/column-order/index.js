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
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';


import icons from './icons';

let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/column'
];

let spacingOptions = [
	{ label: __('xs', 'wp-artsolut-blocks'), value: 'xs' },
	{ label: __('sm', 'wp-artsolut-blocks'), value: 'sm' },
	{ label: __('md', 'wp-artsolut-blocks'), value: 'md' },
	{ label: __('lg', 'wp-artsolut-blocks'), value: 'lg' },
	{ label: __('xl', 'wp-artsolut-blocks'), value: 'xl' },
];

class ColumnOrderComponent extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { orderXl, orderMd, orderXs } = attributes;

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
							<Icon icon={ icons.order } className = "art-ext-icon" />
							<span>{ __('Orden') } </span>
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
												<NumberControl
													label="Orden"
													help="Establece el orden de la columna"
													min={0}
													max={12}
													value={orderXl}
													size='small'
													step='1'
													type='string'
													onChange={(value) => {
														setAttributes({orderXl: value})
													}}
												>
												</NumberControl>
											</Fragment>
										) : ('')}

										{(tabData.name === 'md') ? (
											<Fragment>
													<NumberControl
														label="Orden"
														help="Establece el orden de la columna"
														min={0}
														max={12}
														value={orderMd}
														size='small'
														step='1'
														type='string'
														onChange={(value) => {
															setAttributes({ orderMd: value })
														}}
													>
												</NumberControl>
											</Fragment>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<Fragment>
												<NumberControl
													label="Orden"
													help="Establece el orden de la columna"
													min={0}
													max={12}
													value={orderXs}
													size='small'
													step='1'
													type='string'
													onChange={(value) => {
														setAttributes({ orderXs: value })
													}}
												>
												</NumberControl>
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
				orderXl: {
					type: 'string',
					default: 0
				},
				orderMd: {
					type: 'string',
					default: 0
				},
				orderXs: {
					type: 'string',
					default: 0
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
						<ColumnOrderComponent { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withInspectorControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];
	if (attributes.attr)
		classes.push('styleH1');


	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/ColumnOrderComponent/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/ColumnOrderComponent/advanced',
	withInspectorControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/custom/applyExtraClass',
	applyExtraClass
); 