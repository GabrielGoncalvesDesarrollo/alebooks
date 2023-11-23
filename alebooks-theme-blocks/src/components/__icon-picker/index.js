import classnames from 'classnames/dedupe';
import { List, CellMeasurer, CellMeasurerCache, AutoSizer } from 'react-virtualized';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Dropdown, TextControl, Tooltip, Basecontrol, Textareacontrol, G, Path, SVG } from '@wordpress/components';

import dashCaseToTitle from '../../utils/dash-case-to-title';
import { maybeEncode, maybeDecode } from '../../utils/encode-decode';

const { ARTSOLUT } = window;

class Icon extends Component {
	render() {
		const { iconData, onClick, active } = this.props;

		return(
			<IcinPicker.Preview
				className={classnames('art-icon-picker-button', 
				active ? 'art-component-icon-picker-button-active' : '')}
				onClick={onClick}
				data={iconData}
			/>
		)
	}
}

class IconPickerDropdown extends Component{
	constructor(props){
		super(props);

		this.cellMCache = new CellMeasurerCache({
			defaultHeight: 65,
			fixedWidth: true,
		});
	
		this.state = {
			search: '',
			hiddenCategories: hiddenIconCategories,
			customizeIcon: false,
		};

		this.getDropdownContent = this.getDropdownContent.bind(this);
	}

	componentDidUpdate() {
		if (this.cellMCache) {
			this.cellMCache.clearAll();
		}
	}

	getDropDownContent(){
		const { onChange, value } = this.props;

		const rows = [
			{
				key: 'form',
				render: (
					<Fragment key="form">
						<TextControl
							label={__('Buscar icono') }
							value={maybeDecode(this.state.search)}
							onchange={(searchVal) => this.setState({ search: maybeEncode(searchVal) })}
						/>
					</Fragment>
				)
			}
		]
	}
}

export default class IconPicker extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		const { onChange } = this.props;
		onChange(maybeEncode(value));
	}

	render(){
		const { value, label } = this.props;

		return(
			<IconPicker.Dropdown
				label={label}
				className="art-component-icon-picker-wrapper"
				onchange={this.handleChange}
				value={maybeDecode(value)}
				renderToggle = {({ isOpen, onToggle }) => (
					<Tooltip text={__('Icon Picker', '@@text_domain')}>
						<div>
							<IconPicker.Preview
								className="art-component-icon-picker-button hover"
								aria-expanded={isOpen}
								onClick={onToggle}
								name={maybeDecode(value)}
								alwaysRender
							/>
						</div>
					</Tooltip>
				)}
			/>
		)
	}
}