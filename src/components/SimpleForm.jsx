// eslint-disable-next-line no-unused-vars
import React,{useReducer} from 'react';
const reducer=(state,action)=>{
    return {...state,[action.field]:action.value}
}
const SimpleForm = () => {
    const [state,dispatch]=useReducer(reducer,{name:"",email:""})
  return (
    <div>
      <input type="text" name="name" id="name" value={state.name} onChange={(e)=>dispatch({field:"name",value:e.target.value})} />
      <input type="email" name="email" id="email" value={state.email} onChange={(e)=>dispatch({field:"email",value:e.target.value})} />
    </div>
  )
}
export default SimpleForm
