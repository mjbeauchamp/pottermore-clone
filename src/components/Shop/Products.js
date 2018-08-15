import React, {Component} from 'react';
import axios from 'axios';



class Product extends Component{


    handleAdd=()=>{
        const {id} = this.props
            axios.post('/api/cart',{id}).then(()=>{
            
        })
    }
    render(){
        return(

            <div className='products-main'>
                <h3>Name:{this.props.name}</h3>
                <div className="product-display">
                    <img src={this.props.image} alt="product"/>
                    <h3>Price:{this.props.price}</h3>
                </div>
                    <button className='btn btn-primary' onClick={this.handleAdd}>Add to Cart</button>
            </div>
        )
    }

}
export default Product
