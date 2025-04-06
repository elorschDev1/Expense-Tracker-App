import React,{useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
const IncomeTable = () => {
    const {transactions}=useContext(GlobalContext);
    let incomeTransactions=transactions.filter(transaction=>transaction.amount>0);
    console.log(transactions)
  return (
    <div className="p-3 m-3 d-flex flex-column justify-content-center align-items-center">
      <h4 className="text-center">Your Sources of Income:</h4>
      <table className="table table-success  p-2 m-2 w-100">
      <thead>
        <tr>
            <td>Income</td>
            <td>Amount</td>
            <td>Date</td>
        </tr>
      </thead>
      <tbody>
        {incomeTransactions.map((transaction,index)=>(
            <tr key={index}>
                <td>{transaction.text}</td>
                <td>Ksh.{transaction.amount}</td>
                <td>{transaction.transactionDate}</td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}
export default IncomeTable
