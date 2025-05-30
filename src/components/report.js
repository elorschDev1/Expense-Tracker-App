// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateReport = () => {
  const { transactions } = useContext(GlobalContext);
  const [reportGenerated, setReportGenerated] = useState(false);
  const calculateTotals = () => {
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
      if (transaction.amount > 0) income += transaction.amount;
      else expenses += transaction.amount;
    });

    return { income, expenses };
  };
  const generatePDFReport = () => {
    const { income, expenses } = calculateTotals();
    const doc = new jsPDF();

    // Title and Subtitle
    doc.setFontSize(18);
    doc.text("User Spending Report", 20, 20);
    doc.setFontSize(12);
    doc.text("Summary of your spending and income.", 20, 30);

    // Total income and expenses
    doc.text(`Total Income: Ksh.${income}`, 20, 50);
    doc.text(`Total Expenses: Ksh.${Math.abs(expenses)}`, 20, 60);

    // Adding the transactions table
    doc.autoTable({
      startY: 70,
      head: [["Expense/Income", "Amount", "Date"]],
      body: transactions.map((transaction) => [
        transaction.text,
        `Ksh.${Math.abs(transaction.amount)}`,
        transaction.transactionDate,
      ]),
    });

    // Save the PDF
    doc.save("spending_report.pdf");
    setReportGenerated(true);
  };
  

  return (
    <div>
      <button className='bg-dark text-white p-3 m-3' id='report' onClick={generatePDFReport}>Generate Report</button>
      
    </div>
    
  )
}

export default GenerateReport
