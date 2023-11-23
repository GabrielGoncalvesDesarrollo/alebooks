import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { Panel, PanelBody, PanelRow, BaseControl, ButtonGroup, Button, Icon, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { InspectorControls, InnerBlocks, RichText, MediaUpload } from '@wordpress/block-editor';

import './styles/editor.scss';
import icons from './icons.js';
import appicons from '../../icons/icons.js';

const iconlist = [
	{ label: 'Libro', value: 'book' },
	{ label: 'Tag', value: 'etiqueta' },
	{ label: 'Cama', value: 'bed' },
	{ label: 'Cama doble', value: 'double' },
	{ label: 'Marca', value: 'mark' },
	{ label: 'Calendario', value: 'calendar' },
	{ label: 'Insignia', value: 'medal' },
	{ label: 'personas', value: 'persons' },
	{ label: 'Libro abierto', value: 'openbook' },
	{ label: 'Hoja abierto', value: 'leaf' },
	{ label: 'Persona', value: 'ponente' },
	{ label: 'Euro', value: 'euro' },
	{ label: 'Tarjeta de crédito', value: 'credit' },
];

function BlockEdit(props){
	const { attributes, setAttributes } = props;
	const { iconName } = attributes;

	const [isOpen, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

		return(
			<Fragment>
			  <InspectorControls>
					<PanelBody>
						<Button
							isDestructive
							key="resetIcons"
							onClick={() => setAttributes({ iconName: '' })}
						>
							Restaurar
						</Button>
					</PanelBody>
				</InspectorControls>
				<div className="art-block-ico">
					{ (!iconName) ?(
						<Fragment>
							<Button
								variant='secondary'
								onClick={openModal}
							>
								Selecciona Icono
							</Button>
						</Fragment>
					) : null }
	
					{(iconName)?(
						<Icon icon={appicons[iconName]} onClick={openModal} />
					): null}

					{(isOpen === true)?(
						<Modal
							title="Selector de icono"
							onRequestClose={closeModal}
						>
							<PanelBody>
								<PanelRow>
									<ButtonGroup
										label="Icono"
										help="Seleccione el icono que se desa mostrar en el boton"
										className='art-mt-xs'
									>
										<ul class="art-btn-group">
											{iconlist.map((option) => {
												return (
													<li>
														<Button
															key={option.value}
															variant={(option.value == iconName) ? 'primary' : ''}
															className={classnames({
																'is-active': 'left' === option.value,
															})}
															onClick={() => setAttributes({ iconName: option.value })}
															icon={appicons[option.value]}
															label={option.label}
														/>
													</li>
												)
											})}
										</ul>
									</ButtonGroup>
								</PanelRow>
								<PanelRow>
									<Button
										isDestructive
										key="resetIcons"
										onClick={() => setAttributes({ iconName: '' })}
									>
										Restaurar
									</Button>
								</PanelRow>
							</PanelBody>
						</Modal>
					): null}
				</div>
			</Fragment>
		)
}

export default BlockEdit;