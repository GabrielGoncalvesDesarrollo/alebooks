import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import * as Editor from '@wordpress/editor';
import * as Blockeditor from '@wordpress/block-editor';
const { InnerBlocks, InspectorControls, BlockControls, MediaUpload, MediaUploadCheck, __experimentalLinkControl: LinkControl } = Blockeditor || Editor; // Fallback to 
import './styles/editor.scss';

const ALLOWED_BLOCKS = [
	'core/gallery'
];

const MY_TEMPLATE = [
	['core/gallery', {className: 'product-gallery' }]
];

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes } = this.props;
		return(
			<Fragment>
				<InnerBlocks
					className="art-product-gallery"
					template={MY_TEMPLATE}
					templateLock={false}
					allowedBlocks={ALLOWED_BLOCKS}
				/>
			</Fragment>
		)
	}
}
export default BlockEdit;