import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import NotFoundPage from "./components/pages/404"
import Home from "./components/pages/Home"
import RestaurantPage from "./components/pages/Restaurant"
import AddRestaurantPage from "./components/pages/AddRestaurant"
import AboutUs from "./components/pages/AboutUs"
import Footer from "./components/pages/Footer/Footer.js"
import Header from "./components/pages/Header/Header.js"
import LoginForm from "./components/pages/Forms/AllForms/Login/LoginForm"
import SignUpForm from "./components/pages/Forms/AllForms/SignUp/SignUpForm"

const App = () => (
  <Router>
    <div className="page-container">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header/>
      <main id="main" className="content-wrap">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants/:id" element={<RestaurantPage/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/addrestaurant" element={<AddRestaurantPage/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/rating" element={<Navigate to="/" replace />} />
          <Route path="/review" element={<Navigate to="/" replace />} />
          <Route path="/404" element={<NotFoundPage/>} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  </Router>
)

export default App;
