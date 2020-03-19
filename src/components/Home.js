import React from "react";
import './Styles.css';
import { createPortal } from "react-dom";

function Avatar(props) {
    return (
      <img
        className="photoStyle"
        src={props.user.avatarUrl}
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
                <div>
                    {props.time.toLocaleTimeString()}
                </div>
            </div>
        </div>
    )
}

const comment = {
    date: new Date(),
    time : new Date(),
    text: 'Brunch at Pacific Heights Cafe',
    author: {
        name: 'Review By: Sanskruti',
        avatarUrl: 'http://old.whatsgoodonmenu.com/graphics/brunch.jpg'
    },
};

export class Home extends React.Component{
    render(){
        return(
            <Comment
                date = {comment.date}
                time = {comment.time}
                text = {comment.text}
                author = {comment.author}
            />
        );    
    }
}

setInterval(comment, 1000);