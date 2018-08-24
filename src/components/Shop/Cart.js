import React, { Component } from 'react';
import axios from 'axios';
import Items from './Items';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import swal from 'sweetalert2';


class Cart extends Component{
    constructor(){
        super()
        this.state={
            userCart:[],
            details:[],
            currentUser:{},
            userId:null,
            products:[]
        }


    }
    componentDidMount(){
        axios.get("/api/current_user")
        .then(response => {
            if(response.data[0].id){
                this.setState({
                    currentUser: response.data[0],
                    userId: response.data[0].id
                })
            }
        })
        .catch(err=>{
            swal("Fuck man, LOG IN DAMNIT!", err)
        });
        axios.get('/api/cart').then(items=>{
            this.setState({
                products:items.data
            })
        })
        this.getCartDetails();
    }
    
    getCartDetails=()=>{
                axios.get('/api/details').then(cart =>{
                    this.setState({
                        details:cart.data
                    })
                })

    }

    handleAddItem=(id, quantity)=>{
            axios.put(`/api/cart/${id}/${quantity}`).then((res)=>{
            this.setState({
                details:res.data
            })
        })
    }
    handleDeleteItem=()=>{
        const {id} = this.props
        console.log('DELETEITEM',id)
        axios.put('/api/delete',{id}).then(res=>{
            console.log(res.data)
                axios.get('/api/details').then(updatedCart=>{
                    this.setState({
                        details:updatedCart
                    })
                    
                })
            })
    }
    handleDeleteProduct=(id)=>{
        axios.delete(`/api/product/${+id}`,).then(res=>{
            console.log(res.data)
                this.setState({
                    products:res.data
                })
            })
    }

    render(){
      let total = this.state.products.reduce((acc,product)=>{
        let cost = (Number(product.product_price.replace(/[$]+/g, '')*product.quantity))
        return (acc + cost)
      }, 0);
        let tax = (total * 0.0685).toFixed(2)
        let items =  this.state.products.map(e=>{
            return(
                <Items
                    id={e.product_id}
                    key={e.product_id}
                    quantity={e.quantity}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                    description={e.product_description}
                    delete={this.handleDeleteItem}
                    add={this.handleAddItem}
                    deleteProduct={this.handleDeleteProduct}
                />
            )
        })
      
        
        return(
            <div className='cart-main'>
            <Navbar{...this.props}/>
                    <Link className='cs' to ='/store'>
                    Continue Shopping            
                    </Link>
                <div className='cart-items'>
                
                
                

                  {items}
                  <div className='cart-footer'>
                    <h4>Tax:${tax}</h4>
                    <h4>Cart Total:${(Number(total)+Number(tax)).toFixed(2)}</h4>
                    </div>
                </div>
                </div>
            )
    }
}
export default Cart;