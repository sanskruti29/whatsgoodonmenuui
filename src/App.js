import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

//local imports
import NotFoundPage from "./components/pages/404"
import Home from "./components/pages/Home"
import AddRestaurantPage from "./components/pages/AddRestaurant"
import AboutUs from "./components/pages/AboutUs"
import Footer from "./components/pages/Footer/Footer.js"
import Header from "./components/pages/Header/Header.js"
import LoginForm from "./components/pages/Forms/AllForms/Login/LoginForm";
import SignUpForm from "./components/pages/Forms/AllForms/SignUp/SignUpForm"
import StarRating from "./components/pages/Rating/StarRating"
import Review from "./components/pages/Review/Review"
import './App.css'

class App extends Component{
  render(){
    return(
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/signup" element={<SignUpForm/>}></Route>
              <Route path="/login" element={<LoginForm/>}></Route>
              <Route path="/addrestaurant" element={<AddRestaurantPage/>}></Route>
              <Route path="/aboutus" element={<AboutUs/>}></Route>
              <Route path="/rating" element={<StarRating/>}></Route>
              <Route path="/review" element={<Review/>}></Route>
              <Route path="/404" element={<NotFoundPage/>}></Route>
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Router>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;