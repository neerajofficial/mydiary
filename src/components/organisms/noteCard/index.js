import React from 'react'

import styles from './style.module.css'

import Button from './../../atoms/button'
import Text from './../../atoms/text'

const NoteCard = props => {
	const { note, editClick, removeClick } = props;
	return (
		<div className={styles.noteCard}>
			<div className={styles.element}>
				<Text
					text={note.title}
					theme="normal" />
			</div>
			<div className={styles.element}>
				<Text
					text={note.body}
					theme="small" />
			</div>
			<div className={styles.element__dates}>
				<div>
					<Text
						text="Date :"
						theme="small" />
				</div>
				<div>
					<Text
						text={`${note.date.toLocaleTimeString()},`}
						theme="small" />
				</div>
				<div>
					<Text
						text={note.date.toDateString()}
						theme="small" />
				</div>
			</div>
			<div className={styles.element__dates}>
				<div>
					<Text
						text="Created :"
						theme="small" />
				</div>
				<div>
					<Text
						text={`${note.created.toLocaleTimeString()},`}
						theme="small" />
				</div>
				<div>
					<Text
						text={note.created.toDateString()}
						theme="small" />
				</div>
			</div>
			<div className={styles.element__action}>
				<div>
					<Button 
						text="Edit" 
						theme="secondary"
						onClick={() => editClick(note.id)} />
				</div>
				<div>
					<Button 
						text="Remove"
						theme="secondary"
						onClick={() => removeClick(note.id)} />
				</div>
			</div>
		</div>
	)
}

export default NoteCard