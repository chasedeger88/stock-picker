import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Portfolio from './Portfolio';
import Signup from './Signup';
import Login from './Login';
import Landing from './Landing';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return(
    <Router>
      <div className='App'>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul>
              <li><Link className="navbar-brand" to="/">Home</Link></li>
              <li><Link className="navbar-brand" to="/portfolio">Portfolio</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                  <li><Link to="signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                  <li><Link to="login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                </ul>
          </div>
        </nav>
        <Route exact path="/" component={Landing} render={(props) => <Landing />}/>
        <Route path="/portfolio" component={Portfolio} render={(props) => <Portfolio />}/>
        <Route path="/signup" render={(props) => <Signup  lift={this.liftTokenToState} />} />
        <Route path="/login" render={(props) => <Login  lift={this.liftTokenToState} />} />
      </div>
    </Router>
  );
 }
}

export default App;
