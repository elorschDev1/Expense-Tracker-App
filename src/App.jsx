import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Chart from "./components/Chart";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider}  from "./context/GlobalState";
const App=()=>{ 
return ( 
      <GlobalProvider>
      <Header/>
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      <Chart/>    
      </div>
      </GlobalProvider>   
  )
}
export default App
