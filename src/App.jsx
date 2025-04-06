import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import TargetAmount from "./components/TargetAmount";
import AddTransaction from "./components/AddTransaction";
import Chart from "./components/Chart";
import ProgressRatio from "./components/ProgressRatio";
import IncomeTable from "./components/IncomeTable";
import ExpenditureTable from "./components/ExpenditureTable";
import GenerateReport from "./components/GenerateReport";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider}  from "./context/GlobalState";
import EditTransactionProvider from "./context/EditTransactionProvider";
const App=()=>{ 
return ( 
      <GlobalProvider>
        <EditTransactionProvider>
      <Header/>
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <Balance/>
      <IncomeExpenses/>
      <TargetAmount/>
      <TransactionList/>
      <AddTransaction/>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h5>This Bar Chart Indicates Your Income vs Expenses Performance</h5>
      <Chart/>  
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h5>This Doughnut Chart Indicates How Much You Have Been Able To Keep In Relation To Your Target</h5>
      <ProgressRatio/>
      </div>
      <IncomeTable/>
      <ExpenditureTable/>
      <GenerateReport/>
      </div>
      
    
      </EditTransactionProvider>

      </GlobalProvider>   
  )
}
export default App
