

module.exports = {

    getCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let cart = await db.get_cart([+req.session.userid])
            return res.status(200).send(cart)
            }catch(err){res.sendStatus(500)
                console.log(err)
            }
        },
    getProducts: async (req, res) => {
        try{
            const db = req.app.get('db')
            let products = await db.get_store()
            return res.status(200).send(products)
            
        }catch(err){
            console.log(err)
        }
    },
    cartDetails: async(req,res)=>{
        try{
            const db=req.app.get('db')
            let details = await db.cart_details()
            console.log(details)
            return res.status(200).send(details)
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    deleteProduct: async(req,res)=>{
        try{
            const db= req.app.get('db')
            let newCart = await db.delete_product(+req.session.userid,+req.params.id)
            return res.status(200).send(newCart)
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    deleteItem: async (req,res)=>{
        try{
            let {id} = req.body
            const db = req.app.get('db')
                 let item = await db.delete_item([+req.session.userid, id])
                 if(item[0].quantity<=0){
                    let checkedItem = await db.delete_product([+req.session.userid, id])
                    return res.status(200).send(checkedItem)
                 }else{
                     return res.status(200).send(item)
                 }
                }catch(err){
                    res.status(500).send(err)
                        console.log(err)
                    }
    },
    addToCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let {id}=req.body
            
            const  item= await db.check_cart([+req.session.userid , id]);
                if(item.length == 0){
                    const newItem = await db.add_to_cart([+req.session.userid , id])
                    
                    return res.status(200).send(newItem);
                }else{
                    const updatedItem = await db.add_from_store([+req.session.userid, id])
                    
                    return res.status(200).send(updatedItem);
                }
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    update: async (req,res) =>{
        try{
            const db = req.app.get('db')
            if(+req.params.quantity<=0){
                const nothing = await db.delete_product([+req.session.userid, +req.params.id])
                return res.status(200).send(nothing)
            }else{
                const newItem = await db.update([+req.params.id, +req.params.quantity,+req.session.userid])
                return res.status(200).send(newItem) 
            }
        }catch(err){
            res.status(500).send(err)
            console.log(err)
        }
    }
}