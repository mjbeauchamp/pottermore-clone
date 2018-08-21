import React, {Component} from 'react';




class Item extends Component{

    
    render(){
        
        return(

            <div onClick = {()=>this.props.toggle({})} className='item-store'>
            
                <div className="item-header">
                    <h3>{this.props.wholeThing.product_name}</h3>
                </div>
                <div className="item-body">
                <img src={this.props.wholeThing.product_image} alt="product"/>
                    <h3>{this.props.wholeThing.product_description}</h3>
                    <hr/>
                    <h3>{this.props.wholeThing.product_price}</h3>
                </div>

                    
                </div>





        )
    }

}
export default Item;