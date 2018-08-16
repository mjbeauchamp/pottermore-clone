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
            user:{}
        }
    }
    
   
    componentDidMount(){
        axios.get('/api/products').then(products=>{
            this.setState({
                products: products.data
            })
        })
    }
    
        render(){
            let products = this.state.products.map(e=>{
                console.log(e)
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
                <h1>Store</h1>
                  <div className='store-products'>
                  {products}
                    </div>
                  <Link to='/cart'><button>CART</button></Link>
                </div>

            )

    }
}
export default Storefront