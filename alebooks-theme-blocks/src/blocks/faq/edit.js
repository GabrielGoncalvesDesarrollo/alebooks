import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
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
                title: defaultItem.title,
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
                                    <RichText
                                        tagName="p"
                                        placeholder={__('Texto visible')}
                                        value={item.title}
                                        onChange={(value) => this.onChangePropertyItem('title', value, index, true)}
                                    />
                                </div>

                                <div className="timeline-row">
                                    <RichText
                                        tagName="p"
                                        placeholder={__('Texto oculto')}
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
