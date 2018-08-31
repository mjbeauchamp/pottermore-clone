import React, {Component} from 'react';




class Item extends Component{

    
    render(){
        
        return(
        
        <div className='store-popup' onClick = {()=>this.props.toggle({})}>


        <div  className='item-store'>
            
                <div className="item-header">
                    <h3>{this.props.wholeThing.product_name}</h3>
                </div>
                <div className="item-body">
                    <img src={this.props.wholeThing.product_image} alt="product"/>
                    <div className="item-content">
                        <p>{this.props.wholeThing.product_description}</p>
                        <hr/>
                        <p>{this.props.wholeThing.product_price}</p>
                    </div>
                    
                </div>

                    
                </div>
        </div>





        )
    }

}
export default Item;