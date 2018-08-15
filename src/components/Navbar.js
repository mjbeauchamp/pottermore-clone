import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        //Links to be rendered conditionally
        let logout;
        let home = <Link to="/home">Home</Link>;
        let store = <Link to="/store">Store</Link>;
        let dashboard;
        let quizhome = <Link to="/quizhome">Quiz</Link>;
        let auth;
        let cart;
        //Pulling path from props for conditional routing
        let path = this.props.location.pathname;
        console.log(path)

        //Conditionally render links depending on what page you're on
        switch(path){
            case "/sign_up":
                home = <div className="home-link">
                        <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
                        </div>
                break;
            case "/login":
                home = <div className="home-link">
                            <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
                        </div>
                break;
            case "/pick_unicorn":
                home = <div className="home-link">
                        <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
                    </div>
                logout = <div className="logout-button">
                    <button className="nav-logout" onClick={this.logout}>Logout</button>
                </div>
                break;
            case "/create_unicorn":
                home = <div className="home-link">
                        <Link to="/"><i className="fas fa-home fa-lg"></i></Link>
                    </div>
                logout = <div className="logout-button">
                    <button className="nav-logout" onClick={this.logout}>Logout</button>
                </div>
                break;
        }


        return (
            <div className="navbar">
                <Link to="/dashboard">Dashboard</Link>
                {home}
                {store}
                {dashboard}

                I'm a Hufflepuff!

                {quizhome}
                {cart}
                {auth}
                {logout}
                
                <Link to="/">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}

export default Navbar;