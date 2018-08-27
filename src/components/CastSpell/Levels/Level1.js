import React from 'react';
import axios from 'axios';
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';
import {SketchField, Tools} from 'react-sketch';
import swal from 'sweetalert2';
import Particles from 'react-particles-js'


class Level1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: [],
            points: 0,
            correctFinalWord: "qwerty",
            success: false,
            almost: false,
            fail: false,
            visible: true,
            start: false,
            currentUser: {},
            userID: null
        }
    }

    componentDidMount = () => {
        axios.get("/api/current_user")
            .then(response => {
                if(response.data[0].id){
                    this.setState({
                        currentUser: response.data[0],
                        userID: response.data[0].id
                    })
                }
            })
            .catch();
    }

    // When user hits a point, push to array with the "id" letter for that point
    //This lets us both keep a point total by using .length on the array, as well as prevent duplicate array entries by making sure the "id" letter isn't in the array
    handleMouseEnter =(e, letter) => {
        e.preventDefault()
        let newArr;
        if(this.state.score[0]){
            newArr = this.state.score.map(val => val);
            if(!newArr.includes(letter)){
                newArr.push(letter)
            }
        } else {
            newArr = [];
            newArr.push(letter) 
        }     
        this.setState({ score: newArr, points: newArr.length });
    }

    // When user hits the final point, this will trigger a pop-up depending on whether they were successful or not
    spellFinished = () => {
        let finalPoints = this.state.points;
        let newArray = this.state.score.map(val => val).sort().join("");
        if (newArray === this.state.score.join("")) {
            if(finalPoints >= 15 ){
                swal({
                    title: `Great Job, ${this.state.currentUser.username}!`,
                    showConfirmButton: false,
                    timer: 1000
                })

                this.setState({ 
                    success: true,
                    visible: false
                })
            } else if (finalPoints >= 13) {
                swal({
                    title: `Almost there, ${this.state.currentUser.username}!`,
                    showConfirmButton: false,
                    timer: 1000
                })
                this.setState({ 
                    almost: true,
                    visible: false
                })
            } else {
                swal({
                    title: `Try Harder, ${this.state.currentUser.username}!`,
                    showConfirmButton: false,
                    timer: 1000
                })
                this.setState({ fail: true})
            }
        } else {
        }
    }
    handleStart = () => {
        this.setState({start: true})
    }
    render() {
    return(
        <section className='spell-section'>
                <div>
                <button className='castspell-back-btn' onClick={this.props.handleSpellsList} >BACK</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='spell-box'>
                <div className='level1-arrow1'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                <div className='level1-arrow2'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                <div className='level1-arrow3'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                <div className='level1-arrow4'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                <div className='level1-arrow5'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                <div className='level1-arrow6'><img src={require("./Untitledarrow2.png")} alt=""/></div>

                <div onClick={this.handleStart}> <button className="level1-start"> Click To Start</button></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-1 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-2 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-3 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-4 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-5 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-6 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-7 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'a')} className={!this.state.start ? "box-8 invisible hide-boxes" : 'box-8 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'b')} className={!this.state.start ? "box-14 invisible hide-boxes" : 'box-14 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'c')} className={!this.state.start ? "box-9 invisible hide-boxes" : 'box-9 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'d')} className={!this.state.start ? "box-15 invisible hide-boxes" : 'box-15 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'e')} className={!this.state.start ? "box-16 invisible hide-boxes" : 'box-16 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'f')} className={!this.state.start ? "box-10 invisible hide-boxes" : 'box-10 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'g')} className={!this.state.start ? "box-17 invisible hide-boxes" : 'box-17 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'h')} className={!this.state.start ? "box-18 invisible hide-boxes" : 'box-18 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'i')} className={!this.state.start ? "box-19 invisible hide-boxes" : 'box-19 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'j')} className={!this.state.start ? "box-20 invisible hide-boxes" : 'box-20 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'k')} className={!this.state.start ? "box-11 invisible hide-boxes" : 'box-11 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'l')} className={!this.state.start ? "box-21 invisible hide-boxes" : 'box-21 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'m')} className={!this.state.start ? "box-22 invisible hide-boxes" : 'box-22 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'n')} className={!this.state.start ? "box-12 invisible hide-boxes" : 'box-12 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'o')} className={!this.state.start ? "box-23 invisible hide-boxes" : 'box-23 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className={!this.state.start ? "box-24 invisible hide-boxes" : 'box-24 invisible show-boxes' }></div>
                    <div onMouseEnter={this.spellFinished} className={!this.state.start ? "box-13 invisible hide-boxes" : 'box-13 invisible show-boxes' }></div>
                    <SketchField 
                        height='680px'
                        tool={Tools.Pencil} 
                        lineColor='white'
                        lineWidth={10} 
                        blur='10'
                        />
                </div>
                </div>
                <div className='spell-image'>

                <div className={this.state.visible ? 'feder' : 'feder2'}>
                    <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                </div>

                <div className={this.state.success ? 'feder' : 'feder2'}>
                    <Jump when={this.state.success} delay={1000} duration={4000}>
                        <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </Jump>
                </div>

                <div className={this.state.almost ? 'feder' : 'feder2'}>
                    <HeadShake when={this.state.almost} count={2} duration={2000}>
                    <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </HeadShake>
                </div>

                </div>
                </section>
    )}
}

export default Level1