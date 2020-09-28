import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from'./Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Todo from './Components/Todo/Todo';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
