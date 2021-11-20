import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = props.transaction.amount < 0 ? "-" : "+";
	return (
		<li className={sign == "+" ? "plus" : "minus"}>
			{props.transaction.text}{" "}
			<span>
				{sign}${Math.abs(props.transaction.amount)}
			</span>
			<button
				onClick={() => deleteTransaction(props.transaction.id)}
				className='delete-btn'>
				x
			</button>
		</li>
	);
};

export default Transaction;
