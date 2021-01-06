import * as actionTypes from './actionTypes'

const updatedNotes = data => {
	return {
		type: actionTypes.UPDATED_NOTES,
		payload: data
	}
}
const getNote = data => {
	return {
		type: actionTypes.GET_NOTE,
		payload: {...data}
	}
}

export const createNote = data => {
	return {
		type: actionTypes.CREATE_NOTE,
		payload: {...data}
	}
}

export const getNotes = () => {
	return {
		type: actionTypes.GET_NOTES
	}
}

export const removeNote = id => {
	return (dispatch, getState) => {
		const notes = getState().notes;
		const notesCpy = notes.filter(el => el.id !== id);
		dispatch(updatedNotes(notesCpy))
	}
}

export const fetchNote = id => {
	return (dispatch, getState) => {
		const notes = getState().notes;
		const note = notes.find(el => el.id.toString() === id.toString());
		dispatch(getNote(note));
	}
}

export const updateNote = (note_id, data) => {
	return (dispatch, getState) => {
		const notes = getState().notes;
		const notesCpy = [...notes];
		const index = notesCpy.findIndex(el => el.id.toString() === note_id.toString());
		let noteObj = notesCpy[index];
		noteObj = {...noteObj, ...data};
		notesCpy[index] = {...noteObj};

		dispatch(updatedNotes(notesCpy));
	}
}