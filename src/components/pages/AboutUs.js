import React from 'react'
import './Styles.css'
import Header from './Header'

export default class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <p className="jumbotron-fluid container Comment">An application where users can review each menu-item on the restaurant’s menu.</p>
            </div>
        );
    }
}