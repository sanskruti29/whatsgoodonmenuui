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
            .then(data => this.setState({ data }))
            .catch(error => {
                console.error('Error fetching total visits:', error);
                this.setState({ data: 'N/A' });
            });
    }

    render(){
        return(
            <label>Total visits: {this.state.data}</label>
        );
    }
}
