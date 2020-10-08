import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Home from './routes/Home'
import About from './routes/About'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
