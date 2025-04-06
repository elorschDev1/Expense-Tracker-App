import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const ExpenditureTable = () => {
      const {transactions}=useContext(GlobalContext);
        let expenseTransactions=transactions.filter(transaction=>transaction.amount<0);
  return (
    <div className="p-3 m-3 d-flex flex-column justify-content-center align-items-center">
    <h4 className="text-center">Areas of Expenditure:</h4>
    <table className="table table-danger  p-3 m-3 w-100">
    <thead>
      <tr>
          <td>Expense</td>
          <td>Amount</td>
          <td>Date</td>
      </tr>
    </thead>
    <tbody>
      {expenseTransactions.map((transaction,index)=>(
          <tr key={index}>
              <td>{transaction.text}</td>
              <td> Ksh.{transaction.amount}</td>
              <td>{transaction.transactionDate}</td>
          </tr>
      ))}
    </tbody>
    </table>
  </div>
  )
}
export default ExpenditureTable
