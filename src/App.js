import React from "react";
import './App.css';
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

  return (
    <Router>
        <Switch>
            <Route path="/result">
                <Result/>
            </Route>

            <Route path="/">
                <Input/>
            </Route>
            
        </Switch>

    </Router>
  );
}

export default App;
