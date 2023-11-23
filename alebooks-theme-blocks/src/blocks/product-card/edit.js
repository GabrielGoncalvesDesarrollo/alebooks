import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { PanelBody, Icon, PanelRow, Button, ColorPalette, TextControl, Toolbar, ToolbarButton } from '@wordpress/components';

import {
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	__experimentalLinkControl as LinkControl

} from "@wordpress/block-editor";
import './styles/editor.scss';

import icons from './icons.js';

const colors = [
	{ name: "pastel", color: "#FFEFCF" },
	{ name: "red", color: "#F5333F" },
	{ name: "orange", color: "#FF7A00" },
];

function getColorName(colorValue) {
	const color = colors.find((c) => c.color === colorValue);
	if (color) {
		return color.name;
	} else {
		return null;
	}
}

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes, className } = this.props;
		const { cardTitle, imageAlt, imageUrl, coverColor, coverColorName, post } = attributes;

		const resetImage = () => {
			setAttributes({imageAlt: '', imageUrl: ''});
		}

		const setColorName = (color) => {
			setAttributes({coverColorName: getColorName(color)});
		}

		const getImageButton = (openEvent) => {
			if (attributes.imageUrl) {
				return (
					<Fragment>
						
						<div className="">
							<img
								src={attributes.imageUrl}
								onClick={openEvent}
								className="image"
							/>
						</div>
						<div className="button-container">
							<Button
								isDefault
								isDestructive
								onClick={() => resetImage() }
								>
									Reset
							</Button>
						</div>
					</Fragment>
				);
			}
			else {
				return (
					<div className="button-container">
						<Button
							onClick={openEvent}
							className="button button-large"
						>
							Selecciona una imagen
						</Button>
					</div>
				);
			}
		};


		return(
			<Fragment>
				<InspectorControls>
					<PanelBody
						className="art-media-upload"
						title={
							<Fragment>
								<Icon icon={icons.card} className="art-ext-icon" />
								<span> {__("Opciones tarjeta producto", "wp-arstolut-blocks")}</span>
							</Fragment>
						}
					>
						<PanelRow>
							<TextControl
								label="Titulo de la tarjeta"
								help="titulo que aparece al pasar el ratón por encima de la tarjeta"
								value={cardTitle}
								onChange={(value) => setAttributes({cardTitle:value})}
							/>
						</PanelRow>

						<PanelRow>
							<MediaUpload
								onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url });}}
								type="image"
								value={attributes.imageID}
								render={({ open }) => getImageButton(open)}
							/>
						</PanelRow>
						
						<PanelRow>
							<div className="card-label">Color del hover</div>
							<ColorPalette
								colors={colors}
								className="art-mt-xs"
								value={coverColor}
								onChange={(newColor) => {
									setColorName(newColor);
									setAttributes({ coverColor: newColor });
								}}
								disableCustomColors
							/>
						</PanelRow>

						<PanelRow 
						className="art-linkcontrol"
						header="Enlace"
						>
							<div className="card-label">Enlace de l atarjeta</div>		
							<LinkControl
								label="Enlace"
								searchInputPlaceholder="Buscar..."
								value={attributes.post}
								settings={[
									{
										id: 'opensInNewTab',
										title: 'Abrir en ventana nueva?',
									},
								]}
								onChange={(newPost) => setAttributes({ post: newPost })}
								withCreateSuggestion={false}
							>
							</LinkControl>
						</PanelRow>

					</PanelBody>
				</InspectorControls>

				<div className={`product-card ${getColorName(coverColor)}`}>
					<div className="bg">
						<img src={imageUrl}></img>
					</div>
					<div className="cover"></div>
					<div className="body">
						<h2>{cardTitle}</h2>
						<div className="flecha">
							<svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 17H45.5" stroke="white" stroke-width="2" />
								<path d="M46 17C40.3333 17 29 13.6 29 0" stroke="white" stroke-width="2" />
								<path d="M29 34C29 28.3333 32.4 17 46 17" stroke="white" stroke-width="2" />
							</svg>
						</div>
					</div>	
				</div>

			</Fragment>
		)
	}
}
export default BlockEdit;