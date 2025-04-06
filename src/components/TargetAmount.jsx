// eslint-disable-next-line no-unused-vars
import React,{useState,useRef} from 'react';
const TargetAmount = () => {
    let [targetAmount,setTargetAmount]=useState(0);
    let [targetAmountError,setTargetAmountError]=useState("");
    let userTarget=localStorage.getItem("userTarget");
    let submitBtnRef=useRef()  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userTarget)console.log("There exists a key named user target.");
        else console.log("There is no key named user target");
        if(targetAmount=="")setTargetAmountError("Set an amount you want to save by a certain time period.");
        if(targetAmount!==""&&!userTarget) userTarget=localStorage.setItem("userTarget",targetAmount);
        if(targetAmount!==""&&userTarget){
          let amountConfirmation=confirm("You already have an amount you plan to save, would you like to change it?");
          if(amountConfirmation){
            userTarget=localStorage.setItem("userTarget",targetAmount);
            setTimeout(()=>alert(`Great, you currently set your target to Ksh.${targetAmount}, reload this page to see the changes in the target value.`),1000);
          }
        }
    }
    const handleAmountChange=(e)=>{
      setTargetAmount(e.target.value);
      if(targetAmountError!=="")setTargetAmountError("");
    }
  return (
    <>
    <div>
      <h4>Specify How much You Aim At Saving:</h4>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="userInput" className="form-label">I wish to save amount:</label>
            <input type="number" className="form-control-sm" value={targetAmount} onChange={handleAmountChange} />
            <p className=' text-danger'>{targetAmountError}</p>
            <button type="submit" className='bg-primary text-white p-3 m-3' ref={submitBtnRef}>Set My Target</button>
        </div>
      </form>
    </div>
    <div className='d-flex flex-column justify-content-center align-items-center'>
     <p className="text-success">My  Current Target: Ksh {userTarget}</p>
    </div>
    </>
  )
}
export default TargetAmount
