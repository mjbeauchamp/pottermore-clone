import React from 'react';
import Navigation from '../Navbar'
import Level1 from './Levels/Level1'
import Level2 from './Levels/Level2'
import Level3 from './Levels/Level3'
import makeCarousel from 'react-reveal/makeCarousel'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import styled, { css } from 'styled-components';
import level1svg from '../Home/img/level1'
import level2svg from '../Home/img/level2'
import level3svg from '../Home/img/level3'
import Particles from 'react-particles-js'
import snow from '../Home/img/Particle'


const width = '700px', height='500px';
const Container = styled.div`
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpaperstudio10.com/static/wpdb/wallpapers/1000x563/197316.jpg');
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 50px 10px #c2c2c2;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 50%;
    left: 50%;
    padding: 20px;
    transform: translate(-50%, -40%);
    overflow: hidden;
    width: ${width};
    height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const btn = styled.div`
    font-size: 30px;
`

const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);


export default class CastSpell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level1: false,
            level2: false,
            level3: false
        }
    }

    handleLevel1 = () => {
        this.setState({ 
            level1: true,
            level2: false,
            level3: false,
         })
    }

    handleLevel2 = () => {
        this.setState({ 
            level1: false,
            level2: true,
            level3: false,
         })
    }
    handleLevel3 = () => {
        this.setState({ 
            level1: false,
            level2: false,
            level3: true,
         })
    }
    handleSpellsList = () => {
        this.setState({
            level1: false,
            level2: false,
            level3: false
        })
    }
    render() {
        var level, level2, level3;
        if(this.state.level1){
            level = <div className={this.state.level1 ? 'show-levels' : 'hide-levels'}>
                    <Fade duration={2000}>
                        {snow}
                        <Level1 handleSpellsList={this.handleSpellsList}/>
                    </Fade>
            </div>;
        } else if (this.state.level2) {
            level2 =  <div className={this.state.level2 ? 'show-levels' : 'hide-levels'}>
                    <Fade duration={4000}>
                        {snow}
                        <Level2 handleSpellsList={this.handleSpellsList}/>
                    </Fade>
            </div>
        } else if (this.state.level3) {
            level3 = <div className={this.state.level3 ? 'show-levels' : 'hide-levels'}>
                    <Fade duration={4000}>
                        {snow}
                        <Level3 handleSpellsList={this.handleSpellsList}/>
                    </Fade>
        </div>
        }
        return(
            <div className='castSpell'>
                <div className={this.state.level1 || this.state.level2 || this.state.level3 ? 'castspell-nav-container' : false}>
                <Navigation {...this.props}/>
                </div>
            <section className='castspell-background'>
            <Carousel defaultWait={300000}>

                <Slide right>
                    <div className='castspell-container'>
                        <div className='level-1-svg'>
                            {level1svg}
                        </div>
                        <Fade duration={8000}>
                            <div className='spell-name'>
                                <p className='pp' onClick={this.handleLevel1} >Wingardium Leviosa</p>
                            </div>
                        </Fade >
                    </div>
                </Slide>

                <Slide right>
                    <div className='castspell-container'>
                        <div className='level-1-svg'>
                            {level3svg}
                        </div>
                        <Fade duration={8000}>
                            <div className='spell-name'>
                                <p className='pp' onClick={this.handleLevel2} >Bufonem Emittunt</p>
                            </div>
                        </Fade >
                    </div>
                </Slide>

                <Slide right>
                    <div className='castspell-container'>
                        <div className='level-1-svg'>
                            {level2svg}
                        </div>
                        <Fade duration={8000}>
                            <div className='spell-name'>
                                <p className='pp' onClick={this.handleLevel3} >Lumos</p>
                            </div>
                        </Fade >
                    </div>
                </Slide>
            </Carousel>
                <section className='try-spell'>
                    {level}
                    {level2}
                    {level3}
                </section>
            </section>
            </div>
        )
    }
}