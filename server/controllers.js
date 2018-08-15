//const bcrypt = require('bcrypt-nodejs');

module.exports = {
    create_user: (req, res) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        //Encrypting password
        // bcrypt.hash(password, null, null, function(err, hash){
        //     //All of this is what was working before I tried using bcrypt, except I swapped out "hash" for "password in the argument array"
        //     dbInstance.create_user([username, hash])
        //     .then(createdUser => {
        //         req.session.userid = createdUser[0].id
        //         console.log(req.session.userid)
        //         res.status(200).send(createdUser);
        //     })
        //     .catch(err => {
        //         res.status(500).send({errorMessage: "Oops! Something went wrong"});
        //         console.log(err)
        //     });
        // })
    }
}