import React, {useState}  from 'react';
import "./Input.css";
import {useHistory} from "react-router-dom";
import { useStateValue } from '../ContextApi/StateProvider';





function Input() {

    const [ {basket, themeValue} , dispatch] = useStateValue();
    const [ date, setDate] = useState("");
    const [ message, setMessage] = useState("");
    const history = useHistory ();
  
    
    


    const toogleThemeRed = () => {
        dispatch({
            type:"ADD_THEME_RED",
            item:{
                themeValue: "red"
            }
        })
    }

    const toogleThemeGreen = () => {
        dispatch({
            type:"ADD_THEME_GREEN",
            item: {
                themeValue: "green"
            }
        })
    }


    const toogleThemeBlue = () => {
        dispatch({
            type:"ADD_THEME_BLUE",
            item: {
                themeValue: "blue"
            } 
        })
    }

   



    const onSubmit = (e) => {
        e.preventDefault();

        //dispatch tthe item to basket
        if (date && message)  {
        
        dispatch({
            type:"ADD_TO_INFO",
            item: {
                date:date,
                message:message
                 }
              })

            history.push("/result");
         }

         else{
             alert("Please Fill In The Input Correctly")
         }
         
     }

    
    return (
        <div className="input"  >
            <div className="input__container">
                <h1>Review Form</h1>
                        <form>
                            <h5>Date</h5>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} /> 

                            <h5 className="message"> Message</h5>
                            <textarea spellCheck="true" rows="4" cols="30" onChange={ e => setMessage(e.target.value) } value={message} />

                            <div className ="themePane">
                                <div> <input type="checkbox" className="themeSelector" onClick={toogleThemeRed} /> Green</div>

                                <div> <input type="checkbox" className="themeSelector" onClick={toogleThemeGreen} /> Blue </div>

                                <div> <input type="checkbox" className="themeSelector"  onClick={toogleThemeBlue} /> Red </div>              
                             </div>
                                
                            <button type="submit" onClick={onSubmit} className="input__submitButton" >Submit</button>
                        </form>
                    
            </div>
        </div>
    )  
}

export default Input
