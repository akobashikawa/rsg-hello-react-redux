import React from 'react';
import { connect } from 'react-redux';

import { hello } from './actions';

// App using connected props
const App = (props) => {
	props.hello();
	return (
		<div> {props.message} </div>
	);
};

function mapStateToProps(state) {
  return {
    message: state
  };
}

// App connected to redux
export default connect(mapStateToProps, { hello })(App);