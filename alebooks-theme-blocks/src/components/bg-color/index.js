import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { BaseControl, PanelBody, ColorPalette, checkboxControl, Icon, Button, ButtonGroup } from '@wordpress/components';
import { iconBackground } from '../../icons';
import { InspectorControls } from '@wordpress/block-editor';

let initalOpenPanel = false;

let colors = [
	{ name: 'pink', color: '#EE9593' },
	{ name: 'yellow', color: '#FFE000' },
	{ name: 'green', color: '#55C470' },
]

export default class BgComponent extends Component {
	constructor(props){
		super(props);
		this.props = props;

		this.state = {
			name: this.props.name,
		}		
		this.onChange = this.onchange.bind(this);

	}

	onchange(data){
		
	}

	render(){
		const { attributes, setAttributes } = this.props;
		const { bgColor } = attributes;
		const name = this.state.name;

		function setColorName(value){

			let result = '';

			switch(value){
				case '#EE9593':
					result = 'pink';
					break;
				case '#FFE000':
					result = 'yellow';
					break;
				case '#55C470':
					result = 'green';
					break;
			}
			setAttributes({ bgColorName: result });
		}

		if ( name !== 'wp-artsolut-blocks/column'){
			return null;
		}

		return(
			<InspectorControls>
				<PanelBody
					title={
						<Fragment>
							<Icon icon={iconBackground} className="art-ext-icon" />
							<span>{__('Fondo')}</span>
						</Fragment>
					}
					initialOpen={initalOpenPanel}
					onToggle={() => {
						initalOpenPanel = !initalOpenPanel;
					}}
				>
				 <BaseControl
				 		label={ __('Color de fondo')}
						help={ __('Seleccione el color de fondo') }
						className="art-ext-basecontrol"
				 >
				 	<ColorPalette
						value={bgColor}
						colors={colors}
						onChange={(value) => {
							setColorName(value);
							setAttributes({ bgColor: value });
						}}
						disableCustomColors={true}
					/>

				 </BaseControl>

				</PanelBody>
			</InspectorControls>
		)
	}
}

/* function addBgAttributes(settings) {
	if (typeof settings.attributes !== 'undefined') {
		settings.attributes = Object.assign(settings.attributes, {
			bgColor: {
				type: 'string',
				default: '',
			},
		});
	}
	return settings;
}

addFilter(
	"blocks.registerBlockType",
	"wp-artsolut-blocks/add-bg-attributes",
	addBgAttributes
);

const withInspectorControl = createHigherOrderComponent(
  (BlockEdit) =>
    function (props) {
      return (
        <Fragment>
          <BlockEdit {...props} />
          <BgComponent {...props} />
        </Fragment>
      );
    },
  'withInspectorControl'
);

addFilter(
	"editor.BlockEdit",
	"wp-artsolut-blocks/with-bg-advance-controls",
	withInspectorControl
);

function addClasses( extraProps, blockType, attributes ){
	const { bgColor } = attributes;
	if (bgColor !== undefined && bgColor !== '') {
		extraProps.className += ` v-${artVerticalAligment}`;
	}
	
	return extraProps;	
}

addFilter(
	"blocks.getSaveContent.extraProps",
	"wp-artoslut-blocks/add-bg-classes",
	addClasses
); */