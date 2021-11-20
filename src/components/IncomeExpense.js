import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const income = amounts
		.filter((transactions) => transactions > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const expense = amounts
		.filter((transactions) => transactions < 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	console.log(income);
	return (
		<div>
			<div className='inc-exp-container'>
				<div>
					<h4>Income</h4>
					<p className='money plus'>+${income}</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p className='money minus'>-${Math.abs(expense)}</p>
				</div>
			</div>
		</div>
	);
};
