import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'

class UserDashboard extends Component{
    constructor(){
        super();
        this.state = {
            currentUser: {},
            userID: null
        }
    }

    componentDidMount(){
        axios.get("/api/current_user")
            .then(response => {
                if(response.data[0].id){
                    console.log(response.data[0].id)
                    this.setState({
                        currentUser: response.data[0],
                        userID: response.data[0].id
                    })
                }
            })
            .catch();
    }

    render(){
        return (
            <div>
                <Navbar {...this.props} />
                I'm a Gryffindor!!!
            </div>
        )
    }
}

export default UserDashboard;