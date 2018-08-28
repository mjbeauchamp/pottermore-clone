import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
            <section className='house-logo' id="ravenclaw">
                <h1>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
                <h2>Welcome to your house page</h2>
                <img src="https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442" alt=""/>
            </section>
            <section className='house-about'>
                <div className='house-about-div'>
                    <h4>WELCOME TO HOUSE</h4>
                    <h3>Ravenclaw</h3>
                    <img src="http://tpetricek.github.io/Talks/2016/philosophy-of-types/images/literate.png" alt=""/>
                    <p>You probably know that some of Ravenclaw’s most renowned members include Gilderoy Lockhart and Luna Lovegood. But did you know Ravenclaw’s Grey Lady is the least talkative Hogwarts house ghost, or that Ravenclaw’s common room boasts the most stunning views of the castle grounds?</p>
                    <br/>
                    <p>Here you can discover more about your beloved house through writing by J.K. Rowling, articles by Pottermore and all the latest Ravenclaw news.</p>
                    <br/>
                    <p>You can also share your Ravenclaw pride with your friends, with downloadable wallpaper and house emblems.</p>
                </div>
            </section>

            <section className='castspell-section'>
                <div className="castspell-div"></div>
                <div className="link-div">
                        <Link className="castspell-link" to="/castspell"> Learn to cast<br />magic spells!</Link>
                    </div>
            </section>

            <section className='house-famous ravenclaw-famous'>
                <h2>Famous Ravenclaw Characters</h2>
                <div className='line' style={{background: 'white', height: '2px', margin: '40px 0px'}}></div>
                <div className='house-famous-list'>
                    <div className='house-famous-info'>
                        <div className='chang'></div>
                        <h2>{newArr[1]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='penelope'></div>
                        <h2>{newArr[2]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='marietta'></div>
                        <h2>{newArr[4]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='filius'></div>
                        <h2>{newArr[5]}</h2>
                    </div>
                </div>
            </section>

            <section className='house-about'>
                <div className='house-about-div'>
                <h3>Ravenclaw Welcome Message</h3>
                <h2>By J.K. Rowling</h2>
                    <p>Congratulations! I’m Prefect Robert Hilliard, and I’m delighted to welcome you to RAVENCLAW HOUSE. Our emblem is the eagle, which soars where others cannot climb; our house colours are blue and bronze, and our common room is found at the top of Ravenclaw Tower, behind a door with an enchanted knocker. The arched windows set into the walls of our circular common room look down at the school grounds: the lake, the Forbidden Forest, the Quidditch pitch and the Herbology gardens. No other house in the school has such stunning views.</p>
                </div>
            </section>

        </div>
    )
}
}