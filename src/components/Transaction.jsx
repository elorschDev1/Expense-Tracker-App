// eslint-disable-next-line no-unused-vars
import React,{useContext,useState} from 'react';
import EditTransaction from './EditTransaction';
import PropTypes from "prop-types";
import { GlobalContext } from '../context/GlobalState';
import EditTransacionContext from '../context/EditTransactionContext';
import '/src/index.css';
const Transaction = ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext);
  const {submitButtonClicked}=useContext(EditTransacionContext);
  const {setSubmitButtonClicked}=useContext(EditTransacionContext);
  let {transactions}=useContext(GlobalContext);
  const [editVisible,setEditVisible]=useState(false);
  const sign=transaction.amount<0?'-':'+';
  const handleEditClick=()=>{
    console.log(transaction.id);
    setEditVisible(true);
  }
  if(editVisible===true&&submitButtonClicked===true){
    let updatedList=transactions.filter((transactionObj)=>transactionObj.id!==transaction.id);
    console.log(updatedList)
    deleteTransaction(transaction.id);
    setEditVisible(false);
    setSubmitButtonClicked(false);
  }
  if(editVisible===true){
    return(
      <li className={transaction.amount<0?'alert alert danger':'plus'}>
      {transaction.text}<p className='badge badge-primary bage-pill mr-3 text-primary'>{sign} Ksh.{Math.abs(transaction.amount)}</p><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
      <button className='bg-dark text-white edit-btn' onClick={handleEditClick}>Edit</button>
      <EditTransaction/>
    </li>
    )
  }
  return (
    <li className={transaction.amount<0?'alert alert danger':'plus'}>
    {transaction.text}<p className='badge badge-primary bage-pill mr-3 text-primary'>{sign} Ksh.{Math.abs(transaction.amount)}</p><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
    <button className='bg-dark text-white edit-btn' onClick={handleEditClick}>Edit</button>
    
  </li>
  )
}
export default Transaction;
Transaction.propTypes={
    transaction:PropTypes.object
};

