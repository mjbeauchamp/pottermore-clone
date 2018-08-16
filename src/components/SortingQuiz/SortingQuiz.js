import React, {Component} from 'react'

export class SortingQuiz extends Component{
    constructor(){
        super()

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
