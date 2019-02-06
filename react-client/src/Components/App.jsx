import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
 import NavBar from './HeaderComponent/NavBar';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <NavBar/>
          <Route name="home" exact path="/" component={HomePage} />
        </Switch>>
      </Router>
    )
  }
}
export default App;
