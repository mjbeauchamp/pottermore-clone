import React, {Component} from 'react';




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

            <div className='cart-card'>
                <div className="card-header">
                    <img src={this.props.image} alt="product"/>
                </div>
                <div className="card-body">
                    <h1>{this.props.name}</h1>
                    <hr/>
                    <h3>{this.props.description}</h3>
                </div>
                
                    <div className='card-footer'>
                        <button onClick={()=>this.props.deleteProduct(this.props.id)}>X</button>
                    <h3>Quantity:{this.props.quantity}</h3>
                    <h3>{this.props.price}</h3>

                        <input type="number" value={this.props.quantity} onChange={(e)=> this.props.add(this.props.id, e.target.value )}/>
                    <hr/>
                    <h3>Item Total:${Number(this.props.price.replace(/[$]+/g, '')*this.props.quantity).toFixed(2)}</h3>
                </div>
            </div>




        )
    }

}
export default Items;