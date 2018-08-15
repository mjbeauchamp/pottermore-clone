import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items';
import {Link} from 'react-router-dom';



class Cart extends Component{
    constructor(){
        super()
        this.state={
            cart:[],
            details:[],
            user:{}
        }


    }
    componentDidMount(){
        axios.get('/api/cart').then(items=>{
            console.log(items.data)
            this.setState({
                products:items.data
            })
        })
        axios.get('/api/details').then(cart =>{
            console.log(cart.data)
            this.setState({
                details:cart.data
            })
        })
    }

    render(){
        const total = [];
        this.state.details.map((e,i)=>{
           let cartTotal = (Number(e.product_price.replace(/[$]+/g, '')*e.quantity).toFixed(2));
           total.push(cartTotal);
           const sum = total.reduce((total,amount) => Number(total) + Number(amount));
           return(
               console.log(sum)
           );
        })
        
        let items =  this.state.details.map(e=>{
            return(
                <Items
                    id={e.product_id}
                    key={e.product_id}
                    quantity={e.quantity}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                    description={e.product_description}
                />
            )
        })
      

        return(
                <div className='cart-main'>
                <h1>Cart</h1>
                <div className='shop-items'>
                  {items}
                
                    <h1>Total:${total.reduce((total,amount) => Number(total) + Number(amount),0).toFixed(2)}</h1>
                </div>
                  
                  <Link to='/store'><button>STORE</button></Link>
                    
                </div>

            )

    }
}
export default Cart;