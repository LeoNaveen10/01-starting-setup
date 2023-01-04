import './ExpensesSpread.css';
import ExpenseReport from './ExpenseReport';
import Card from '../UI/Card';

function ExpenseSpread(props) {
	return (
		<Card className='expenses'>
			<ExpenseReport
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseReport
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseReport
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/>
			<ExpenseReport
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			/>
		</Card>
	);
}

export default ExpenseSpread;
