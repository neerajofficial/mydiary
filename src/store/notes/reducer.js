import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
	notes: [
	],
	note: {},
	response: '',
}

const createNote = (state, action) => {
	return {
		...state,
		notes: [...state.notes, action.payload],
		response: 'CREATED'
	}
}

const updateNotes = (state, action) => {
	return {
		...state,
		notes: action.payload
	}
}

const getNote = (state, action) => {
	return {
		...state,
		note: action.payload
	}
}

const Notes = ( state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CREATE_NOTE:
			return createNote(state, action);
		case actionTypes.GET_NOTES: 
			return state;
		case actionTypes.UPDATED_NOTES:
			return updateNotes(state, action);
		case actionTypes.GET_NOTE:
			return getNote(state, action);
		default: 
			return state;
	}
}

export default Notes;