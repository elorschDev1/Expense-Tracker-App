/* eslint-disable no-unused-vars */
import React,{ useContext ,useEffect}  from 'react'
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount);
  const total=amounts.reduce((initialAmount,currentAmount)=>(initialAmount+=currentAmount),0).toFixed(2);
  let totalBalance=localStorage.getItem("totalBalance");
  if(totalBalance)console.log("There exists a key called totalBalance.")
    else console.log("There is no key called totalBalance.");
    useEffect(()=>{
   localStorage.setItem("totalBalance",total);
  },[total]) 
  return (
    <>
        <h4>Your Balance:</h4>
        <h1>Ksh {total}</h1>
    </>
  )
}
export default Balance;