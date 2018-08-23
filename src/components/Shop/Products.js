import React, {Component} from 'react';
class Product extends Component{

    render(){
        return(

            <div className='products-main'>
                <div className="product-display">
                <div className="product-image">
                    <img onClick={()=>this.props.toggle(this.props.product)} src={this.props.image} alt="product"/>
                </div>
                    </div>
                <div className="product-footer">
                <h3>{this.props.name}</h3>
                    <h3 className = 'money'>{this.props.price}</h3>
                    <button className='' onClick={()=>this.props.handleAdd(this.props.id)}>Add to Cart</button>
                
                </div>

                </div>
        )
    }

}
export default Product
