// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const GenerateReport = () => {
  const { transactions } = useContext(GlobalContext);

  const calculateTotals = () => {
    let income = 0;
    let expenses = 0;

    transactions.forEach(transaction => {
      if (transaction.amount > 0) income += transaction.amount;
      else expenses += transaction.amount;
    });

    return { income, expenses };
  };

  const generateCSVReport = () => {
    const { income, expenses } = calculateTotals();

    const header = ["Expense/Income", "Amount (Ksh.)", "Date"];
    const rows = transactions.map((transaction) => [
      transaction.text,
      `${Math.abs(transaction.amount)}`,
      transaction.transactionDate || "N/A",
    ]);

    const summary = [
      [],
      ["Total Income", income],
      ["Total Expenses", Math.abs(expenses)],
      []
    ];

    const csvContent = [
      header.join(","),
      ...rows.map((row) => row.join(",")),
      ...summary.map((row) => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "spending_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className="bg-dark text-white p-3 m-3" onClick={generateCSVReport}>
        Generate CSV Report
      </button>
    </div>
  );
};

export default GenerateReport;
