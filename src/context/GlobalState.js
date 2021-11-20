import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
	//whenever we use the reudcer action we need to dispatch it.
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//actions:
	const deleteTransaction = (id) => {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	};

	//actions:
	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
