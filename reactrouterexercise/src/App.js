import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" render={() => <h1>Contact address</h1>} />
            <Route render = {() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
