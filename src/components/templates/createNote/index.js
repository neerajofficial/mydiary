import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../store/notes/actions';
import styles from './style.module.css'

import Form from './../../organisms/form'

const CreateNote = props => {
	const { postNote, fetchNote, note, updateNote } = props;
	const params = new URLSearchParams(props.location.search);
	const editMode = params.get('edit')
	const note_id = props.match.params.id;
	
	const [startDate, setStartDate] = useState(new Date());
	const [formData, setData] = useState({
		title: {
			value: '',

		},
		body: {
			value: ''
		}
	});

	const fetchForm = useCallback(note => {
	
		const newForm = {
			title: {
				value: editMode === 'true' ? note.title : ''
			},
			body: {
				value: editMode === 'true' ? note.body : ''
			}
		}
		setData(newForm);
		setStartDate(note.date)
	}, [editMode])

	useEffect(() => {
		if (editMode) {
			fetchNote(note_id);
		}
	}, [editMode, note_id, fetchNote])

	useEffect(() => {
		fetchForm(note)
	}, [note, fetchForm])
	

	const dateHandler = date => {
		setStartDate(date);
	}
	const onChangeHandler = e => {
		const value = e.target.value;
		const name = e.target.name;

		const newForm = { ...formData };

		newForm[name]= {
			...formData[name],
			value : value
		}

		setData(newForm);
	}

	const submitHandler = e => {
		e.preventDefault();
		const data = {
			id: Math.random(),
			title: formData.title.value,
			body: formData.body.value,
			date: startDate,
			created: new Date()
		};
		if (editMode) {
			updateNote(note_id, data);
			alert('Updated');
		} else {
			postNote(data);
			alert('created');
		}
	}

	return (
		<div className={styles.create}>
			<div className={styles.heading}>
				<h2>
					Create a new one
				</h2>
			</div>
			<div className={styles.form}>
				<Form
					formData={formData} 
					startDate={startDate} 
					dateHandler={dateHandler}
					onChangeHandler={onChangeHandler}
					submitHandler={submitHandler} />
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		postNote: data => dispatch(actions.createNote(data)),
		fetchNote: id => dispatch(actions.fetchNote(id)),
		updateNote: (note_id, data) => dispatch(actions.updateNote(note_id,data))
	}
}

const mapStateToProps = state => {
	return {
		note: state.note
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);