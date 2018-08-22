import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export class SortingQuiz extends Component{
    constructor(){
        super()
        this.state = {
            sortingQuestions:[],
            sortingQuestion:{},
            sortingAnswers:[],
            index:0,
            answerLength:3,
            questionAnswer:[],
            answerHouse:'',
            Gryffindor:0,
            Hufflepuff:0,
            Ravenclaw:0,
            Slytherin:0
        }
    }

    componentDidMount = () => {

        axios.get('/api/sortingquiz/questions').then( (questionsReq) => {
            this.setState({
                sortingQuestions:questionsReq.data,
                sortingQuestion:questionsReq.data[Math.floor(Math.random()*questionsReq.data.length)]
            })

            axios.get('/api/sortingquiz/answers').then( (answersReq) => {
                
                var questionAnswers = []
                var answerHouse = []
                answersReq.data.filter( (e,i) => {
                    if(e.question_id === this.state.sortingQuestion.id){
                        questionAnswers.push(e.answer)
                        answerHouse.push(e.house)
                        return true
                    } else return false
                }) 
                this.setState({
                sortingAnswers:answersReq.data,
                answerLength:questionAnswers.length-1,
                questionAnswer:questionAnswers,
                index:0,
                answerHouse
                })
        })
        .catch(err => 
            console.log("Error, cannot compute.",err))   
        })
        .catch(err => 
            console.log("The bird has flown the coop, please come back later.",err))
    }
    
    pageSetup = (newQuestionsArr) => {
        
        
        var sQuestion = newQuestionsArr[Math.floor(Math.random()*newQuestionsArr.length)]

        var questionAnswers = []
        var answerHouse = []

        this.state.sortingAnswers.forEach( e => {
            
            if(e.question_id === sQuestion.id){
                questionAnswers.push(e.answer)
                answerHouse.push(e.house)
            }   
        })

        this.setState({
            questionAnswer:questionAnswers,
            answerLength:questionAnswers.length-1,
            index:0,
            answerHouse,
            sortingQuestion:sQuestion,
            sortingQuestions:newQuestionsArr
        })
        
    }
    
    newAnswerBtn = () => {
        
        
        //house points************************
        
        switch (this.state.answerHouse[this.state.index]) {
            case 'Gryffindor':
            var housepoints = this.state.Gryffindor
            housepoints += 5
            this.setState({
                Gryffindor:housepoints
            })
            break;
            case 'Ravenclaw':
            var housepoints = this.state.Ravenclaw
            housepoints += 5
            this.setState({
                Ravenclaw:housepoints
            })
            break;
            case 'Hufflepuff':
            var housepoints = this.state.Hufflepuff
            housepoints += 5
            this.setState({
                Hufflepuff:housepoints
            })
            break;
            case 'Slytherin':
            var housepoints = this.state.Slytherin
            housepoints += 5
            this.setState({
                Slytherin:housepoints
            })
            break;
            default:
            break;
        }  
        
        // splice array of used question*****
        
        
        var newQuestionsArr = this.state.sortingQuestions.filter( e => {
            return e.id !== this.state.sortingQuestion.id
        })
        this.setState({
            sortingQuestions:newQuestionsArr
        })
        
        // reset page***********************
        this.pageSetup(newQuestionsArr)
        
    }
    
    
    increaseAIndex = () => {
        var newIndex = this.state.index;
        if(newIndex < this.state.answerLength){
            newIndex++
            this.setState({
                index: newIndex
            })
        }
    }
    
    decreaseAIndex = () => {
        var newIndex = this.state.index;
        if(newIndex > 0){
            newIndex--
            this.setState({
                index: newIndex
            })
        }
    }
    
    
    render (){
        
        
        return (
            
            <div className="SortingQuiz">

            <NavLink className = 'backbtn' to = '/quizHome'> X  </NavLink>

                <div className = 'questioncontainer'>

                    <div className = 'questiontext'>
                        {this.state.sortingQuestion.question}
                    </div>

                </div>
                <div className = 'answercontainer'>

                    <div className = 'answertoggleup'>
                        <button onClick = {this.decreaseAIndex}>
                            Previous Answer
                        </button>
                    </div>

                    <div className = 'answertext'>
                        {this.state.questionAnswer[this.state.index]} <br/>
                        {this.state.answerHouse[this.state.index]}
                    </div>

                    <div className = 'bottombtns'>

                        <div className = 'answertoggledown'>
                            <button onClick = {this.increaseAIndex}>
                                Next Answer
                            </button>
                        </div>

                        <button className = 'answerselectbtn' onClick = {this.newAnswerBtn}>
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
