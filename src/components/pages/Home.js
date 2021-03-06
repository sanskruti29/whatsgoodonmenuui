import React from "react"
import './Styles.css'
import TotalVisits from '../VisitorInfo/TotalVisits'
import VisitingFrom from '../VisitorInfo/VisitingFrom'
import UniqueVisitors from '../VisitorInfo/UniqueVisitors'
import ImageCarousel from './ImageCarousel'
import Review from './Review/Review'

function UserName(props){
    return(
        <div>
            {props.user.name}
        </div>
    );
}

function LinkedIn(){
    return(
        <div>
            <a target="blank" href="https://www.linkedin.com/in/sanskruti-kolpe/"> 
                <img alt="linkedin" src="https://img.icons8.com/color/40/000000/linkedin.png"/>
                <label> LinkedIn </label>
            </a>
        </div>
    );
}

function GitHub(){
    return(
        <div>
            <a target="blank" href="https://github.com/sanskruti29"> 
                <img alt="git" src="https://img.icons8.com/windows/40/000000/github.png"/>
                <label> GitHub </label>
            </a>
        </div>
    );
}

function Twitter(){
    return(
        <div>
            <a target="blank" href="https://twitter.com/CultureCoder">
                <img alt= "twitter" src="https://img.icons8.com/fluent/40/000000/twitter.png"/>
                <label> Twitter </label> 
            </a>
        </div>
    );
}

function Comment(props){
    return(
        <div className="jumbotron container Comment"
            style={{marginTop: 10}}>
            <div>
                <h6>It is {props.date.toLocaleDateString()} and {props.time.toLocaleTimeString()}</h6>
            </div>
            <div>
                {props.text}
            </div>
            <UserName user={props.user}/>
            <br/>
            <LinkedIn/>
            <GitHub/>
            <Twitter/>
            
            <br/>
            <TotalVisits/>
            <UniqueVisitors/>
            <VisitingFrom/>
        </div>
    )
}

const comment = {
    date: new Date(),
    time: new Date(),
    text: "This site is currently under development.",
    user: {
        name: 'Developer: Sanskruti Kolpe',
    },
};

export default class Home extends React.Component{  
    render(){
        return(
          <div className="container">
            <ImageCarousel/>
            <Review/>
            <Comment
                date = {comment.date}
                user = {comment.user}
                text = {comment.text}
                time ={comment.time}
            />
          </div>    
        );    
    }
}