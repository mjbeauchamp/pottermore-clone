const bcrypt = require('bcrypt-nodejs');

module.exports = {
    all_usernames: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all_usernames()
            .then(usernames => {
                console.log(usernames)
                res.status(200).send(usernames)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send({errorMessage: "Oops! Something went wrong."})
            })
    },
    create_user: (req, res) => {
        const dbInstance = req.app.get('db');
        const {first_name, last_name, username, password} = req.body;

        //Encrypting password
        bcrypt.hash(password, null, null, function(err, hash){
            //All of this is what was working before I tried using bcrypt, except I swapped out "hash" for "password in the argument array"
            dbInstance.create_user([first_name, last_name, username, hash])
            .then(createdUser => {
                req.session.userid = createdUser[0].id
                console.log(req.session.userid)
                res.status(200).send(createdUser);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
            });
        })
    },
    getCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let cart = await db.get_Cart([+req.session.userid])
            return res.status(200).send(cart)
            }catch(err){res.sendStatus(500)
                console.log(err)
            }
        },
    addToCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let {id}=req.body
            console.log(1111111111,req.session.userid)
            console.log(111111111111, +req.session.userid, id)
            const  item= await db.check_Cart([+req.session.userid , id]);
            
                if(item.length == 0){
                    const newItem = await db.add_to_cart([id, +req.session.userid])
                    
                    return res.status(200).send(newItem);
                }else{
                    const updatedItem = await db.add_quantity([+req.session.userid, id])
                    
                    return res.status(200).send(updatedItem);
                }
        }catch(err){
            res.status(500).send(err)
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

}