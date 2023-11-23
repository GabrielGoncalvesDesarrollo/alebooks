import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, checkboxControl, Icon, Button, ButtonGroup, PanelRow, SelectControl, Panel, TabPanel, Tooltip } from '@wordpress/components';
import { iconBackground } from '../../icons';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import {removeClasses} from '../../tools';
import lodash from 'lodash';
import icons from './icons';


let initalOpenPanel = false;


const allowedBlocks = [
	'wp-artsolut-blocks/container'
];

const bgsizeOptions = [
	{label: 'Default', value: '' },
	{label: 'Cover', value: 'cover'},
	{label: 'Contain', value: 'contain'}
];

let spacingOptions = [
	{ label: __('xs', 'wp-artsolut-blocks'), value: 'xs' },
	{ label: __('sm', 'wp-artsolut-blocks'), value: 'sm' },
	{ label: __('md', 'wp-artsolut-blocks'), value: 'md' },
	{ label: __('lg', 'wp-artsolut-blocks'), value: 'lg' },
	{ label: __('xl', 'wp-artsolut-blocks'), value: 'xl' },
];

class BgAlingmentControl extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { bgalignXs, bgsizeXs, bgalignMd, bgsizeMd, bgalignXl, bgsizeXl, } = attributes;

		let allow = false;

		const name = this.props.name;

		const handleReset = () => {
			const defaultValue = '';

			setAttributes({ bgalign: defaultValue });
		};

		if (!allow) {
			allow = allowedBlocks.includes(name);
		}

		if (!allow) {
			return null;
		}

		return(
			<InspectorControls>
			
				<PanelBody
					title={
						<Fragment>
							<Icon icon={icons.align} className="art-ext-icon" />
							<span>{__('Posición')} </span>
						</Fragment>
					}
					initialOpen={initalOpenPanel}
					onToggle={() => {
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
										label={__('Posición', 'wp-artsolut-blocks')}
										className="art-ext-basecontrol"
									>
										{(tabData.name === 'xl') ? (
											<Fragment>

												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: '100%',
														marginTop: '20px'

													}}
												>
													<AlignmentMatrixControl
														value={bgalignXl}
														onChange={(newValue) => {
															setAttributes({ bgalignXl: newValue })
														}}
													/>
												</div>

												<div
													style={{
														width: '100%',
														marginTop: '20px'
													}}
												>
													<SelectControl
														label="Tamaño"
														value={bgsizeXl}
														options={bgsizeOptions}
														onChange={(value) => {
															setAttributes({ bgsizeXl: value })
														}}
													></SelectControl>

												</div>
											</Fragment>
										) : ('')}

										{(tabData.name === 'md') ? (
											<Fragment>

												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: '100%',
														marginTop: '20px'

													}}
												>
													<AlignmentMatrixControl
														value={bgalignMd}
														onChange={(newValue) => {
															setAttributes({ bgalignMd: newValue })
														}}
													/>
												</div>
												<div
													style={{
														width: '100%',
														marginTop: '20px'
													}}
												>
													<SelectControl
														label="Tamaño"
														value={bgsizeMd}
														options={bgsizeOptions}
														onChange={(value) => {
															setAttributes({ bgsizeMd: value })
														}}
													></SelectControl>

												</div>
											</Fragment>
										) : ('')}

										{(tabData.name === 'xs') ? (
											<Fragment>

												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center',
														width: '100%',
														marginTop: '20px'

													}}
												>
													<AlignmentMatrixControl
														value={bgalignXs}
														onChange={(newValue) => {
															setAttributes({ bgalignXs: newValue })
														}}
													/>
												</div>
												
												<div
													style={{
														width: '100%',
														marginTop: '20px'
													}}
												>
													<SelectControl
														label="Tamaño"
														value={bgsizeXs}
														options={bgsizeOptions}
														onChange={(value) => {
															setAttributes({ bgsizeXs: value })
														}}
													></SelectControl>

												</div>
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
				bgalignXs: {
					type: 'string',
					default: 'center center'
				},
				bgsizeXs: {
					type: 'string',
					default: ''
				},
				bgalignMd: {
					type: 'string',
					default: 'center center'
				},
				bgsizeMd: {
					type: 'string',
					default: ''
				},
				bgalignXl: {
					type: 'string',
					default: 'center center'
				},
				bgsizeXl: {
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
						<BgAlingmentControl { ...props } />
					</Fragment>
				);
			}

			return <BlockEdit { ...props } />;

		}, 'withBgAlingmentControl');


function applyExtraClass(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	let classes = [];

	return {
    ...extraProps,
    className: classnames(extraProps.className, classes)
  };
}

addFilter(
	'blocks.registerBlockType',
	'wp-artsolut-blocks/BgAlingmentControl/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'wp-artsolut-blocks/BgAlingmentControl/advanced',
	withInspectorControl
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'wp-artsolut-blocks/BgAlingmentControl/applyExtraClass',
	applyExtraClass
); 