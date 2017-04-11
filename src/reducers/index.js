// reducer
export const helloReducer = (state, action) => {
	switch (action.type) {
		case 'HELLO':
			return 'Hello Click!';
		default:
			return state;
	}
};