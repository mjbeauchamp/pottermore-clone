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
        axios.get('https://www.potterapi.com/v1/characters/?house=Hufflepuff&key=$2a$10$OzX6uXIalwnz48Y.oPJuk.vt5VUMvdZc.FMoY.4PPibGHry0t8Pjm')
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
                    <h3>Hufflepuff</h3>
                    <img src="http://tpetricek.github.io/Talks/2016/philosophy-of-types/images/literate.png" alt=""/>
                    <p>You probably know that some of Hufflepuff’’s most renowned members include Nymphadora Tonks and Cedric Diggory. But did you know that Hufflepuff’s house ghost, the Fat Friar, still resents the fact he was never made a cardinal? Or that Hufflepuff has produced the fewest Dark wizards of any house at Hogwarts?</p>
                    <br/>
                    <p>Here you can discover more about your beloved house through writing by J.K. Rowling, articles by Pottermore and all the latest Hufflepuff news.</p>
                    <br/>
                    <p>You can also share your Hufflepuff pride with your friends, with downloadable wallpaper and house emblems.</p>
                </div>
            </section>

            <section className='house-famous'>
                <h2>Famous Hufflepuff characters</h2>
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
                <h2>Hufflepuff Welcome Message</h2>
                <h3>By J.K. Rowling</h3>
                <div className='house-welcome-msg'>
                    <p>Congratulations! I’m Prefect Gabriel Truman, and I’m delighted to welcome you to HUFFLEPUFF HOUSE. Our emblem is the badger, an animal that is often underestimated, because it lives quietly until attacked, but which, when provoked, can fight off animals much larger than itself, including wolves. Our house colours are yellow and black, and our common room lies one floor below the ground, on the same corridor as the kitchens.</p>
                    <br/>
                    <p>Now, there are a few things you should know about Hufflepuff house. First of all, let’s deal with a perennial myth about the place, which is that we’re the least clever house. WRONG. Hufflepuff is certainly the least boastful house, but we’ve produced just as many brilliant witches and wizards as any other. Want proof? Look up Grogan Stump, one of the most popular Ministers for Magic of all time. He was a Hufflepuff – as were the successful Ministers Artemesia Lufkin and Dugald McPhail. Then there’s the world authority on magical creatures, Newt Scamander; Bridget Wenlock, the famous thirteenth-century Arithmancer who first discovered the magical properties of the number seven, and Hengist of Woodcroft, who founded the all-wizarding village of Hogsmeade, which lies very near Hogwarts School. Hufflepuffs all.</p>
                </div>
            </section>

        </div>
    )
}
}