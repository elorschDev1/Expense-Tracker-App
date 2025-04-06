import {useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);
    let currentDate=new Date();
     const [transactionDate,setTransactionDate]=useState(currentDate.toDateString());
    const {addTransaction}=useContext(GlobalContext);
    const {transactions}=useContext(GlobalContext);
    const handleSubmit=e=>{
      e.preventDefault();
      const newTransaction={
        id:crypto.randomUUID(),
        text,
        amount:+amount,
        transactionDate
      }
      if(text!==""&&amount!==""){
        addTransaction(newTransaction);
           }
      if(text===""||amount==="")alert("You cannot add a blank or unidentified transaction.");  
    }
  return (
    <>
    <h3>Add A Transaction:</h3>
    <form onSubmit={handleSubmit} noValidate>
    <div className="d-flex flex-column justify-content-center align-items-center">
        <label htmlFor="text" className="form-label text-center">Enter An Expense:<br></br> (use a negative sign for a payment made by you)<br></br>  (use a positive sign for money coming to you)</label>
        <input type="text" className="form-control-sm" value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="amount" className="form-label text-center">Enter The Amount Spent:</label>
        <input type="number" className="form-control-sm" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <div>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <label htmlFor="text" className="form-label">Date of Transaction</label>
      <input type="date" className="form-control-sm" value={transactionDate} onChange={(e)=>setTransactionDate(e.target.value)} />
    </div>
      <button className="btn btn-pimary text-white bg-dark p-3 m-3">Add Transaction</button>
      </div>
    </div>
  
 </form> 
    </>
  )
}
export default AddTransaction