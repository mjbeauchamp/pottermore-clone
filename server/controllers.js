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
    }
}