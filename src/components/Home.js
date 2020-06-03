import React from "react";
import './Styles.css';
import smoothie from './images/smoothie.jpg';
import logo from './images/logo.png';
import menu from './images/menu.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './Styles.css';

function Avatar(props) {
    return (
      <img
        className="photoStyle"
        src= {smoothie}
        alt={props.user.name}
      />
    );
  }

function UserInfo(props){
    return(
        <div className = "userInfo">
            <Avatar user={props.user} />
            <div className = "UserInfoName">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className = "CommentText">
                {props.text}
            </div>
            <div className="CommentDate">
                <div>
                    {props.date.toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}
/*
function Clock(props){
    return(
        <div>
            <h2>It is {props.time.toLocaleTimeString()}.</h2>
        </div>
    )
}*/

const comment = {
    date: new Date(),
    text: 'Brunch at Pacific Heights Cafe',
    author: {
        name: 'Review By: Sanskruti',
        avatarUrl: 'images/smoothie.jpg',
    },
};

export class Home extends React.Component{
    
    render(){
        return(
          <div>
            <Navbar className= "navBarColorStyle" variant="dark" expand="lg">
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={menu}
                  width="100"
                  height="80"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home" className="brandNameFontStyle">Whats Good on Menu</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link active="false" href="#CreateAccount">Create Account</Nav.Link>
                  <Nav.Link active="true" href="#Login">Login</Nav.Link>
                  <NavDropdown active="true" title="My settings " id="basic-nav-dropdown">
                    <NavDropdown.Item href="#Profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#MyReviews">My Reviews</NavDropdown.Item>
                    <NavDropdown.Item href="#MyFavRestaurant">My Favorite Restaurants</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search Restaurants" className="mr-sm-2" />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
              <Comment
                date = {comment.date}
                text = {comment.text}
                  author = {comment.author}
              />
          </div>    
        );    
    }
}