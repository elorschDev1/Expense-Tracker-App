// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BarChart,Bar,XAxis,YAxis,CartesianGrid} from 'recharts'
const BarChartExample = () => {
    const salesData=[
        {
            name:"Jan",
            revenue:4500,
            profit:2400
            
        },
        {
            name:"Feb",
            revenue:5500,
            profit:3400
            
        },
        {
            name:"Mar",
            revenue:5050,
            profit:1400
            
        },
        {
            name:"Apr",
            revenue:8500,
            profit:5400
            
        },
        {
            name:"May",
            revenue:2200,
            profit:600
            
        },
        {
            name:"Jun",
            revenue:4500,
            profit:2400
            
        },
        {
            name:"Jul",
            revenue:6500,
            profit:2400
            
        },
        {
            name:"Aug",
            revenue:1500,
            profit:300
            
        },
        {
            name:"Sep",
            revenue:800,
            profit:200
            
        },
        {
            name:"Oct",
            revenue:8500,
            profit:5400
            
        },
        {
            name:"Nov",
            revenue:6700,
            profit:8400
            
        },
        {
            name:"Dec",
            revenue:3500,
            profit:1300
            
        }

    ]
  return (
    <div>
        <BarChart width={500} height={300} data={salesData} margin={{
            right:30,
        }}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='name'/>
            <YAxis/>
            <Bar dataKey='revenue' fill='blue'/>
            <Bar dataKey='profit' fill='green'/>
        </BarChart>
      
    </div>
  )
}

export default BarChartExample
