import React from 'react'
import axios from 'axios'
import CursorTrail from './CursorTrail'
import {NavLink} from 'react-router-dom'
import Navbar from '../Navbar'


class QuizHome extends React.Component {
   constructor (props) {
        super(props)
        this.state = {
        quiztoggle:false,
        wizardHouse: '',
        userishere:false
       }
   }

   componentDidMount = () => {

        axios.get(`/api/current_user`).then( res => {
            var userId = res.data['0'].id
            if(userId){
                this.setState({
                    userishere:true
                })
            }
        }).catch(err => 
        console.log("Error, sorry, please try again later.",err))

       axios.get(`/api/quizhome/togglequizselect`).then( res => {
           var houseID = res.data['0'].house_id
           if(houseID === 1 || houseID === 2 || houseID === 3 || houseID === 4){
               var house = ''
               switch(houseID){
                    case 1:
                    house = 'Hufflepuff'
                    return this.setState({
                        quiztoggle:true,
                        wizardHouse:house
                    })
                    case 2:
                    house = 'Gryffindor'
                    return this.setState({
                        quiztoggle:true,
                        wizardHouse:house
                    })
                    case 3:
                    house = 'Ravenclaw'
                    return this.setState({
                        quiztoggle:true,
                        wizardHouse:house
                    })
                    case 4:
                    house = 'Slytherin'
                    return this.setState({
                        quiztoggle:true,
                        wizardHouse:house
                    })
                }
           }
       }).catch(err => 
        console.log("Error, cannot connect, please come again later.",err)) 
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
             
                    <section className = 'sortingQuiz' style = {{display: this.state.userishere ? 'block':'none'}}>
                        <NavLink className = 'sortingquizlink' to = '/sortingquiz' style = {{display: this.state.quiztoggle ? 'none':'block'}}>
                            <div className = 'sortingquiztext'>
                                Discover Your Hogwarts House
                            </div>
                        </NavLink>
                        <div className = 'sortingquiztext' style = {{display: this.state.quiztoggle ? 'block':'none'}}>
                            You are a {`${this.state.wizardHouse}`}
                        </div>
                    </section>

                    <section className = 'sortingQuiz' style = {{display: this.state.userishere ? 'none':'block'}}>
                        <div className = 'sortingquiztext'>
                            Please Sign In To Be Sorted
                        </div>
                    </section>    
                </div>

            </div>
        )
    }
}

export default QuizHome