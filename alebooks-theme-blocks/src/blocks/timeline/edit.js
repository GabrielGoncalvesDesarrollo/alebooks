import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Icon, PanelBody, Button } from '@wordpress/components';
import icons from './icons.js';
import { defaultItem } from './block';

class BlockEdit extends Component {
    constructor(props) {
        super(props);
    }

    addNewItem = () => {
        this.props.setAttributes({
            items: [...this.props.attributes.items, {
                ...defaultItem,
                icon: defaultItem.icon
            }],
        });
    }

    onChangePropertyItem = (property, value, index, withMutation = false) => {
        const items = withMutation ? [...this.props.attributes.items] : this.props.attributes.items;
        if (!items[index] || typeof items[index][property] !== 'string') {
            return;
        }
        items[index][property] = value;
        this.props.setAttributes({ items: items });
    };

    onImageSelect = (media, index) => {
        // Handle image selection and store it in the item's 'image' property.
        this.onChangePropertyItem('image', media.url, index, true);
    }

    removeItem = (index) => {
        const items = [...this.props.attributes.items];
        if (items.length === 1) {
            this.props.setAttributes({ items: [defaultItem] });
        } else {
            items.splice(index, 1);
            this.props.setAttributes({ items: items });
        }
    };

    render() {
        const { attributes, setAttributes, className, isSelected } = this.props;

        return (
            <Fragment>
                <InspectorControls>
                    {/* Add any inspector controls you need here */}
                </InspectorControls>
                <div className="">
                    <div className="art-newtimeline">
                        {attributes.items && attributes.items.map((item, index) => (
                            <div
                                key={item.key}
                                className="timeline-content"
                            >
                                <button className="remove dashicons dashicons-no" onClick={() => this.removeItem(index)}>
                                    <Icon icon={icons.delete} />
                                </button>
                                <div className="timeline-row">
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={(media) => this.onImageSelect(media, index)}
                                            type="image"
                                            value={item.image}
                                            render={({ open }) => (
                                                <div>
                                                    <Button onClick={open} isPrimary>
                                                        {__('Seleccionar Imagen')}
                                                    </Button>
                                                    {item.image && (
                                                        <img src={item.image} alt={__('Selected Image')} />
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </MediaUploadCheck>
                                </div>
                                <div className="timeline-row">
                                    <RichText
                                        tagName="p"
                                        placeholder={__('Titulo')}
                                        value={item.title}
                                        onChange={(value) => this.onChangePropertyItem('title', value, index, true)}
                                    />
                                     <RichText
                                        tagName="p"
                                        placeholder={__('Descripcion')}
                                        value={item.description}
                                        onChange={(value) => this.onChangePropertyItem('description', value, index, true)}
                                    />
                                </div> 
                            </div>
                        ))}
                        <div className="editPadding" />
                        <button
                            className="addWhite"
                            onClick={this.addNewItem}>
                            {__('Añadir elemento')}
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlockEdit;
