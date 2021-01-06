import React from 'react'
import DatePicker from "react-datepicker";
import styles from './style.module.css'

import Text from './../../atoms/text'

const DateBox = props => {
	const { text, name, changeDate, startDate, otherProps} = props;
	
	return (
		<div className={styles.dateBox}>
			<div className={styles.text}>
				<Text 
					text={`${text} :`}
					theme="normal" />
			</div>
			<div className={styles.input}>
				<DatePicker
					className={styles.dateInput} 
					selected={startDate} 
					showTimeSelect
				    timeFormat="hh:mm"
				    timeIntervals={15}
				    timeCaption="time"
				    dateFormat="MMMM d, yyyy h:mm aa"
					onChange={date => changeDate(date)} />
			</div>
		</div>
	)
}

export default DateBox