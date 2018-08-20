const axios = require('axios')

module.exports = {

    getSortingQuestions: () => {
        return axios.get('http://localhost:4000/api/sortingquiz/questions').then( (questionsReq) => {
            return questionsReq.data
        })
        .catch(err => 
        console.log("The bird has flown the coop, please come back later.",err))
    },
    getSortingAnswers: () => {
        return axios.get('http://localhost:4000/api/sortingquiz/answers').then( (answersReq) => {
           return answersReq.data
        })
        .catch(err => 
        console.log("Error, cannot compute.",err))
    }
    
}