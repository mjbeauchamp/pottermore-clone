import React from 'react'
import RubberBand from 'react-reveal/RubberBand';
import {SketchField, Tools} from 'react-sketch';

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
            visible: true
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
            if(finalPoints >= 15 ){
                console.log('Great job Harry!!')
                this.setState({ 
                    success: true,
                    visible: false
                })
            } else if (finalPoints >= 5) {
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
    render() {
    return(
        <section className='spell-section'>
                <div className='spell-box'>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-1 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-2 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-3 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-4 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-5 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-6 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-7 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="level2-29 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'a')} className="level2-8 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'b')} className="level2-9 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'c')} className="level2-10 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'d')} className="level2-11 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'e')} className="level2-12 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'f')} className="level2-13 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'g')} className="level2-14 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'h')} className="level2-15 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'i')} className="level2-16 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'j')} className="level2-17 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'k')} className="level2-18 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'l')} className="level2-19 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'m')} className="level2-20 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'n')} className="level2-21 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'o')} className="level2-22 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="level2-23 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="level2-24 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="level2-25 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="level2-26 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="level2-27 invisible"></div>
                    <div onMouseEnter={this.spellFinished} className="level2-28 invisible"></div>
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
                    <RubberBand when={this.state.success} >
                        <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </RubberBand>
                </div>

                {/* <div className={this.state.almost ? 'feder' : 'feder2'}>
                    <HeadShake when={this.state.almost} count={2} duration={2000}>
                    <img src="https://vignette.wikia.nocookie.net/tractors/images/4/40/Feather.svg/revision/latest?cb=20130119142802" alt=""/>
                    </HeadShake>
                </div> */}

                </div>
                </section>
    )}
}

export default Level1