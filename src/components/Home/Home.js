import React, { Component }  from 'react';
import Wizard from './img/wizard'
import SpinNews from './SpinNews/SpinNews'
import NavBar from '../Navbar'
import { fadeIn, fadeInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const styles = {
    fadeIn: {
      animation: 'x 7s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeInUp: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
  }

 class Home extends Component {
     constructor(props){
         super(props)
     }

     render(){
    return (
        <div className='home'>
        <NavBar {...this.props} />
            <section className='header'>
            <Zoom duration={3000}>
                <div className='header-text'>
                    {Wizard}
                </div>
            </Zoom >    
            </section>
            <section className='store' >
                <div className='spinnews' >
                    <SpinNews  />
                </div>
                <Fade bottom duration={2000}>
                <div className='go-store' >
                    <button>Enter Store</button>
                </div>
                </Fade>
              
            </section>
            
            <section className='news'>
            <Zoom bottom duration={2500}>
            
                <div className='news-paper'>
                    <img src="http://www.oregontraildays.com/images/old-paper-1-clr-nails2.png" alt="paper"/>

                    <div className='daily'>
                        <img className='paper-logo' src="https://s3-us-west-1.amazonaws.com/personal-project-1989/Group-Project/dailyLogo.png" alt=""/>
                        <h1>DAILY PROPHET</h1>
                        <h2>DUMBLEDORE DEAD OR ALIVE?</h2>

                        <div className='news-line_1'>
                            <div className='ginger'>
                                <h3>GINGER WITCH</h3>
                                <p className='just'>Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns. Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns</p>
                            </div>
                            <div className='gif'>
                                <img className='gif-dumbl' src="https://s3-us-west-1.amazonaws.com/personal-project-1989/Group-Project/giphy.gif" alt="dumbledore"/>
                                <p>Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns</p>
                            </div>
                            <div>
                                <h3>FUDGE VOTED</h3>
                                <p>Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patternsHogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns</p>
                            </div>
                        </div>

                        <div className='news-line_2'>
                            <h4>MASS BREAKOUT FROM AZKABAN</h4>
                            <p>Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patternsHogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns</p>
                            <div className='escape'>
                                <div>
                                    <h3>ESCAPE FROM AZKABAN</h3>
                                    <p>Hogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patternsHogwarts Headmaster, founder of the Order of the Phoenix, with a fondness for sherbet lemons and knitting patterns</p>
                                </div>
                                <img src="https://s3-us-west-1.amazonaws.com/personal-project-1989/Group-Project/sirius.gif" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                </Zoom>
            </section>
        </div>
    )}
}
export default Home