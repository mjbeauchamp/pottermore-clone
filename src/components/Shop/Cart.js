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
                this.setState({
                    currentUser: response.data[0],
                    userId: response.data[0].id
                })
        }).catch(err=>{
            swal({
                title: "Looks like you're not logged in!",
                animation: false,
                customClass: 'animated tada'
              })
        })
        axios.get('/api/cart').then(items=>{
            if(items.data.length<=0){
                swal({
                    title: 'Looks like you have an empty cart!',
                    animation: false,
                    customClass: 'animated tada'
                  })
            }
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
                products:res.data
            })
        })
    }
    // handleDeleteItem=()=>{
    //     const {id} = this.props
    //     axios.put('/api/delete',{id}).then(res=>{
    //             axios.get('/api/details').then(updatedCart=>{
    //                 this.setState({
    //                     details:updatedCart
    //                 })
                    
    //             })
    //         }).catch(err=>{
    //             swal({
    //                 title: 'Custom animation with Animate.css',
    //                 animation: false,
    //                 customClass: 'animated tada'
    //               })
    //         })
    // }
    handleDeleteProduct=(id)=>{
        axios.delete(`/api/product/${+id}`,).then(res=>{
            if(res.data.length<=0){
                
            }
            this.setState({
                products:res.data
            })
            }).catch(err=>{
                swal(err)
            })
    }
    handleDeleteCart=()=>{
        if(this.state.products.length<=0){
            return swal({
                title: "Unable to buy nothing",
                animation: false,
                customClass: 'animated tada'
              })

        }
        axios.delete('/api/cart').then(res=>{
            this.setState({
                products:res.data
            })
            swal({
                position: 'center',
                type: 'success',
                title: 'Your order has been placed',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(err=>{
            console.log(err)
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
                    // delete={this.handleDeleteItem}
                    add={this.handleAddItem}
                    deleteProduct={this.handleDeleteProduct}
                />
            )
        })
      
        
        return(
            <div className='cart-main'>
            <Navbar{...this.props}/>
                    <Link className='cs' to ='/store'>
                    <p>Continue Shopping</p>         
                    </Link>
                <div className='cart-items'>
                  {items}
                    <div className='cart-checkout'>
                        <h4>Tax:${tax}</h4>
                        <hr/>
                        <h4>Cart Total:${(Number(total)+Number(tax)).toFixed(2)}</h4>
                        <button onClick={this.handleDeleteCart}>Checkout</button>
                    </div>
                </div>
                </div>
            )
    }
}
export default Cart;