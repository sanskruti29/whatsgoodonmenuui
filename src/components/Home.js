/* eslint-disable jsx-a11y/alt-text */
import React from "react";
/*
export class Home extends React.Component{
    render(){
        return(
            <div>
                <p>This is my home component</p>
            </div>
        );
    }
} */
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
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className = "CommentText">
                {props.text}
            </div>
            <div className="CommentDate">
                {props.date.toLocaleDateString()}
            </div>
        </div>
    )
}

const comment = {
    date: new Date(),
    text: 'I am learning React',
    author: {
        name: 'Author: Sanskruti!'
    },
};

export class Home extends React.Component{
    render(){
        return(
            <Comment
                date = {comment.date}
                text = {comment.text}
                author = {comment.author}
            />
        );    
    }
}