import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import * as Blockeditor from '@wordpress/block-editor';
const { InnerBlocks, InspectorControls, BlockControls, MediaUpload, MediaUploadCheck, __experimentalLinkControl: LinkControl } = Blockeditor || Editor; // Fallback to 
import './styles/editor.scss';

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes } = this.props;
		const { titulo } = attributes;

		return(
			<Fragment>
				<div className="">
					<RichText
						tagName="h1"
						value={titulo}
						onChange={(newContent) => setAttributes({ titulo: newContent })}
					/>
				</div>
			</Fragment>
		)
	}
}
export default BlockEdit;