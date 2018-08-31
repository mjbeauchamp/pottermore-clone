import React, {Component} from 'react';
import axios from "axios";
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: {},
            userID: null,
            toggle: false
        }
    }

    componentDidMount(){
        axios.get("/api/current_user")
            .then(response => {
                if(response.data[0].id){
                    this.setState({
                        currentUser: response.data[0],
                        userID: response.data[0].id
                    })
                }
            })
            .catch();
    }

    logout = () => {
        axios.get('/auth/logout')
            .then( res => {
                this.setState({
                    currentUser: {},
                    userID: null
                })
                this.props.history.push("/home")
            })
            .catch()
    }

    handleNavToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        //Links to be rendered conditionally
        let logout;
        let dashboard;
        let home = <NavLink className="navbar-link" to="/home">HOME</NavLink>;
        let store = <NavLink className="navbar-link" to="/store">STORE</NavLink>;
        let quizhome = <NavLink className="navbar-link" to="/quizhome">QUIZ</NavLink>;
        let auth;
        let cart;
        //Pulling path from props for conditional routing
        let path = this.props.location.pathname;

        if(this.state.userID){
            logout = <NavLink className="navbar-link" to='/' onClick={this.logout}>LOGOUT</NavLink>
            dashboard = <NavLink className="navbar-link" to="/dashboard">DASHBOARD</NavLink>
            cart = <NavLink className="navbar-link" to="/cart">CART</NavLink>
        } else if(!this.state.userID){
            auth = <NavLink className="navbar-link" to="/">LOGIN</NavLink>
        }

        return (
            <div className="navbar">
            <div className={this.state.toggle ? 'nav-left' : 'nav-hidden'}>
                {home}
                {store}
                {dashboard}
            </div>

            <div className='nav-mid'>
                <img id="snitch-left" src={require('./LeftWing.png')} alt=""/>
                <img id="snitch-right" src={require('./RightWing.png')} alt="" />
                <img id="snitch-body" src={require('./SnitchBody.png')} alt="" onClick={this.handleNavToggle} />
            </div>

            <div className={this.state.toggle ? 'nav-right' : 'nav-hidden-right'}>
                {quizhome}
                {cart}
                {auth}
                {logout}
            </div>

                {/* <Link to="/signup">Sign Up</Link> */}

            </div>
        )
    }
}

export default Navbar;