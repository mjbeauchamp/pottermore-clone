const axios = require("axios");
module.exports={
    wizards: () => {
        return axios.get('http://localhost:4000/api/wizards')
            .then(response => response.data)
            .catch(err => console.log(err))
    },
    questionsTest: () => {
        return axios.get('http://localhost:4000/api/sortingquiz/questions')
        .then( questionsReq => questionsReq.data)
        .catch(err => console.log("The bird has flown the coop, please come back later.",err))
    },
    answersTest: () => {
        return axios.get('http://localhost:4000/api/sortingquiz/answers')
        .then(answersReq => answersReq.data)
        .catch(err => console.log("Error, cannot compute.",err))
    }

}