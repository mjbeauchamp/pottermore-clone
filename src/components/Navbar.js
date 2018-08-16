import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props)
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
            logout = <Link to="/logout">Logout</Link>
            dashboard = <Link to="/dashboard">Dashboard</Link>
            cart = <Link to="/cart">Cart</Link>
        } else if(!this.state.userID){
            auth = <Link to="/">Login</Link>
        }

        //Conditionally render links depending on what page you're on
        // switch(path){
        //     case "/sign_up":
        //         home = <div className="home-link">
        //                 <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
        //                 </div>
        //         break;
        //     case "/login":
        //         home = <div className="home-link">
        //                     <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
        //                 </div>
        //         break;
        //     case "/pick_unicorn":
        //         home = <div className="home-link">
        //                 <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
        //             </div>
        //         logout = <div className="logout-button">
        //             <button className="nav-logout" onClick={this.logout}>Logout</button>
        //         </div>
        //         break;
        //     case "/create_unicorn":
        //         home = <div className="home-link">
        //                 <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
        //             </div>
        //         logout = <div className="logout-button">
        //             <button className="nav-logout" onClick={this.logout}>Logout</button>
        //         </div>
        //         break;
        // }


        return (
            <div className="navbar">
                {home}
                {store}
                {dashboard}

                I'm a Hufflepuff!

                {quizhome}
                {cart}
                {auth}
                {logout}

                {/* <Link to="/signup">Sign Up</Link> */}

            </div>
        )
    }
}

export default Navbar;