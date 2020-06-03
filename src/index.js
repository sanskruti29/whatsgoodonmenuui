import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Clock } from "./components/Clock";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { MyForm } from "./components/MyForm"
import './components/Styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

/*import { Navigation } from "./components/Navigation";*/

class MyApp extends React.Component {
  render() {  
    return (
      <Router>
        <div>
            <Home />
            <Clock />
            <MyForm />
            <Footer />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
/* <Route path = "/" component={Home}></Route>
<Route path = "/CreateAccount" component={CreateAccount}></Route>
            <Route path = "/login" component={Login}></Route>
          */