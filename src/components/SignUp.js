import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "./Navbar"
//import {connect} from 'react-redux'
//import {gatherUserId} from '../../ducks/reducer'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
        }
    }

    newUser = () => {
        let {username, password, first_name, last_name} = this.state;
        axios.get('/auth/all_usernames')
            .then(usernames => {
                let nameArray = usernames.data.map(val => {
                    return val.username
                })
                //Check to see if username already exists in the database
                if(nameArray.indexOf(username) === -1){
                    axios.post('/auth/new_user', {first_name: first_name, last_name: last_name, username: username, password: password})
                        .then(response => {
                        //     //Create a single default unicorn that all users have access to
                        //     let newUserId = response.data[0].id;
                        //     axios.post('/api/new_unicorn', {name: "Bubbles", file_name: "rainbow", user_id: newUserId})
                        //         .then( response => {
                        // //Navigate back to the "Pick Your Unicorn" page
                        //             this.props.history.push('/pick_unicorn')
                        //         })
                        //         .catch(err => {console.log(err)})
                            //Set the username and password fields to be blank
                            this.setState({
                                first_name: '',
                                last_name: '',
                                username: '',
                                password: ''
                            })
                        })
                        .catch(err => {
                            console.log("Unable to create new user.",err)
                        });
                }  else{
                    alert("Please choose a different username. This username is already taken.")
                }
            })
            .catch(err => {
                console.log("Unable to access username info.", err)
            })
    }

    onEnter = (e) => {
        if(e.key==="Enter" && (this.state.username && this.state.password)){
            this.newUser()
        }
    }


    render(){
        return (
            <div  onKeyDown={e => this.onEnter(e)}>
                
                
                    <h1 className="auth-title auth-red">Sign Up</h1>
                    <input 
                        autoFocus={true} 
                        className="auth-input" 
                        type="text" 
                        onChange={(e) => {this.setState({first_name: e.target.value})}} 
                        placeholder="First Name" 
                        value={this.state.first_name}
                        maxLength="25"/>

                    <input 
                        autoFocus={true} 
                        className="auth-input" 
                        type="text" 
                        onChange={(e) => {this.setState({last_name: e.target.value})}} 
                        placeholder="Last Name" 
                        value={this.state.last_name}
                        maxLength="25"/>

                    <input 
                        autoFocus={true} 
                        className="auth-input" 
                        type="text" 
                        onChange={(e) => {this.setState({username: e.target.value})}} 
                        placeholder="Username" 
                        value={this.state.username}
                        maxLength="25"/>

                    <input 
                        className="auth-input" 
                        type="password" 
                        onChange={(e) => {this.setState({password: e.target.value})}} 
                        placeholder="Password" 
                        value={this.state.password}
                        maxLength="25"/>
                    <button className="auth-submit button" onClick={this.newUser}>Submit</button>
                    <p className="signup-btn">Already have account? <span className='auth-span'  onClick={this.props.handleToggle}>Login </span></p>
                    
                </div>
        )
    }
}

export default SignUp;