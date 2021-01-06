import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './../../../store/notes/actions';
import styles from './style.module.css'

import Button from './../../atoms/button'
import FilterModal from './../../organisms/filterModal'
import NoteCard from './../../organisms/noteCard'
import Text from './../../atoms/text'

const AllNotes = props => {
	const { getNotes, removeNote, notes } = props;
	
	const [allnotes, setNotes] = useState();

	const [order, setOrder] = useState('Asc');
	const [modal, setModal] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
  	const [endDate, setEndDate] = useState(new Date());

  	const modalHandler = () => setModal(!modal);
  	const changeEnd = date => setEndDate(date);
  	const changeStart = date => setStartDate(date);

  	const filterByDate = (start, end) => {
  		const notesCpy = notes.filter(note => (new Date(note.date) >= new Date(start)) && (new Date(note.date) <= new Date(end)));
		setNotes(notesCpy);
  	}

  	const searchHandler = () => {
  		setModal(false);
  		filterByDate(startDate, endDate);
  	}

	useEffect(() => {
		getNotes();
	}, [getNotes]);

	useEffect(() => {
		setNotes(notes);
	}, [notes]);

	let history = useHistory();

	const editHandler = id => {
		history.push(`/create/${id}?edit=true`);
	}

	const removeHandler = id => {
		removeNote(id);
	}

	const sortHandler = () => {
		if (order === 'Asc') {
			allnotes.sort((a, b) => (new Date(a.date) < new Date(b.date)) ? 1 : -1);
			setOrder('Desc')
		} else {
			allnotes.sort((a, b) => (new Date(a.date) > new Date(b.date)) ? 1 : -1);
			setOrder('Asc')
		}
		
		setNotes(allnotes);
	}

	return (
		<div className={styles.allNotes}>
			<div className={styles.tool}>
				<div className={styles.searchBox}>
					<Button 
						onClick={modalHandler}
						text="Filter"
						theme="secondary" />
					{
						modal
						? <FilterModal
							startDate={startDate}
							endDate={endDate}
							changeStart={changeStart}
							changeEnd={changeEnd}
							searchHandler={searchHandler}
							cancelHandler={modalHandler} />
						: null
					}
				</div>	
				<div className={styles.sort}>
					<Button 
						onClick={sortHandler}
						text={`Sorted ${order}`}
						theme="secondary" />
				</div>
			</div>
			<div className={styles.main}>
			{ 
				allnotes && allnotes.map(note => (
					<NoteCard 
						key={note.id} 
						note={note}
						editClick={editHandler}
						removeClick={removeHandler} />
				))
			}
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		getNotes: () => dispatch(actions.getNotes()),
		removeNote: id => dispatch(actions.removeNote(id))
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);