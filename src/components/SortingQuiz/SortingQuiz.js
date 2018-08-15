import React, {Component} from 'react'

export class QuizHome extends Component{
    constructor(){
        super()

    }
    
    render (){
        return (
            <div className="SortingQuiz">
                This is where the quiz sorts houses
                <div className = 'questioncontainer'>
                    <div className = 'questiontext'>

                    </div>

                </div>
                <div className = 'answercontainer'>
                    
                </div>
            </div>
        )
    }
}

export default QuizHome