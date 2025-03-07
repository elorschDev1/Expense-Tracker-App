/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import Transaction from './Transaction';
const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);
  return (
      <>
      <h3>History</h3>
      <ul className="list-group">
      {transactions.map(transaction=>( <Transaction transaction={transaction} key={transaction.id}/>))}
       </ul>
    </>
  )
}
export default TransactionList