import React, {useState, useContext}  from 'react';
import "./Input.css";
import {useHistory} from "react-router-dom";
import { useStateValue } from '../ContextApi/StateProvider';
import ThemeContext from '../themes';


function Input() {

    const [ {basket}, dispatch] = useStateValue();
    const [ date, setDate] = useState("");
    const [ message, setMessage] = useState("");
    const history = useHistory ()
    
    

    const toogleThemeRed = () => {
        dispatch({
            type:"ADD_THEME_RED",
              
        })
    }

    const toogleThemeGreen = () => {
        dispatch({
            type:"ADD_THEME_GREEN",
              
        })
    }


    const toogleThemeBlue = () => {
        dispatch({
            type:"ADD_THEME_BLUE",
              
        })
    }

   




    const onSubmit = (e) => {
        e.preventDefault();
        history.push("/result");

        //dispatch tthe item to basket
        dispatch({
            type:"ADD_TO_INFO",
            item: {
                date:date,
                message:message
            }
        })
    }

    
    return (
        <div className="input" >
            <div className="input__container">
                <h1>Review Form</h1>
                        <form>
                            <h5>Date</h5>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} /> 

                            <h5 className="message"> Message</h5>
                            <textarea spellCheck="true" rows="4" cols="30" onChange={ e => setMessage(e.target.value) } value={message} />

                            <div className ="themePane">
                                <div> <input type="radio" className="themeSelector" value="red" onClick={toogleThemeRed} /> Red</div>

                                <div> <input type="radio" className="themeSelector" value="green" onClick={toogleThemeGreen} /> Green </div>

                                <div> <input type="radio" className="themeSelector" value="blue" onClick={toogleThemeBlue} /> Blue </div>

                                
                                
                            </div>
                                
                            <button type="submit" onClick={onSubmit} className="input__submitButton" >Submit</button>
                        </form>
                    
            </div>
        </div>
    )  
}

export default Input
