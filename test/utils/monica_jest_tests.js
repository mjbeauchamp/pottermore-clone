const axios = require("axios");

let idNum = 0;

module.exports = {
    //You won't handle the .then and .catch here. You ONLY return the data that you received from the axios call
    newUser: () => {
        let first_name = "Harry";
        let last_name = "Potter";
        let username = "chosen1" + idNum;
        let password = "ginny"
        idNum++;
        return axios.post('http://localhost:4000/auth/new_user', {first_name: first_name, last_name: last_name, username: username, password: password})
                .then(res => {
                    return res.data
                })
    },

    login: () => {
        let username = "crookshanks";
        let password = "boo";
        return axios.post("http://localhost:4000/auth/login", {username: username, password: password})
                .then(res => {
                    return res.data
                })
    }
}