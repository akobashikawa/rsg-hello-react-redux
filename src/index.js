import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

// App using connected props
const AppBase = (props) => {
	props.hello();
	return (
		<div> {props.message} </div>
	);
};

// action creator
const hello = () => {
  const helloAction = {
    type: 'HELLO'
  };
  return helloAction;
};

function mapStateToProps(state) {
  return {
    message: state
  };
}

// AppBase connected to redux
const App = connect(mapStateToProps, { hello })(AppBase);

// reducer
const helloReducer = (state, action) => {
	switch (action.type) {
		case 'HELLO':
			return 'Hello React Redux!';
		default:
			return state;
	}
};

// reduce
const store = createStore(helloReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);