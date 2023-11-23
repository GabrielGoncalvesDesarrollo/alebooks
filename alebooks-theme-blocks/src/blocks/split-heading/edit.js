import classnames from 'classnames/dedupe';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import './styles/editor.scss';

class BlockEdit extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { attributes, setAttributes } = this.props;
		return(
			<Fragment>
			</Fragment>
		)
	}
}
export default BlockEdit;