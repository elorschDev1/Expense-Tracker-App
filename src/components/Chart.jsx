// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react'
import {BarChart,Bar,XAxis,YAxis,Cell,Tooltip} from 'recharts';
import { GlobalContext } from '../context/GlobalState';
const Chart = () => {
    const {transactions}=useContext(GlobalContext);
   const userTransactions=[...transactions];
   console.log(userTransactions);
   
  
    
  return (
    <div>
      {/*The BarChart component is my main chart container*/}
   <BarChart width={600} height={400} data={transactions} margin={{ 
            right:30,
            top:45
        }}>
                      <XAxis dataKey='text'/>{/*Represents the horizontal columns*/}
                      <YAxis/>{/*Represents the vertical columns*/}
                      <Tooltip/>{/*Shows detailed information when hovering over the bar*/}
                      {/*The Bar comonent represents the bars/columns in the chart */}
                      <Bar dataKey='amount'>
                        {transactions.map((transaction,index)=>(
                          <Cell key={index} fill={transaction.amount<0?'#f8d7da':'#d4edda'}/>
                        ))}
                      </Bar>
        </BarChart>
    </div>
  )
}
export default Chart
