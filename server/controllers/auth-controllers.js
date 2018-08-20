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
                console.log(req.session.user.id)
                res.status(200).send(createdUser);
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
            });
        })
    },

    login: (req, res) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;
        //I need to pull this "hash" argument from the database using the username
        dbInstance.get_password([username])
            .then( hash => {
                let myHash = hash[0].password
                console.log(myHash)
                bcrypt.compare(password, myHash, function(err, response){
                    if(response){
                        dbInstance.get_user([username, myHash])
                            .then(user => {
                                console.log("User data:" + user[0].id)
                                req.session.userid = user[0].id
                                console.log(req.session.userid)
                                res.status(200).send(user);
                            })
                            .catch(err => {
                                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                                console.log(err)
                        });
                    } else {
                        console.log("The password thing didn't work")
                        res.status(500).send({errorMessage: "Oops! Something went wrong"});
                    }
                })
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong"});
                console.log(err)
        });
    },

    logout: (req, res, next) => {
        req.session.destroy();
        console.log(req.session)
        console.log('You successfully logged out!')
        res.status(200).send(req.session);
    },

    current_user: (req, res) => {
        const dbInstance = req.app.get('db');
        if(req.session.userid){
            const userId = req.session.userid;
            console.log(userId)
            console.time("Database Query")
            dbInstance.current_user([userId])
                .then( user => {
                    console.timeEnd("Database Query")
                    console.log(user)
                    res.status(200).send( user )
                })
                .catch( err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                    console.log(err)
                } );
        } else {
            res.status(200).send("No current user");
        }
    }    
}