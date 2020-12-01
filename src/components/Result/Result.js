import React, {useContext } from 'react';
import {Link} from "react-router-dom";
import {useStateValue} from "../ContextApi/StateProvider";
import ThemeContext from "../themes";
import "./Result.css";

function Result() { 
       
    const [ {basket}] = useStateValue();

    const tim = useContext(ThemeContext);
     
    return (
                <div className="result" style={tim} >
                    <div className="result__container">
                        <h3> Date: {basket?.date} </h3> 
                    
                        <h3>Message: {basket?.message} </h3>
                    
                        <button> 
                            <a href="https://github.com/EmmanuelN1/React-interview.git">
                                    <h5>Github Url: </h5>
                            </a>
                        </button> 
                        
                        <Link to="/" className="previous">
                            Previous Page
                        </Link>
                    
                    </div>  
                </div>        
    )
}

export default Result
