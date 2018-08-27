const axios = require("axios");
module.exports={
    getProducts: ()=>{
        return axios.get('http://localhost:4000/api/products').then(res=>{
            return res.data
        }).catch(err=>{
            console.log('Something went wrong',err)
        });
    }
}
