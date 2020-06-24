import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//local imports
import CreateAccountPage from "./components/pages/CreateAccount"
import NotFoundPage from "./components/pages/404"
import Home from "./components/pages/Home"
import AddRestaurantPage from "./components/pages/AddRestaurant"
import LoginPage from "./components/pages/Login"
import AboutUs from "./components/pages/AboutUs"
import Footer from "./components/pages/Footer/Footer.js"
import Header from "./components/pages/Header/Header.js"
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={LoginPage}></Route>
              <Route exact path="/createAccount" component={CreateAccountPage}></Route>
              <Route exact path="/addRestaurant" component={AddRestaurantPage}></Route>
              <Route exact path="/aboutUs" component={AboutUs}></Route>
              <Route exact path="/404" component={NotFoundPage}></Route>
              <Redirect to="/404" />
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;