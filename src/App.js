import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hello } from './actions';

// App using connected props
class App extends Component {
	componentWillMount() {
		this.props.hello();
	}
	
	render() {
		return (
			<div> {this.props.message} </div>
		);
	};
}

function mapStateToProps(state) {
  return {
    message: state
  };
}

// App connected to redux
export default connect(mapStateToProps, { hello })(App);