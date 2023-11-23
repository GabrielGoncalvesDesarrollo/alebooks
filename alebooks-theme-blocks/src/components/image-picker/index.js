import classnames from 'classnames/dedupe';

import { Component } from '@wordpress/element';
import { BaseControl } from '@wordpress/components';

class ImagePicker extends Component {
	render(){
		const { value, options, onChange, label } = this.props;

		return (
			<BaseControl label={label} className="art-image-picker">
				{options.map((option) => (
					<button
            key={`art-image-pircker-${option.value}`}
            onClick={() => {
              onChange(option.value);
            }}
            className={classnames(
              'art-component-image-picker-item',
              value === option.value ? 'art-component-image-picker-item-active' : '',
              option.className
            )}
          >
            {option.image && 'string' === typeof option.image ? (
              <img src={option.image} alt={option.label || option.value} />
            ) : (
              ''
            )}
            {option.image && 'string' !== typeof option.image ? option.image : ''}
            {option.label ? <span>{option.label}</span> : ''}
          </button>
        ))}

			</BaseControl>
		)

	}
}
export default ImagePicker;