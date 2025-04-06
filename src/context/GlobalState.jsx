/* eslint-disable no-unused-vars */
import React,{createContext, useReducer,useEffect} from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
/*const initialState={
    transactions:[
      
    ]
}
*/
const getInitialState=()=>{
    const storedTransactions=localStorage.getItem("transactions");
    return storedTransactions?JSON.parse(storedTransactions):{transactions:[]};

}
 
//export const GlobalContext=createContext(initialState);
export const GlobalContext=createContext(getInitialState());
//Note:I have set the initialState as a default parameter of the createContext(),its the value I want the context to have when there is no matching Provider in the tree above the component reading the context. This is meant as a "last resort" fallback.
//GlobalProvider is a provider component, it will share the value across all child components
export const GlobalProvider=({children})=>{
    //useReducer() is used when there are multiple pieces of state that are closely related to each other
    //Its also used when the future value of state depends on the initial state
    const [state,dispatch]=useReducer(AppReducer,getInitialState());
    useEffect(()=>{
        localStorage.setItem("transactions",JSON.stringify(state));
    },[state])
    //My AppReducer function will determine how the state gets updated
    //The initialState object is my initial state
    //useReducer returns an array containing two variables:state and a dispatch function
    //state is my current state
    //the dispatch function will help me update the state and trigger a component rerender
    
    const deleteTransaction=(id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id  
        })    
    }
    const addTransaction=(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
       
    }

    
    return (
    <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>{children}</GlobalContext.Provider>
     )
}
GlobalProvider.propTypes={
    children:PropTypes.node.isRequired
};
