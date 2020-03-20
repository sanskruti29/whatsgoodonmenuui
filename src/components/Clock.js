import React from "react";
import './Styles.css';

function FormattedDate(props) {
  return <h2>Local time is {props.date.toLocaleTimeString()}.</h2>;
}

export class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick(),1000
    )
  }
  componentWillMount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="allText"> 
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}