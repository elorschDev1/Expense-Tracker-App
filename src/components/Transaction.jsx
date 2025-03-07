// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import PropTypes from "prop-types";
import { GlobalContext } from '../context/GlobalState';
import '/src/index.css';
const Transaction = ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext);
  const sign=transaction.amount<0?'-':'+';
  return (
    <li className={transaction.amount<0?'alert alert danger':'plus'}>
    {transaction.text}<p className='badge badge-primary bage-pill mr-3 text-primary'>{sign} Ksh.{Math.abs(transaction.amount)}</p><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
  </li>
  )
}
export default Transaction;
Transaction.propTypes={
    transaction:PropTypes.object
};

