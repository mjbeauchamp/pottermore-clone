import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Item from './Item';
import swal from 'sweetalert2';

class Storefront extends Component{
    constructor(){
        super()
        this.state={
            filter:[],
            products:[],
            currentUser:{},
            userId:null,
            selectedProduct:{},
            cart:[],
            quantity:0
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
        
        
        axios.get('/api/products').then(products=>{
            this.setState({
                products: products.data,
                filter: products.data
            })
        })
        axios.get('/api/cart').then(items=>{
            var number = 0
            items.data.forEach(e=>{
                number += Number(e.quantity)
            })
            this.setState({
                quantity:number,
                cart:items.data
            })
            
        })
    }
    filterStore = (value) =>{
        let products = this.state.products
        console.log(value)
        if(value == 'all'){
            this.setState({
                filter: this.state.products
            })
        }else{
            let filteredItems = products.filter(items => items.product_type == value)
            console.log(filteredItems)
            this.setState({
                filter:filteredItems
            })
        }
    }
    toggleSelectedProduct=(product)=>{
        console.log(this.state)
        this.setState({
            selectedProduct: product
        })
    }
    quantity=()=>{
        var number = 0
        this.state.cart.forEach(e=>{
            number += Number(e.quantity)
            return number
        })
        this.setState({
            number:number
        })
    }
    handleAdd=(id)=>{
            axios.post('/api/cart',{id}).then(()=>{
            
                const toast1 = swal.mixin({
                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000
                  });
                  toast1({
                    type: 'success',
                    title: 'Item added to cart!'
                  })
                  this.setState({
                      quantity:this.state.quantity +=1
                  })
        }).catch(err=>{
            const toast2 = swal.mixin({
                toast: false,
                position: 'center',
                showConfirmButton: true,
              });
              
              toast2({
                type: 'error',
                title: `Oops! Looks like you're not logged in. Please log in to add items to your cart.`
              })
            console.log(err)
        })
    }

    render(){
        console.log(this.props)
            let products = this.state.filter.map(e=>{
            return(
                    <Products
                    key={e.id}
                    id={e.id}
                    cart ={this.state.cart}
                    name={e.product_name}
                    price={e.product_price}
                    image={e.product_image}
                    description={e.product_description}
                    toggle={this.toggleSelectedProduct}
                    product={e}
                    handleAdd={this.handleAdd}
                    />
            )
        }) 
            return(
                <div className='store-main'>
                    <Navbar{...this.props}/>
                    <div className='store-header'>
                    <h1>WELCOME</h1>
                    <p>to</p>
                    <h1 className='da'>DIAGON ALLEY</h1>
                    <div className="filter-cart">
                    <label htmlFor="listFilter">Filter Cart: </label>
                    <select name="filter" id="listFilter"
                    onChange={(e)=>this.filterStore(e.target.value)}>
                    <option value = 'all'>All</option>
                    <option value ='shirt'>Shirts</option>
                    <option value ='tie'>Ties</option>
                    <option value ='scarf'>Scarfs</option>
                    <option value ='socks'>Socks</option>
                    <option value ='accessories'>Accessories</option>
                    <option value ='funko pop'>Funko Pop</option>
                    <option value ='book'>Books</option>
                    <option value ='wand'>Wands</option>
                    </select>
                    <div className="cart-quantity">
                        <Link to='/cart'>
                        <i className="fas fa-shopping-cart fa-3x"><p>{this.state.quantity}</p></i>

                        </Link>
                    </div>
                    </div>

                    </div>
                    <div className='store-products'>
                        {products}
                        {this.state.selectedProduct.id &&
                        <Item
                        wholeThing = {this.state.selectedProduct}
                        toggle={this.toggleSelectedProduct}/>
                    }
                    </div>
                </div>
            )
        }
}
export default Storefront