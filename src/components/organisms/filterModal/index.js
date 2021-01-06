import React from 'react'
import DatePicker from "react-datepicker";
import styles from './style.module.css';

import Button from './../../atoms/button';
import Text from './../../atoms/text';

const FilterModal = props => {
	const { searchHandler, startDate, endDate, changeStart, changeEnd, cancelHandler } = props;

	return (
		<div className={styles.filterModal}>
			<div className={styles.element}>
				<div>
					<Text text="From: " theme="small" />
				</div>	
				<div>
					<DatePicker
						className={styles.datePicker}
				        selected={startDate}
				        onChange={date => changeStart(date)}
				        selectsStart
				        startDate={startDate}
				        endDate={endDate} />
			    </div>
			</div>
			<div className={styles.element}>
				<div>
					<Text text="To: " theme="small" />
				</div>
				<div>
				    <DatePicker
				    	className={styles.datePicker}
				    	selected={endDate}
				        onChange={date => changeEnd(date)}
				        selectsEnd
				        startDate={startDate}
				        endDate={endDate}
				        minDate={startDate} />
				</div>
			</div>
			<div className={styles.action}>
				<Button 
					onClick={searchHandler}
					text="Search" 
					theme="primary" />

				<Button 
					onClick={cancelHandler}
					text="Cancel" 
					theme="secondary" />
			</div>
		</div>
	)
}

export default FilterModal