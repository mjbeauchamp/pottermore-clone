import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import SignUp from './SignUp';
import video from './CastSpell/652244.mp4'

//import {connect} from 'react-redux'
//import {gatherUserId} from '../../ducks/reducer'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            toggle: false
        }
    }

    login =() => {
        let {username, password} = this.state;
        axios.post('/auth/login', {username: username, password: password})
            .then(response => {
                // this.props.gatherUserId(username);
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/home');
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

    // Toggle Login and Sign up

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle})
    }

    render(){
        return (
            <div className='login auth-container' onKeyDown={e => this.onEnter(e)}>
                <Navbar {...this.props}  />

                <div className='auth-background'>
                <video autoPlay muted loop width='100%' >
                    <source src={video} type='video/mp4' />
                </video></div>
                    <div className={ !this.state.toggle ? 'show' : ' show hide'}>
                        <h1 className="auth-title">LOGIN</h1>
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
                        <p className="signup-btn">Don't have account? <span className='auth-span'  onClick={this.handleToggle}> SIGN UP </span></p>
                    </div>



               
                <div className={this.state.toggle ? 'show-signup' : ' show-signup hide-signup'}>
                    <SignUp {...this.props} handleToggle={this.handleToggle}/>
                    
                </div>

            </div>
        )
    }
}

export default Login;