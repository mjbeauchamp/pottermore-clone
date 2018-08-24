import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import swal from 'sweetalert2'


class SortingQuiz extends Component{
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
            Slytherin:0,
            clicks: 0
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
    
    redirectFn = () => {
        this.props.history.push('/dashboard')
    }

    newAnswerBtn = async () => {
        
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
        
        //ending the quiz function
        if(this.state.Gryffindor >= 30 || this.state.Hufflepuff >= 30|| this.state.Ravenclaw >= 30|| this.state.Slytherin >= 30){

            var selectedHouse = '';
            if(this.state.Gryffindor >= 30){
                selectedHouse = 'Gryffindor'
            }
            else if(this.state.Hufflepuff >= 30){
                selectedHouse = 'Hufflepuff'
            }
            else if(this.state.Ravenclaw >= 30){
                selectedHouse = 'Ravenclaw'
            }
            else if(this.state.Slytherin >= 30){
                selectedHouse = 'Slytherin'
            }

        

            const {value: house} = await swal({
                title: 'Great Job',
                text: `Congratulations, you have finished your quiz. 
                 After a glimpse into who you are, you would do best in ${selectedHouse}.  That being said, you may choose whichever house you want.`,
                input: 'select',
                inputOptions: {
                  'Gryffindor': 'Gryffindor',
                  'Slytherin': 'Slytherin',
                  'Hufflepuff': 'Hufflepuff',
                  'Ravenclaw': 'Ravenclaw'
                },
                inputPlaceholder: 'Choose Your House',
                showCancelButton: false,
                inputValidator: (value) => {
                  return new Promise((resolve) => {
                    if (value === 'Gryffindor') {
                      resolve()
                    } else if(value === 'Hufflepuff') {
                        resolve()
                    } else if(value === 'Ravenclaw') {
                        resolve()
                    } else if(value === 'Slytherin') {
                        resolve()
                    } else {
                      resolve('You must select a house')
                    }
                  })
                },
                allowOutsideClick:false
            })

            axios.put(`/api/sortingquiz/house/${house}`).then( req => {})

            if (house) {
                swal({
                    title:"Welcome to: " + house,
                    confirmButtonText:   'OK',
                    onAfterClose: this.redirectFn()
                    
                })
            }


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
        else if (newIndex = this.state.answerLength){
            newIndex = this.state.answerLength - this.state.answerLength
            this.setState({
                index:newIndex
            })
        }
    }
    
    decreaseAIndex = () => {
        var newIndex = this.state.index;
        if(newIndex >= 1){
            newIndex--
            this.setState({
                index: newIndex
            })
        }
        else if (newIndex = 1){
            newIndex = this.state.answerLength
            this.setState({
                index:newIndex
            })
        }
    }
    

    //*********************** could use points of houses for when to determine to end the quis instead of using an amount of questions************* */
    
    render (){
        
        return (
            
            <div className="SortingQuiz">


                <div className = 'questioncontainer'>
                    <NavLink className = 'backbtn' to = '/quizHome'> X  </NavLink>

                    <div className = 'questiontext'  style = {{backgroundImage:`url('${this.state.backgroundimage}')`}}>
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
                        {this.state.questionAnswer[this.state.index]}
                    </div>

                    <div className = 'bottombtns'>

                        <div className = 'answertoggledown'>
                            <button onClick = {this.increaseAIndex}>
                                Next Answer
                            </button>
                        </div>

                        <button className = 'answerselectbtn' onClick = {this.newAnswerBtn}>
                            Select
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
