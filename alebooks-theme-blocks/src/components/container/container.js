const { __ } = wp.i18n; // Import __() from wp.i18n
const { RangeControl, CheckboxControl, SelectControl, RadioControl, PanelBody, Button } = wp.components;
const { Component, Fragment } = wp.element;
const { MediaUpload, PanelColorSettings } = wp.editor;

export const blockProps = {
    containerMaxWidth: {
        type: 'number',
        default: 1170,
    },
    backgroundColor: {
        type: 'string',
        default: '#FFF',
    },
    backgroundImage: {
        type: 'string',
        default: 'none',
    },
    backgroundImageId: {
        type: 'string',
        default: '',
    },
    backgroundStyle: {
        type: 'string',
        default: '',
    },  
};

/**
 * Implements inspector container
 */
export class InspectorContainer extends Component {
    render() {
        const {
            containerMaxWidth,
            setAttributes,
        } = this.props;
        return (
            <Fragment>
            
              
            </Fragment>
        );
    }
}


export const ContainerEdit = ( props ) => {
    const styles = {};
 
    return (
        <div
            className={ `${ props.className } ${ props.attributes.timelineLayout } ` }
            style={ { ...styles, ...props.style } }
        >
            { props.children }
        </div>
    );
};

export const ContainerSave = ( props ) => {
    const styles = {};   
   
    return (
        <div
            className={ `${ props.className }  ${props.attributes.timelineLayout}` }
            style={ { ...styles, ...props.style } }
        >
            { props.children }
        </div>
    );
};
