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
            clicks: 0,
            answerColors: ["#412198", "#354253", "#0f072b", "#506782", "#1d074e", "#531162", "#554b9d", "#7f1e45", "#1d3f46", "#37153a", "#602118", "#192470","#191a15","#42395a"]
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
        
        //*********house points******************
        
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

        // *******splice array of used question*****
        
        
        var newQuestionsArr = this.state.sortingQuestions.filter( e => {
            return e.id !== this.state.sortingQuestion.id
        })
        this.setState({
            sortingQuestions:newQuestionsArr
        })
        
        // **********reset page***********************
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
    
    getAnswerColor = () => {
        var answerColor = this.state.answerColor[Math.floor(Math.random * this.state.answerColors.length)]
        return answerColor;
    }

    
    render (){
        var answercircle1 = ''
        var answercircle2 = ''
        var answercircle3 = ''
        var answercircle4 = ''
        var currentanswer = 'currentanswer'
        var notcurrentanswer = 'notcurrentanswer'

        switch(this.state.index){
            case 0: answercircle1 = currentanswer
                    answercircle2 = notcurrentanswer
                    answercircle3 = notcurrentanswer
                    answercircle4 = notcurrentanswer
                break;
            case 1: answercircle2 = currentanswer
                    answercircle1 = notcurrentanswer
                    answercircle3 = notcurrentanswer
                    answercircle4 = notcurrentanswer
                break;
            case 2: answercircle3 = currentanswer
                    answercircle2 = notcurrentanswer
                    answercircle1 = notcurrentanswer
                    answercircle4 = notcurrentanswer
                break;
            case 3: answercircle4 = currentanswer
                    answercircle2 = notcurrentanswer
                    answercircle3 = notcurrentanswer
                    answercircle1 = notcurrentanswer
                break;
        }


        var currentquestionindex = 0
        if (this.state.sortingQuestion.id) {
            currentquestionindex = this.state.sortingQuestion.id -1
        }
     

        var questionImageArray = ['CallHater','PostMortem','PotionChoice','History','EnchantedGarden','MusicOfTheEar',
        '4boxes','FourGoblets','FlutterbyScentAttract','TrollItemSaver','Wouldyourather','DifficultDeal','whattolearn','','AnyPower',
        'whattolearn','CheatingQuillQuery','RiverTrollBridge','WhichRoad','NightmareScare','LateNightAlleyCry','MuggleConfront',
        'DawnDusk','MoonorStars','ForestOrRiver','BlackWhite','HeadsorTails','','LeftRight'] 

        return (
            
            <div className="SortingQuiz">

                <div className = 'questioncontainer'>
                    <img src={require('./../../QuizQuerys/' + questionImageArray[currentquestionindex] + '.png')} alt='No Image Available' className = 'images'/>
                    <NavLink className = 'backbtn' to = '/quizHome'>   </NavLink>
                    {/* <div className = 'questiontext'  style = {{backgroundImage:`url('${this.state.backgroundimage}')`}}>
                        {this.state.sortingQuestion.question}
                    </div> */}
                </div>
                <div className = 'answercontainer' style={{backgroundColor: `${this.state.answerColors[Math.floor(Math.random() * this.state.answerColors.length)]}`}}>
                    <div className = 'answerdiv'>
                        <div className = 'answertoggleupdiv'>
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className = 'answertoggleup' onClick = {this.decreaseAIndex}>
                            <path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"/></svg>
                        </div>
                        <div className = 'answertext'>
                            {this.state.questionAnswer[this.state.index]}
                        </div>

                        <div className = 'answertoggledowndiv'>
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className = 'answertoggledown' onClick = {this.increaseAIndex}>
                            <path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"/></svg>
                        </div>
                    </div>
                    <div className = 'bottombtns'>
                        <button className = 'answerselectbtn' id = 'selectbtn' onClick = {this.newAnswerBtn}>
                            Select
                        </button>
                    </div>
                    <div className = 'circlesContainer'>
                        <div className = {`${answercircle1}`}></div>
                        <div className = {`${answercircle2}`}></div>
                        <div className = {`${answercircle3}`} style = {{display: this.state.answerLength > 1?  'block':'none'}}></div>
                        <div className = {`${answercircle4}`} style = {{display: this.state.answerLength > 1? 'block':'none'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortingQuiz
