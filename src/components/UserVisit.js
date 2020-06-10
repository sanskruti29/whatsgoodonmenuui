import React from "react"
import {API_ROOT} from './app-config'

export default class UserCount extends  React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            device: "Your device",
            ip: "0.0.0.0"
        };
    }
    // componentDidMount(){
    //     fetch('https://api.whatsgoodonmenu.com/count, {
    //         method: 'GET',  
    //         body: JSON.stringify(data),
    //     });
    // }
    componentDidMount() {
        fetch(`${API_ROOT}/visit`)
            .then(response => response.json())
            .then(data => { 
                var device = data.device;
                var ip = data.ip;
                this.setState({ device })
                this.setState({ ip })
            });
    }

    render(){
        return(
            <div>
                <label>User visits: {this.state.device}</label><br/>
                <label>User ip: {this.state.ip}</label>
            </div>
        );
    }
}
