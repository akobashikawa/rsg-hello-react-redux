import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrement } from './actions';
import { increment } from './actions';
import { reset } from './actions';

class Counter extends Component {

	render() {
		return (
			<div>
				<div> {this.props.number} </div>
				<button onClick={() => this.props.decrement()}>-</button>
				<button onClick={() => this.props.reset()}>Reset</button>
				<button onClick={() => this.props.increment()}>+</button>
			</div>
		);
	};
	
}

function mapStateToProps(state) {
  return {
    number: state
  };
}

export default connect(mapStateToProps, { increment, decrement, reset })(Counter);