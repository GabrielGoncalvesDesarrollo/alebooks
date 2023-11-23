import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { Panel, PanelBody, PanelRow, BaseControl, ButtonGroup, Button, Icon, Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { InspectorControls, InnerBlocks, RichText, MediaUpload } from '@wordpress/block-editor';

import cicons from '../../icons/cicons';

function IconPicker(props){

  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const { value, onChange, label } = props;

  return(
    <Fragment>

      <InspectorControls>
        <PanelBody
          label="Opciones de icono"
        >
          <Button
            isDestructive
            key="resetIcons"
            onClick={() => onChange('')}
          >
            Restaurar
          </Button>
        </PanelBody>
      </InspectorControls>

      <div className="art-block-ico">
        {(!value) ? (
          <Fragment>
            <Button
              variant='secondary'
              onClick={openModal}
            >
              Selecciona Icono
            </Button>
          </Fragment>
        ) : null}

        {(value !== undefined && value !== '') ? (
          <Icon icon={cicons[value]} onClick={openModal} />
        ) : null}  
        

        {(isOpen === true) ? (
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
                    {Object.keys(cicons).map((iconName) => (
                      <li>
                        <Button
                          key={iconName}
                          variant={(iconName === value) ? 'primary' : ''}
                          className={classnames({
                            'is-active': 'left' === iconName
                          })}
                          onClick={() => onChange(iconName)}
                          icon={cicons[iconName]}
                          label={iconName}
                        />
                      </li>
                    ))}
                  </ul>
                </ButtonGroup>
              </PanelRow>
             
              { (value !== '') ? (
                <PanelRow>
                  <Button
                    isDestructive
                    key="resetIcons"
                    onClick={() => onChange('')}
                  >
                    Restaurar
                  </Button>
                </PanelRow>
              ):null }

            </PanelBody>
          </Modal>
        ) : null}

      </div>
    </Fragment>
  )
}

export default IconPicker;