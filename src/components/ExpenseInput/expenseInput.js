import React from 'react';
import ExpenseForm from './expenseForm';
import './expenseInput.css';

function ExpenseInput(props) {
	const enteredExpenseHandler = (finalValue) => {
		// const newExpenseEntered = (prevState) => {
		// 	return [finalValue, ...prevState];
		// };
		props.onEnteredInputs(finalValue);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onEnteredExpense={enteredExpenseHandler} />
		</div>
	);
}

export default ExpenseInput;
