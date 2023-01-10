import './ExpensesSpread.css';
import ExpenseReport from './ExpenseReport';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/expenseFilter';
import React, { useState } from 'react';

function ExpenseSpread(props) {
	const [year, setYear] = useState('');

	const expenseFilter = (yearSelected) => {
		setYear(yearSelected);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selectedYear={year} expenseFilter={expenseFilter} />
				{props.expenses
					.filter((expense) => expense.date.getFullYear().toString() === year)
					.map((filteredItems) => (
						<ExpenseReport
							key={filteredItems.id} //key is used to render unique datas, to avoid the warnings in chrome dev tools
							title={filteredItems.input}
							amount={filteredItems.price}
							date={filteredItems.date}
						/>
					))}
			</Card>
		</div>
	);
}

export default ExpenseSpread;
