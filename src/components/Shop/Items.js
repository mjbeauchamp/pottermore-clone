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
                    <h3>Quantity:</h3><input type="number" value={this.props.quantity} onChange={(e)=> this.props.add(this.props.id, e.target.value )}/>
                    {/* <h3>Quantity:</h3><select name="filter" id="listFilter"
                    onChange={(e)=>this.props.add(e.target.value)}>
                    <option value ='{this.props.quantity}'>{this.props.quantity}</option>
                    <option value = '1'>1</option>
                    <option value ='2'>2</option>
                    <option value ='3'>3</option>
                    <option value ='4'>4</option>
                    <option value ='5'>5</option>
                    <option value ='6'>6</option>
                    <option value ='7 pop'>7</option>
                    <option value ='8'>8</option>
                    <option value ='9'>9</option>
                    </select> */}
                    <h3>{this.props.price}ea.</h3>

                        
                    <hr/>
                    <h3>Item Total:${Number(this.props.price.replace(/[$]+/g, '')*this.props.quantity).toFixed(2)}</h3>
                </div>
            </div>




        )
    }

}
export default Items;