import React from 'react'
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';
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
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-1 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-2 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-3 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-4 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-5 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-6 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e)} className="visible-7 boxes"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'a')} className="box-8 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'b')} className="box-14 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'c')} className="box-9 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'d')} className="box-15 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'e')} className="box-16 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'f')} className="box-10 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'g')} className="box-17 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'h')} className="box-18 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'i')} className="box-19 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'j')} className="box-20 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'k')} className="box-11 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'l')} className="box-21 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'m')} className="box-22 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'n')} className="box-12 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'o')} className="box-23 invisible"></div>
                    <div onMouseEnter={e => this.handleMouseEnter(e,'p')} className="box-24 invisible"></div>
                    <div onMouseEnter={this.spellFinished} className="box-13 invisible"></div>
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
                    <Jump when={this.state.success} duration={5000}>
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