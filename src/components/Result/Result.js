import React, {useEffect, useState, useContext } from 'react';
import {Link} from "react-router-dom";
import {useStateValue} from "../ContextApi/StateProvider";
import ThemeContext, {themes} from "../themes";


function Result() { 
       
    const [{theme}, setTheme] = useState({});
    const [ {basket},] = useStateValue();

    const theem = useContext(ThemeContext);

    console.log(themes)
    // useEffect = (theme) => {
    //     if (theme === themes.blue){
    //             setTheme(themes.green)
    //         }
    //         else if (theme === themes.red){
    //             setTheme(themes.blue)
    //         }
    //         else{
    //             setTheme(themes.red)
    //         }
    // }


    return (
        <ThemeContext.Provider value={themes.red}>
                <div className="result" style={theem} >
                <h3> Date: </h3> {basket?.date}
                
                    <h3>Message: </h3> {basket?.message}
                    
                    <button> 
                        <a href="https://github.com/EmmanuelN1/React-interview.git">
                                <h5>Github Url: </h5>
                        </a>
                    </button> 
                        
                        <Link to="/">
                            Previous Page
                        </Link>
                    

                
                </div>
        </ThemeContext.Provider>
        
    )
}

export default Result
