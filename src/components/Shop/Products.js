import React, {Component} from 'react';
import axios from 'axios';
import Item from './Item';



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
                    <img onClick={()=>this.props.toggle(this.props.product)} src={this.props.image} alt="product"/>
                    <h3>{this.props.price}</h3>
                    </div>

                    <button className='' onClick={this.handleAdd}>Add to Cart</button>
                </div>
        )
    }

}
export default Product
