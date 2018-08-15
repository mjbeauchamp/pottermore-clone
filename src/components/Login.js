import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'

//import {connect} from 'react-redux'
//import {gatherUserId} from '../../ducks/reducer'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login =() => {
        let {username, password} = this.state;
        axios.post('/auth/login', {username: username, password: password})
            .then(response => {
                console.log("You logged in!")
                // this.props.gatherUserId(username);
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/pick_unicorn');
            })
            .catch(err => {
                alert("Username and password incorrect.")
                console.log(err)
            });
    }

    onEnter = (e) => {
        if(e.key==="Enter" && (this.state.username && this.state.password)){
            this.login()
        }
    }

    render(){
        return (
            <div onKeyDown={e => this.onEnter(e)}>
                <Navbar {...this.props}  />
                <div className="auth-container">
                    <h1 className="auth-title">Login</h1>
                    <input
                        className="auth-input"
                        type="text"
                        onChange={(e) => {this.setState({username: e.target.value})}} placeholder="Username" 
                        value={this.state.username}
                        autoFocus={true}/>

                    <input
                        className="auth-input"
                        type="password"
                        onChange={(e) => {this.setState({password: e.target.value})}} placeholder="Password" 
                        value={this.state.password}/>

                    <button className="auth-submit button" onClick={this.login}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Login;