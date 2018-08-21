import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class SortingQuiz extends Component{
    constructor(){
        super()
        this.state = {
            sortingQuestion:{},
            sortingQuestions:[],
            sortingAnswers:[],
            sortingAnswer:{}
        }
    }

    componentDidMount = () => {
        axios.get('/api/sortingquiz/questions').then( (questionsReq) => {
            this.setState({
                sortingQuestions:questionsReq.data
            })
        })
        .catch(err => 
            console.log("The bird has flown the coop, please come back later.",err))   
            
        
        axios.get('/api/sortingquiz/answers').then( (answersReq) => {
            this.setState({
                sortingAnswers:answersReq.data
            })
        })
        .catch(err => 
            console.log("Error, cannot compute.",err))
    }


        
                
                
                
    render (){

        var question = this.state.sortingQuestions.map( (e,i) => {
         
            
         
        })
        return (

            <div className="SortingQuiz">

            <NavLink className = 'backbtn' to = '/quizHome'> X  </NavLink>

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
