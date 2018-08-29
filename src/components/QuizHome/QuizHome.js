import React from 'react'
import CursorTrail from './CursorTrail'
import {NavLink} from 'react-router-dom'
import Navbar from '../Navbar'

class QuizHome extends React.Component {
   constructor (props) {
       super(props)
       this.state = {

       }
   }
   render () {
        return(
            <div>

                {/* This is code pulled in that makes the dots follow the cursor*/}

                <CursorTrail/>

                <div>
                    <Navbar {...this.props}/>
                </div>

                <div className = 'quizhome'>
                    <div className = 'quiztoptext'>Welcome to class</div>
                    <section className = 'sortingQuiz'>
                        <NavLink className = 'sortingquizlink' to = '/sortingquiz'>
                            <div className = 'sortingquiztext'>
                                Discover Your Hogwarts House
                            </div>
                        </NavLink>
                    </section>
                </div>

            </div>
        )
    }
}

export default QuizHome