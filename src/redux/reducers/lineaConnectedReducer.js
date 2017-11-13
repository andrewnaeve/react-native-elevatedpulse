import { LINEA_CONNECTED } from '../actions/lineaConnected';
import initialState from '../initialState';

export const lineaConnected = (state = initialState.lineaConnected, action) => {
	const connected = action.payload;
	switch (action.type) {
		case LINEA_CONNECTED:
			return connected;
		default:
			return state;
	}
};
