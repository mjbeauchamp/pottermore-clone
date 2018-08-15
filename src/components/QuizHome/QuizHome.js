import React from 'react'
import CursorTrail from './CursorTrail'
import {NavLink} from 'react-router-dom'

function QuizHome () {
   
    return(
        <div>

            {/* This is code pulled in that makes the dots follow the cursor*/}

            <CursorTrail/>

            <div>
                {/* nav bar will go here*/}
            </div>

            <div className = 'quizhometop'>
                <div className = 'quiztoptext'>Welcome to class</div>
            </div>

            <section className = 'sortingQuiz'>
                <NavLink className = 'sortingquizlink' to = '/sortingquiz'>
                    <div className = 'sortingquiztext'>
                        Sorting Hat
                    </div>
                </NavLink>
            </section>

            <div>
                {/*This is where the footer will go.*/}
            </div>

        </div>
    )   
}

export default QuizHome