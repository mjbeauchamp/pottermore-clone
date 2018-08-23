import React from 'react'
import axios from 'axios'

export default class Gryffindor extends React.Component {
    constructor() {
        super() 
        this.state = {
            currentUser: {},
            userID: null,
            famous:  []
        }
    }

    componentDidMount = () => {
        axios.get('https://www.potterapi.com/v1/characters/?house=Ravenclaw&key=$2a$10$OzX6uXIalwnz48Y.oPJuk.vt5VUMvdZc.FMoY.4PPibGHry0t8Pjm')
        .then(response => {
            this.setState({ famous: response.data})
        }).catch(err => console.log(err))
        axios.get("/api/current_user")
            .then(response => {
                if(response.data[0].id){
                    this.setState({
                        currentUser: response.data[0],
                        userID: response.data[0].id
                    })
                }
            })
            .catch(err => console.log(err));
    }



    render() {
        console.log(this.state.currentUser)
        console.log(this.state.famous[0])
        let newArr = []
        if (this.state.famous[0]) {
            for (let i = 0; i < 7; i++) {
                newArr.push(this.state.famous[i].name)
            } 
        }


    return (
        <div className='house'>
            <section className='house-logo'>
                <img src="https://vignette.wikia.nocookie.net/jspotter/images/e/e2/Gryffindor_House_Crest.png/revision/latest?cb=20140720030308" alt=""/>
                <h1>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
                <h2>Welcome back to your house page</h2>
            </section>
            <section className='house-about'>
                <div className='house-about-div'>
                    <h4>WELCOME TO HOUSE</h4>
                    <h3>Slytherin</h3>
                    <img src="http://tpetricek.github.io/Talks/2016/philosophy-of-types/images/literate.png" alt=""/>
                    <p>You probably know that some of Slytherin’s most renowned members include Severus Snape and Bellatrix Lestrange. But did you know Merlin himself was a Slytherin, or that according to legend, the ribbon of a First Class Order of Merlin is green to reflect his Hogwarts house?</p>
                    <br/>
                    <p>Here you can discover more about your beloved house through writing by J.K. Rowling, articles by Pottermore and all the latest Slytherin news.</p>
                    <br/>
                    <p>You can also share your Slytherin pride with your friends, with downloadable wallpaper and house emblems.</p>
                </div>
            </section>

            <section className='house-famous'>
                <h2>Famous Slytherin characters</h2>
                <hr/>
                <div className='house-famous-list'>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[0]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[1]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[2]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[3]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[4]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[5]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <img src="https://www.pptgrounds.com/wp-content/uploads/2012/10/Abstract-Colors-Gradient-Backgrounds-1000x750.jpg" alt=""/>
                        <h2>{newArr[6]}</h2>
                    </div>
                </div>
            </section>

            <section className='house-welcome'>
                <h2>Slytherin Welcome Message</h2>
                <h3>By J.K. Rowling</h3>
                <div className='house-welcome-msg'>
                    <p>Congratulations! I’m Prefect Gemma Farley, and I’m delighted to welcome you to SLYTHERIN HOUSE. Our emblem is the serpent, the wisest of creatures; our house colours are emerald green and silver, and our common room lies behind a concealed entrance down in the dungeons. As you’ll see, its windows look out into the depths of the Hogwarts lake. We often see the giant squid swooshing by – and sometimes more interesting creatures. We like to feel that our hangout has the aura of a mysterious, underwater shipwreck.</p>
                    <br/>
                    <p>Now, there are a few things you should know about Slytherin – and a few you should forget. Firstly, let’s dispel a few myths. You might have heard rumours about Slytherin house – that we’re all into the Dark Arts, and will only talk to you if your great-grandfather was a famous wizard, and rubbish like that. Well, you don’t want to believe everything you hear from competing houses. I’m not denying that we’ve produced our share of Dark wizards, but so have the other three houses – they just don’t like admitting it. And yes, we have traditionally tended to take students who come from long lines of witches and wizards, but nowadays you’ll find plenty of people in Slytherin house who have at least one Muggle parent.
                    Here’s a little-known fact that the other three houses don’t bring up much: Merlin was a Slytherin. Yes, Merlin himself, the most famous wizard in history! He learned all he knew in this very house! Do you want to follow in the footsteps of Merlin? Or would you rather sit at the old desk of that illustrious ex-Hufflepuff, Eglantine Puffett, inventor of the Self-Soaping Dishcloth?
                    I didn’t think so.</p>
                </div>
            </section>

        </div>
    )
}
}