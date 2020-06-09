import React from "react";
import './Styles.css';
import './Styles.css';
import Header from './Header';
import UserCount from './UserCount';

function UserInfo(props){
    return(
        <div className = "userInfo">
            <div className = "UserInfoName">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props){
    return(
        <div className="Comment" >
            <div className="CommentDate">
                <div>
                    <h6>It is {props.date.toLocaleDateString()} and {props.time.toLocaleTimeString()}</h6>
                </div>
            </div>
            <div className = "CommentText">
                {props.text}
            </div>
            <UserInfo user={props.author} />
            <br/>
            <UserCount/>
        </div>
    )
}

const comment = {
    date: new Date(),
    time: new Date(),
    text: "This site is currently under development. Thanks for visiting!",
    author: {
        name: '- Sanskruti Kolpe'
    },
};

export default class Home extends React.Component{  
    render(){
        return(
          <div>
            <Header/>
            <Comment
                date = {comment.date}
                author = {comment.author}
                text = {comment.text}
                time ={comment.time}
            />
          </div>    
        );    
    }
}