import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//local imports
import NotFoundPage from "./components/pages/404"
import Home from "./components/pages/Home"
import AddRestaurantPage from "./components/pages/AddRestaurant"
import AboutUs from "./components/pages/AboutUs"
import Footer from "./components/pages/Footer/Footer.js"
import Header from "./components/pages/Header/Header.js"
import LoginForm from "./components/pages/Forms/AllForms/Login/LoginForm";
import SignUpForm from "./components/pages/Forms/AllForms/SignUp/SignUpForm"
import StarRating from "./components/pages/StarRating"

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
              <Route exact path="/signup" component={SignUpForm}></Route>
              <Route exact path="/login" component={LoginForm}></Route>
              <Route exact path="/addrestaurant" component={AddRestaurantPage}></Route>
              <Route exact path="/aboutus" component={AboutUs}></Route>
              <Route exact path="/rating" component={StarRating}></Route>
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