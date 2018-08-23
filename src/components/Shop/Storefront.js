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
            filter:[],
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
                products: products.data,
                filter: products.data
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
    
    
        render(){
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
                    />
            )
        }) 
            return(
                <div className='store-main'>
                    <Navbar{...this.props}/>
                    <div className='store-header'>
                    <h1>Welcome to Diagon Alley</h1>
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
                    </div>
                        <Link to='/cart'><button>Go to my Trunk</button></Link>
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