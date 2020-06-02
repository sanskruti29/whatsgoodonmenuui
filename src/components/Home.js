import React from "react";
import './Styles.css';
import smoothie from './images/smoothie.jpg';
import logo from './images/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


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
            <>
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="./images/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
</>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Whats Good on Menu</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Create Account">Create Account</Nav.Link>
      <Nav.Link href="#Login">Login</Nav.Link>
      <NavDropdown title="My settings " id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">My Reviews</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">My Favorite Restaurants</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Restaurants" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
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