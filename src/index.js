import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//OLD:

// import React from "react";
// import ReactDOM from "react-dom";
// // import { Header } from "./components/Header";
// import { Clock } from "./components/Clock";
// import { Home } from "./components/Home";
// import { Footer } from "./components/Footer";
// import { MyForm } from "./components/MyForm"
// import './components/Styles.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import CreateAccount from "./components/CreateAccount";
// // import Login from "./components/Login";

// /*import { Navigation } from "./components/Navigation";*/

// class MyApp extends React.Component {
//   render() {  
//     return (
//       <Router>
//         <div> 
//             <Home />
//             <Clock />
//             <MyForm />
//             <Footer />
//         </div>
//       </Router>
//     );
//   }
// }
// ReactDOM.render(<MyApp />, document.getElementById('root'));