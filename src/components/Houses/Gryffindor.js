import React from 'react'
import {Link} from 'react-router-dom'
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
        axios.get('https://www.potterapi.com/v1/characters/?house=Gryffindor&key=$2a$10$OzX6uXIalwnz48Y.oPJuk.vt5VUMvdZc.FMoY.4PPibGHry0t8Pjm')
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
        let newArr = []
        if (this.state.famous[0]) {
            for (let i = 0; i < 7; i++) {
                newArr.push(this.state.famous[i].name)
            } 
        }


    return (
        <div className='house'>
            <section className='house-logo' id='gryffindor'>
                <h1>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
                <h2>Welcome back to your house page</h2>
                <img src="https://vignette.wikia.nocookie.net/jspotter/images/e/e2/Gryffindor_House_Crest.png/revision/latest?cb=20140720030308" alt=""/>
            </section>
            <section className='house-about'>
                <div className='house-about-div'>
                    <h4>WELCOME TO HOUSE</h4>
                    <h3>Gryffindor</h3>
                    <img src="http://tpetricek.github.io/Talks/2016/philosophy-of-types/images/literate.png" alt=""/>
                    <p>You probably know that some of Gryffindor’s most renowned members include Albus Dumbledore and Harry Potter. But did you know the sword of Gryffindor was made a thousand years ago by goblins, or that Head of House Minerva McGonagall’s hobbies include correcting articles in Transfiguration Today and supporting the Montrose Magpies?</p>
                    <br/>
                    <p>Here you can discover more about your beloved house through writing by J.K. Rowling, articles by Pottermore and all the latest Gryffindor news.</p>
                    <br/>
                    <p>You can also share your Gryffindor pride with your friends, with downloadable wallpaper and house emblems.</p>
                </div>
            </section>

            <section className='castspell-section'>
                <div className="castspell-div"></div>
                <div className="link-div">
                        <Link className="castspell-link" to="/castspell"> Learn to cast<br />magic spells!</Link>
                    </div>
            </section>

            <section className='house-famous gryffindor-famous'>
                <h2>Famous Gryffindor characters</h2>
                <div className='line' style={{background: 'white', height: '2px', margin: '40px 0px'}}></div>
                <div className='house-famous-list'>
                    <div className='house-famous-info'>
                        <div className='katie'></div>
                        <h2>{newArr[0]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='sirius'></div>
                        <h2>{newArr[2]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='lavender'></div>
                        <h2>{newArr[3]}</h2>
                    </div>
                    <div className='house-famous-info'>
                        <div className='dumbledore'></div>
                        <h2>{newArr[6]}</h2>
                    </div>
                </div>
            </section>

            <section className='house-about'>
                <div className='house-about-div'>
                <h3>Gryffindor Welcome Message</h3>
                <h2>By J.K. Rowling</h2>
                    <p>Congratulations! I’m Prefect Percy Weasley, and I’m delighted to welcome you to GRYFFINDOR HOUSE. Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower.</p>
                    <br/>
                    <p>This is, quite simply, the best house at Hogwarts. It’s where the bravest and boldest end up – for instance: Albus Dumbledore! Yes, Dumbledore himself, the greatest wizard of our time, was a Gryffindor! If that’s not enough for you, I don’t know what is.</p>
                    <br/>
                    <p>I won’t keep you long, as all you need to do to find out more about your house is to follow Harry Potter and his friends as I lead them up to their dormitories. Enjoy your time at Hogwarts – but how could you fail to? You’ve become part of the best house in the school.</p>
                </div>
            </section>

        </div>
    )
}
}