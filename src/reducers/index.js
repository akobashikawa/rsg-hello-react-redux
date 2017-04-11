// reducer
export const helloReducer = (state, action) => {
	switch (action.type) {
		case 'HELLO':
			return 'Hello React Redux One More Time!';
		default:
			return state;
	}
};