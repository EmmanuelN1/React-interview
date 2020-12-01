import React, {useState, useEffect, } from "react";
import './App.css';
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import {BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import ThemeContext, {themes} from "./components/themes";
import {useStateValue} from "./components/ContextApi/StateProvider";



function App() {
  const [ {themeValue}] = useStateValue();
  const [theme, setTheme] = useState(themes.red);

    const tv = themeValue;

  const themeRed = () => {
      setTheme(themes.green)
  }

  const themeGreen = () => {
      setTheme(themes.blue)
  }

  const themeBlue = () => {
      setTheme(themes.red)
  }

  useEffect( (themeValue) => {
      if(tv?.themeValue === "red") {
          themeRed();
          
      }
       else if (tv?.themeValue==="green" ) {
          themeGreen();
      } 
       else {
          themeBlue();
       }
     
  } )


  return (
    <Router>
      <ThemeContext.Provider value={theme}>
          
          <Route path="/result">
              <Result/>
          </Route>
        
      </ThemeContext.Provider>
      <Switch>
          
            <Route path="/result">
                <ThemeContext.Provider/>
            </Route>

            <Route path="/">
                <Input/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
