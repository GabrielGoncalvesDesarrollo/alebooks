import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { Fragment, Component } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { PanelBody, BaseControl, SelectControl, TextareaControl, ExternalLink, Button } from '@wordpress/components';

import { InspectorControls, InnerBlocks, RichText, MediaUpload } from '@wordpress/block-editor';

import './styles/editor.scss';

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes, hasChildBlocks } = this.props;
		
		const {
			icon,
			iconSize, 
		} = attributes;

		let { className = '' } = this.props;

		return(
			<Fragment>
				<InnerBlocks
					templateLock={false}
					renderAppender={hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender />}
				/>
			</Fragment>
		)
	}
}

export default withSelect((select, props) => {
	const { clientId } = props;
	const blockEditor = select('core/block-editor');

	return {
		hasChildBlocks: blockEditor ? blockEditor.getBlockOrder(clientId).length > 0 : false,
	};
})(BlockEdit);