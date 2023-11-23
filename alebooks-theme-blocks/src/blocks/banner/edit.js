import classnames from "classnames/dedupe";
import { __ } from "@wordpress/i18n";
import { Fragment, Component } from "@wordpress/element";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import {
	BaseControl,
	Icon,
	PanelBody,
	PanelRow,
	Button,
} from "@wordpress/components";

import { withSelect, withDispatch } from "@wordpress/data";

import * as BlockEditor from "@wordpress/block-editor";
import * as Editor from "@wordpress/editor"

const { InnerBlocks } = BlockEditor || Editor;

import placeholder from "./placeholder.svg";
import appicons from "../../icons/icons";
import './styles/editor.scss';

const ALLOWED_BLOCKS = [
	'wp-artsolut-blocks/grid',
	'wp-artsolut-blocks/column',
	'core/paragraph',
	'core/heading',
	'core/group'
];

class BlockEdit extends Component {
	constructor(props) {
		super(props);
	}

	onSelectMedia = (media) => {
		const { attributes, setAttributes } = this.props;

		const result = {
			photoId: media.id,
			photoUrl: media.url || media.source_url,
			photoAlt: media.alt,
		};
		setAttributes(result);
	};

	render() {
		const { attributes, setAttributes, hasChildBlocks } = this.props;
		const { title, text, photoId, photoUrl, photoAlt, subtitle } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						className="art-media-upload"
						title={
							<Fragment>
								<Icon icon={appicons.banner} className="art-ext-icon" />
								<span> {__("Imagen banner", "wp-arstolut-blocks")}</span>
							</Fragment>
						}
					>
						<PanelRow>
							<MediaUploadCheck>
								{!photoId ? (
									<MediaUpload
										onSelect={(media) => {
											this.onSelectMedia(media);
										}}
										value={photoId}
										allowedTypes={["image", "svg"]}
										render={({ open }) => (
											<Button onClick={open}>
												{__("Subir imagen", "wp-arstolut-blocks")}
											</Button>
										)}
									/>
								) : null}

								{photoId ? (
									<Fragment>
										<MediaUpload
											onSelect={(media) => {
												this.onSelectMedia(media);
											}}
											value={photoId}
											allowedTypes={["image"]}
											render={({ open }) => (
												<BaseControl
													help={__(
														"Click en la imagen para editarla o modificarla.",
														"wp-arstolut-blocks"
													)}
												>
													<a
														href="#"
														onClick={open}
														style={{ display: "block" }}
													>
														<img src={photoUrl} alt={photoAlt} />
													</a>
												</BaseControl>
											)}
										/>
										<div style={{ marginTop: -20 }} />

										<Button
											onClick={(e) => {
												setAttributes({
													photoId: "",
													photoUrl: "",
												});
												e.preventDefault();
											}}
											isPrimary
										>
											{__("Eliminar imagen", "wp-arstolut-blocks")}
										</Button>
									</Fragment>
								) : null}
							</MediaUploadCheck>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div className="art-banner">
				{photoId ? (
					<div className="art-banner__image">
					<img src={photoUrl} alt={photoAlt} />
					</div>
				) : (
					<div className="art-banner__image placeholder">
					<img src={placeholder} />
					</div>
				)}
				</div>
			</Fragment>
		);
	}
}

export default withSelect((select, props) => {
	const { clientId } = props;
	const blockEditor = select('core/block-editor');

	return {
		hasChildBlocks: blockEditor ? blockEditor.getBlockOrder(clientId).length > 0 : false,
	};
})(BlockEdit);

