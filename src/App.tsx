import * as React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";

function App() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </div>
    );
}

export default App;
