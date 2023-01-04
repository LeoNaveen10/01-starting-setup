import React from 'react';
import ExpenseForm from './expenseForm';
import './expenseInput.css';

function ExpenseInput() {
	return (
		<div className='new-expense'>
			<ExpenseForm />
		</div>
	);
}

export default ExpenseInput;
