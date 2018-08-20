

module.exports = {
    byId: (userID) => {
        return function (req, res, next) {
            console.log(process.env.NODE_ENV)
            if(!req.session.userid && !process.env.NODE_ENV){
                req.session.userid = userID
            }
            next();
        }
    }
}