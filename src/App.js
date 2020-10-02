import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './routes/Home';
import About from './routes/About';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
