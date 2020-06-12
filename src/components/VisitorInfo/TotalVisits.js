import React from "react"
import {API_ROOT} from './app-config'

export default class UserCount extends  React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
        };
    }

    componentDidMount() {
        fetch(`${API_ROOT}/count`)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render(){
        return(
            <label>Total visits: {this.state.data}</label>
        );
    }
}
