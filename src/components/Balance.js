import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transactions) => transactions.amount);
	console.log(amounts);
	const total = amounts
		.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
		.toFixed(2);

	return (
		<>
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</>
	);
};
