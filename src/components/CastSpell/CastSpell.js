import React from 'react';
import Navigation from '../Navbar'
import Level1 from './Levels/Level1'
import Level2 from './Levels/Level2'
import Level3 from './Levels/Level3'
import makeCarousel from 'react-reveal/makeCarousel'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide'
import styled, { css } from 'styled-components';


const width = '700px', height='500px';
const Container = styled.div`
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
                    <Zoom duration={1500}>
                        <Level1/>
                    </Zoom>
            </div>;
        } else if (this.state.level2) {
            level2 =  <div className={this.state.level2 ? 'show-levels' : 'hide-levels'}>
                    <Zoom duration={1500}>
                        <Level2/>
                    </Zoom>
            </div>
        } else if (this.state.level3) {
            level3 = <div className={this.state.level3 ? 'show-levels' : 'hide-levels'}>
                    <Zoom duration={1500}>
                        <Level3/>
                    </Zoom>
        </div>
        }


        return(
            <div className='castSpell'>
            <section className='navigation'>
                <Navigation {...this.props}/>
            </section>

            <section className='castspell-background'>
            <button onClick={this.handleSpellsList} >back</button>

            <Carousel defaultWait={300000}>
                <Slide right>
                <div>
                    <h1>Slide 1</h1>
                    <p onClick={this.handleLevel1} style={{color: 'white'}}>Level - 1</p>
                </div>
                </Slide>
                <Slide right>
                <div>
                    <h1>Slide 2</h1>
                    <p onClick={this.handleLevel2} style={{color: 'white'}}>Level - 2</p>
                </div>
                </Slide>
                <Slide right>
                <div>
                    <h1>Slide 3</h1>
                    <p onClick={this.handleLevel3} style={{color: 'white'}} >Level - 3</p>
                </div>
                </Slide>
            </Carousel>
                {level}
                {level2}
                {level3}
            </section>
            </div>
        )
    }
}