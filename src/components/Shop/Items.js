import React, {Component} from 'react';
import axios from 'axios';



class Items extends Component{
    constructor(){
        super()
        this.state={
            cart:[],
            details:[],
            user:{}
        }


    }
    render(){
        return(

            <div className='productContainer card'>
                <div className="card-header">
                    <h3>Name:{this.props.name}</h3>
                </div>
                <div className="card-body">
                <img src={this.props.image} alt="product"/>
                    <h3>Price:{this.props.price}</h3>
                    <h3>Quantity:{this.props.quantity}</h3>
                    <h3>Item Total:${Number(this.props.price.replace(/[$]+/g, '')*this.props.quantity).toFixed(2)}</h3>
                </div>
                    <div className='buttons'>
                        <input type="number" value={this.props.quantity} onChange={(e)=> this.props.add(this.props.id, e.target.value )}/>
                        <button onClick={()=>this.props.deleteProduct(this.props.id)}>Delete Item</button>

                    
                </div>
            </div>




        )
    }

}
export default Items;