import React from 'react'
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import {SketchField, Tools} from 'react-sketch';

class Level2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: [],
            points: 0,
            success: false,
            almost: false,
            fail: false,
            visible: true,
            start: false
        }
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
        console.log(newArray)
        if (newArray === this.state.score.join("")) {
            console.log('yes')
            if(finalPoints >= 18 ){
                console.log('Great job Harry!!')
                this.setState({ 
                    success: true,
                    visible: false
                })
            } else if (finalPoints >= 15) {
                console.log("Almost there!")
                this.setState({ 
                    almost: true,
                    visible: false
                })
            } else {
                console.log('Try harder!')
                this.setState({ fail: true})
            }
        } else {
            console.log('Try harder!')
        }
        console.log(this.state.score.join())
    }

    handleStart = () => {
        this.setState({start: true})
    }
    render() {
        console.log(this.state.visible)
    return(
        <section className='spell-section'>
                <div className='spell-box'>
                    <div className='level2-arrow1'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow2'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow3'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow4'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow5'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow6'><img src={require("./Untitledarrow2.png")} alt=""/></div>
                    <div className='level2-arrow7'><img src={require("./Untitledarrow3.png")} alt=""/></div>
                    <div onClick={this.handleStart} className="level2-start">Click Here To Start</div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-1 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-2 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-3 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-4 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-5 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-6 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-7 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-29 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'a')} className={!this.state.start ? "level2-8 invisible hide-boxes" : 'level2-8 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'b')} className={!this.state.start ? "level2-9 invisible hide-boxes" : 'level2-9 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'c')} className={!this.state.start ? "level2-10 invisible hide-boxes" : 'level2-10 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'d')} className={!this.state.start ? "level2-11 invisible hide-boxes" : 'level2-11 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'e')} className={!this.state.start ? "level2-12 invisible hide-boxes" : 'level2-12 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'f')} className={!this.state.start ? "level2-13 invisible hide-boxes" : 'level2-13 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'g')} className={!this.state.start ? "level2-14 invisible hide-boxes" : 'level2-14 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'h')} className={!this.state.start ? "level2-15 invisible hide-boxes" : 'level2-15 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'i')} className={!this.state.start ? "level2-16 invisible hide-boxes" : 'level2-16 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'j')} className={!this.state.start ? "level2-17 invisible hide-boxes" : 'level2-17 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'k')} className={!this.state.start ? "level2-18 invisible hide-boxes" : 'level2-18 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'l')} className={!this.state.start ? "level2-19 invisible hide-boxes" : 'level2-19 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'m')} className={!this.state.start ? "level2-20 invisible hide-boxes" : 'level2-20 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'n')} className={!this.state.start ? "level2-21 invisible hide-boxes" : 'level2-21 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'o')} className={!this.state.start ? "level2-22 invisible hide-boxes" : 'level2-22 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className={!this.state.start ? "level2-23 invisible hide-boxes" : 'level2-23 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'q')} className={!this.state.start ? "level2-24 invisible hide-boxes" : 'level2-24 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'r')} className={!this.state.start ? "level2-25 invisible hide-boxes" : 'level2-25 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'s')} className={!this.state.start ? "level2-26 invisible hide-boxes" : 'level2-26 invisible show-boxes' }></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'t')} className={!this.state.start ? "level2-27 invisible hide-boxes" : 'level2-27 invisible show-boxes' }></div>
                    <div onMouseEnter={this.spellFinished} className={!this.state.start ? "level2-28 invisible hide-boxes" : 'level2-28 invisible show-boxes' }></div>
                    <SketchField 
                        height='700px'
                        tool={Tools.Pencil} 
                        lineColor='black'
                        lineWidth={10} 
                        blur='10'
                        />
                </div>
                <div className='spell-image'>

                <div className={this.state.visible ? 'feder' : 'feder2'}>
                    <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                </div>

                <div className={this.state.success ? 'feder' : 'feder2'}>        
                    <Fade when={this.state.success} delay={1500} duration={1500} >
                        <img src="https://i.pinimg.com/originals/1d/10/e7/1d10e72e0c5a39af8398489a1adffc38.png" alt=""/>
                    </Fade>
                </div>
                <div className={this.state.almost ? 'feder' : 'feder2'}>
                    <Flash when={this.state.almost} delay={800} duration={2000} >
                        <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </Flash>
                </div>
                    

                {/* </div> */}

                {/* <div className={this.state.almost ? 'feder' : 'feder2'}>
                    <HeadShake when={this.state.almost} count={2} duration={2000}>
                    <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </HeadShake>
                </div> */}

                </div>
                </section>
    )}
}

export default Level2