import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

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
                    console.log(response.data[0].id)
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
        console.log(this.state.currentUser)
        console.log("User ID:" + this.state.userID)
        //Links to be rendered conditionally
        let logout;
        let dashboard;
        let home = <Link to="/home">Home</Link>;
        let store = <Link to="/store">Store</Link>;
        let quizhome = <Link to="/quizhome">Quiz</Link>;
        let auth;
        let cart;
        //Pulling path from props for conditional routing
        let path = this.props.location.pathname;

        if(this.state.userID){
            logout = <Link to='/' onClick={this.logout}>Logout</Link>
            dashboard = <Link to="/dashboard">Dashboard</Link>
            cart = <Link to="/cart">Cart</Link>
        } else if(!this.state.userID){
            auth = <Link to="/">Login</Link>
        }

        return (
            <div className="navbar">
            <div className={this.state.toggle ? 'nav-left' : 'nav-hidden'}>
                {home}
                {store}
                {dashboard}
            </div>

            <div className='nav-mid' onClick={this.handleNavToggle}>
                <img src={require('./snitch.png')} alt=""/>
                <h3>MENU</h3>
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