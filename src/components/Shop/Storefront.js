import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Item from './Item';

class Storefront extends Component{
    constructor(){
        super()
        this.state={
            cart:[],
            products:[],
            currentUser:{},
            userId:null,
            selectedProduct:{}
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
    filterStore = (value) =>{
        axios.get('/api/filterProducts/').then(products=>{
            this.setState({
                products:products.data
            })
        })
    }
    toggleSelectedProduct=(product)=>{
        console.log(this.state)
        this.setState({
          selectedProduct: product
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
                    toggle={this.toggleSelectedProduct}
                    product={e}
                    />
            )
        }) 
            return(
                <div className='store-main'>
                    <Navbar{...this.props}/>
                    <div className='store-header'>
                    <h1>COME BUY SHTUFF!</h1>
                    <select name="filter" id="listFilter"
                    onChange={(e)=>this.filterStore(e.target.value)}>
                    <option value ='shirt'>Shirts</option>
                    <option value ='ties'>Ties</option>
                    <option value ='scarfs'>Scarfs</option>
                    <option value ='socks'>Socks</option>
                    <option value ='accessories'>Accessories</option>
                    <option value ='FunkoPop'>Funko Pop</option>
                    <option value ='Books'>Books</option>
                    <option value ='wands'>Wands</option>
                    </select>
                    </div>
                    <div className='store-products'>
                        {products}
                        {this.state.selectedProduct.id && 
                        <Item
                        wholeThing = {this.state.selectedProduct}
                        toggle={this.toggleSelectedProduct}/>
                    }
                    </div>
                        <Link to='/cart'><button>CART</button></Link>
                </div>
            )
        }
}
export default Storefront