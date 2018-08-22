import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';



class Product extends Component{
    handleAdd=()=>{
        const {id} = this.props
        console.log(this.props)
            axios.post('/api/cart',{id}).then(()=>{
            
        })
        const toast = swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000
          });
          
          toast({
            type: 'success',
            title: 'Added to cart'
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
