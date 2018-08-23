import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Gryffindor from './Houses/Gryffindor';
import Hufflepuff from './Houses/Hufflepuff';
import Ravenclaw from './Houses/Ravenclaw';
import Slytherin from './Houses/Slytherin'

class UserDashboard extends Component{
    constructor(){
        super();
        this.state = {
            currentUser: {},
            userID: null,
            wizards:[]
        }
    }

    componentDidMount(){
        axios.get("/api/current_user")
            .then(response => {
                if(response.data[0].id){
                    // console.log(response.data[0].id)
                    this.setState({
                        currentUser: response.data[0],
                        userID: response.data[0].id
                    })
                }
            })
            .catch();
            axios.get('/api/wizards')
            .then(response => {
                console.log('asdasd: ', response.data)
                if(response.data[0]) {
                    console.log('bla')
                }
            })
    }

    render(){
        if (this.state.currentUser)
        return (
            <div>
                <Navbar {...this.props} />
                {/* <Gryffindor/> */}
                {/* <Slytherin/> */}
                {/* <Ravenclaw/> */}
                {/* <Hufflepuff/> */}
                
            </div>
        )
    }
}

export default UserDashboard;