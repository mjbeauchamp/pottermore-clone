import React, {Component} from 'react'
import axios from 'axios'

export class SortingQuiz extends Component{
    constructor(){
        super()

    }

    componentDidMount = () => {
        axios.get('/api/sortingquiz/questions').then( (req, res) => {
            // console.log(req.data)
        })
        .catch(err => 
            console.log("The bird has flown the coop, please come back later.",err))

        axios.get('/api/sortingquiz/answers').then( (req, res) => {
            console.log(req.data)
        })
        .catch(err => 
            console.log("Error, cannot compute.",err))
    }


    
    render (){

        return (

            <div className="SortingQuiz">

                <div className = 'questioncontainer'>

                    <div className = 'questiontext'>
                        The questions will go here
                    </div>

                </div>
                <div className = 'answercontainer'>

                    <div className = 'answertoggleup'>

                    </div>

                    <div className = 'answertext'>
                        The answers will go here
                    </div>

                    <div className = 'bottombtns'>

                        <div className = 'answertoggledown'>

                        </div>

                        <button className = 'answerselectbtn'>
                            Push me, I dare you!
                        </button>

                    </div>

                </div>
                <div className = 'footer'>

                </div>
            </div>
        )
    }
}

export default SortingQuiz
