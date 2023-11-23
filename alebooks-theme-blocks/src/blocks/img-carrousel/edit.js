import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { BaseControl, Icon, PanelBody, PanelRow, Button } from '@wordpress/components';

class BlockEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [],
		};
	}

	onSelectImages = (images) => {
		this.setState({ images: images });
		this.props.setAttributes({ images: images });
	}

	componentDidMount() {
		const { attributes } = this.props;
		this.setState({ images: attributes.images || [] });
	}

	render() {
		const { images } = this.state;

		return (
			<Fragment>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={this.onSelectImages}
						allowedTypes={['image']}
						multiple
						gallery
						value={images.map((image) => image.id)}
						render={({ open }) => (
							<Button onClick={open}>
								{__('Selecciona las imágenes para la galería', 'belkids')}
							</Button>
						)}
					/>
				</MediaUploadCheck>

				<div className="image__grid">
					{images.map((image) => (
						<div className="image__grid__item" key={image.id}>
							<img src={image.url} alt={image.alt} />
						</div>
					))}
				</div>
			</Fragment>
		);
	}
}

export default BlockEdit;
