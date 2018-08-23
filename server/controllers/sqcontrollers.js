

module.exports = {

    sortingQuestions: (req, res) => {
        const db = req.app.get('db')

        db.get_sorting_questions().then(sortingquestions => {
            res.status(200).send(sortingquestions)
        }) 
        .catch(err => {
            console.log(err)
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
        })
    },
    sortingAnswers: (req, res) => {
        const db = req.app.get('db')

        db.get_sorting_answers().then(sortinganswers => {
            res.status(200).send(sortinganswers)
        })
        .catch( err => {
            console.log(err)
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
        })
    },
    schoolHouse: (req, res) => {
        const db = req.app.get('db')
        const wizardID = req.session.userid
        const wizardHouse = req.params.housename
        db.update_userhouse([wizardHouse, wizardID]).then(uhres => {
            res.status(200).send(uhres)
        })
        .catch( err => {
            console.log(err)
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
        })
    }
}