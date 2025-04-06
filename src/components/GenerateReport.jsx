import React,{useState} from 'react';

const GenerateReport = () => {
    let [buttonClicked,setButtonClicked]=useState(false);

  return (
    <div>
      <button className='bg-dark text-white p-3 m-3' id='report' onClick={()=>{
        setButtonClicked(true);
      }}>Generate Report</button>
    </div>
  )
}

export default GenerateReport
