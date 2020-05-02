import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Clock } from "./components/Clock";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { MyForm } from "./components/MyForm"
import './components/Styles.css';

/*import { Navigation } from "./components/Navigation";*/

class MyApp extends React.Component {
  render() {
    return (
      <div>
            <Header />
            <Clock />
            <Clock />
            <MyForm />
            <Home />
            <Footer /> 
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
