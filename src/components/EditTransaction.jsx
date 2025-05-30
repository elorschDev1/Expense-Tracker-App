// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect, useContext} from 'react';
import EditTransacionContext from '../context/EditTransactionContext';
import { GlobalContext } from '../context/GlobalState';
import '/src/index.css';
const EditTransaction = () => {
    // eslint-disable-next-line no-unused-vars
    let {userText,userAmount,setUserText,setUserAmount,submitButtonClicked,setSubmitButtonClicked}=useContext(EditTransacionContext);
    const {addTransaction}=useContext(GlobalContext);
    const {transactions}=useContext(GlobalContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitButtonClicked(true);
        const updatedTransaction={
          id:crypto.randomUUID(),
          text:userText, 
          amount:+userAmount,
        }
          if(userText==""&&userAmount=="")console.log("Values empty");
          else{
          console.log(`${userText} ${userAmount}`)
          console.log(updatedTransaction.id);
          addTransaction(updatedTransaction);
  
          }
         
    
         console.log(transactions);
    }
  return (
    <form onSubmit={handleSubmit} noValidate>
    <div className="d-flex flex-column justify-content-center align-items-center">
        <label htmlFor="text" className="form-label">Edit Expense Name: </label>
        <input type="text" className="form-control-sm" value={userText} onChange={(e)=>setUserText(e.target.value)} />
    </div>
    
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="amount" className="form-label text-center">Edit The Amount Spent:</label>
        <input type="number" className="form-control-sm" value={userAmount} onChange={(e)=>setUserAmount(e.target.value)} />
        <div>
      
      <button className="btn btn-pimary text-white bg-dark p-3 m-3">Update Transaction</button>
      </div>
    </div>
    </form>
  )
}

export default EditTransaction
