import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';

class Storefront extends Component{
    constructor(){
        super()
        this.state={
            cart:[],
            products:[],
            currentUser:{},
            userId:null
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

        
        axios.get('/api/products').then(products=>{
            this.setState({
                products: products.data
            })
        })
    }
    
        render(){
            let products = this.state.products.map(e=>{
            return(
                    <Products
                    key={e.id}
                    id={e.id}
                    cart ={this.state.cart}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                    description={e.product_description}
                    />
            )
        })            
            return(
                <div className='store-main'>
                    <Navbar{...this.props}/>
                    <h1>COME BUY SHTUFF!</h1>
                    <div className='store-products'>
                        {products}
                        <Link to='/cart'><button>CART</button></Link>
                    </div>
                </div>
            )
        }
}
export default Storefront