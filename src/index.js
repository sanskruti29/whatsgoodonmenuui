import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import './components/Header.css';

class MyApp extends React.Component {
  render() {
    return (
      <div className="container">
            <Header />
            <Home />
            <Footer />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
