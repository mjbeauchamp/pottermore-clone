

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
        const db = req.body.get('db')

        db.get_sorting_answers().then(sortinganswers => {
            console.log(sortinganswers)
            res.status(200).send(sortinganswers)
        })
        .catch( err => {
            console.log(err)
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
        })
    }


}