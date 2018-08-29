import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Gryffindor from './Houses/Gryffindor';
import Hufflepuff from './Houses/Hufflepuff';
import Ravenclaw from './Houses/Ravenclaw';
import Slytherin from './Houses/Slytherin'
import swal from 'sweetalert2'

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
                console.log('asdasd: ', response)
                if(response.data[0]) {
                    this.setState({ wizards: response.data})
                }
            })
    }

    render(){
        let gryf, slyt, raven, huffl
 
        if(this.state.wizards[0]){
            if (this.state.wizards[0].house_id === 2){
                gryf = <Gryffindor/>
            } else if (this.state.wizards[0].house_id === 1) {
                huffl = <Hufflepuff/>
            } else if (this.state.wizards[0].house_id === 3) {
                raven = <Ravenclaw/>
            } else if (this.state.wizards[0].house_id === 4) {
                slyt = <Slytherin/>
            } else {
                swal({
                    title: 'Welcome to Hogwarts! ',
                    text: 'Get started by taking the sorting quiz to join your own Hogwarts House!'
                })
                this.props.history.push('/quizhome')
            }
        }
        if (this.state.currentUser)
        return (
            <div>
                <Navbar {...this.props} />
                {gryf}
                {raven}
                {huffl}
                {slyt}   
            </div>
        )
    }
}

export default UserDashboard;