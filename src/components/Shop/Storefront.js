import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {Link} from 'react-router-dom'


class Storefront extends Component{
   
    componentDidMount(){
        axios.get('/api/products').then(products=>{
            this.props.getProducts(products.data)
        })
    }
    
        render(){
            let products = this.props.products.map(e=>{
            return(
                    <Products
                    key={e.id}
                    id={e.id}
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