import React from "react"
import {API_ROOT} from './app-config'

export default class UserCount extends  React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
        };
    }
    // componentDidMount(){
    //     fetch('https://api.whatsgoodonmenu.com/count, {
    //         method: 'GET',  
    //         body: JSON.stringify(data),
    //     });
    // }
    componentDidMount() {
        fetch(`${API_ROOT}/unique`)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render(){
        return(
            <label>Unique visitors: {this.state.data}</label>
        );
    }
}
