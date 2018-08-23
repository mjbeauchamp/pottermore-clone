import React from 'react';
import Navigation from '../Navbar'
import Level1 from './Levels/Level1'
import Level2 from './Levels/Level2'
import Level3 from './Levels/Level3'
import Zoom from 'react-reveal/Zoom';

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
            <section className='spell-nav'>
                <div>
                    <ul>
                        <li onClick={this.handleLevel1}>level-1</li>
                        <li onClick={this.handleLevel2}>level-2</li>
                        <li onClick={this.handleLevel3} >level-3</li>
                    </ul>
                </div>
            </section>
            <section className='castspell-background'>
                {level}
                {level2}
                {level3}
            </section>
            </div>
        )
    }
}