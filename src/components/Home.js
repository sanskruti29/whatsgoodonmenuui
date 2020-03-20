import React from "react";
import './Styles.css';

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
        avatarUrl: 'http://old.whatsgoodonmenu.com/graphics/brunch.jpg'
    },
};

export class Home extends React.Component{
    render(){
        return(
            <div>
                <Comment
                    date = {comment.date}
                    text = {comment.text}
                    author = {comment.author}
                 />
            </div>    
        );    
    }
}