// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import EditTransacionContext from './EditTransactionContext';
import PropTypes from 'prop-types';

const EditTransactionProvider = ({children}) => {
    let [userText,setUserText]=useState("");
    let [userAmount,setUserAmount]=useState(0);
    let [submitButtonClicked,setSubmitButtonClicked]=useState(false);
    
        
        

  return ( <EditTransacionContext.Provider value={{userText,setUserText,userAmount,setUserAmount,submitButtonClicked,setSubmitButtonClicked}}>{children}</EditTransacionContext.Provider> )
}

export default EditTransactionProvider
EditTransactionProvider.propTypes={
    children:PropTypes.node.isRequired
};
