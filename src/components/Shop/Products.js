import React, {Component} from 'react';
import axios from 'axios';



class Product extends Component{

    handleAdd=()=>{
        const {id} = this.props
        console.log(this.props)
            axios.post('/api/cart',{id}).then(()=>{
            
        })
    }
    render(){
        return(

            <div className='products-main'>
                <h3>{this.props.name}</h3>
                <div className="product-display">
                    <img src={this.props.image} alt="product"/>
                    <h3>{this.props.price}</h3>
                    {/* <h3>Description:{this.props.description}</h3> */}
                    <button className='' onClick={this.handleAdd}>Add to Cart</button>
                </div>
            </div>
        )
    }

}
export default Product
