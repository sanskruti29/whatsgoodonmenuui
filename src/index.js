import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import './components/Styles.css';
import { Navigation } from "./components/Navigation";

class MyApp extends React.Component {
  render() {
    return (
      <div className="container">
            <Header />
            <Navigation />
            <Home />
            <Footer />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
