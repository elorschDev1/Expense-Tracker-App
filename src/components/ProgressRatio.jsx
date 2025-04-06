import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement,LineElement, Title, Tooltip, Legend, ArcElement} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);
const ProgressRatio = () => {
    let userTarget=localStorage.getItem("userTarget");
    let currentBalance=localStorage.getItem("totalBalance");
    const progressDistribution={
        labels:["Targeted Amount","Actual Amount You Possess"],
        datasets:[
            {
                label:"A comparison between the amount you want to save versus what you currently have",
                data:[userTarget,currentBalance],
                backgroundColor:[
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)"
                ]
            }
        ]
       }
    
  return (
    <div className='p-3 m-3'>
      <Doughnut data={progressDistribution}/>
    </div>
  )
}

export default ProgressRatio
