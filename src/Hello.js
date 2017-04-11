import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hello } from './actions';

// component using connected props
class Hello extends Component {
	constructor(props) {
		super(props);
		
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler() {
		this.props.hello();
	}
	
	render() {
		return (
			<div>
				<button onClick={this.onClickHandler}>Hello</button>
				<div> {this.props.message} </div>
			</div>
		);
	};
}

function mapStateToProps(state) {
  return {
    message: state
  };
}

// component connected to redux
export default connect(mapStateToProps, { hello })(Hello);