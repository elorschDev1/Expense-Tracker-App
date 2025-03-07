// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount);
  const income=amounts
  .filter(item=>item>0)
  .reduce((acc,item)=>(acc+item),0)
  .toFixed(2);

  const expense=(amounts.filter(amount=>amount<0).reduce((initialAmount,currentAmount)=>(initialAmount+currentAmount),0)*-1).toFixed(2);
  return (
    <div className="inc-exp-container d-flex flex-row p-5 m-2 bg-white">
        <div className="w-50">
        <h4>Income</h4>
        <p  className="money-plus alert  alert-success">Ksh{income}</p>
        </div>
        <div className="w-50"> 
            <h4>Expense</h4>
            <p className="money-minus alert alert-danger">Ksh{expense}</p>
        </div>
      
    </div>
  )
}

export default IncomeExpenses