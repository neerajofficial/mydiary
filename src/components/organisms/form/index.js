import React from 'react'
import styles from './style.module.css'

import Button from './../../atoms/button'
import DateBox from './../../molecules/dateBox'
import InputBox from './../../molecules/inputBox'
import TextareaBox from './../../molecules/textareaBox'

const Form = props => {
	const { formData, startDate, dateHandler, submitHandler, onChangeHandler } = props;
	
	return (
		<form 
			method="POST" 
			onSubmit={submitHandler} 
			className={styles.formBox}>
				<div className={styles.element}>
					<InputBox
						text="Title"
						name="title"
						value={formData.title.value}
						onChange={e => onChangeHandler(e)} />
				</div>
				<div className={styles.element}>
					<TextareaBox
						text="Body"
						name="body"
						value={formData.body.value}
						onChange={e => onChangeHandler(e)} />
				</div>
				<div className={styles.element}>
					<DateBox 
						text="Date"
						name="date"
						startDate={startDate}
						changeDate={dateHandler} />
				</div>
				<div className={styles.element__action}>
					<Button 
						onClick={submitHandler}
						type="submit"
						text="Create Note"
						theme="primary" />
				</div>
		</form>
	)
}

export default Form