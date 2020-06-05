import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//local imports
import CreateAccountPage from "./components/CreateAccount";
import NotFoundPage from "./components/404";
import Home from "./components/Home";
import AddRestaurantPage from "./components/AddRestaurant";
import LoginPage from "./components/Login";

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/createAccount" component={CreateAccountPage}></Route>
        <Route exact path="/addRestaurant" component={AddRestaurantPage}></Route>
        <Route exact path="/404" component={NotFoundPage}></Route>
        <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
export default App;