import React from 'react';
import Navigation from '../Navbar'
import Level1 from './Levels/Level1'
import Level2 from './Levels/Level2'

export default class CastSpell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            level1: false,
            level2: false,
            level3: false
        }
    }
  
    render() {
        return(
            <div className='castSpell'>
            <section className='navigation'>
                <Navigation {...this.props}/>
            </section>
            <section className='spell-nav'>
            <div>
                <ul>
                    <li>level-1</li>
                    <li>level-2</li>
                    <li>level-3</li>
                </ul>
            </div>
            </section>
                {/* <Level1/> */}
                <Level2/>
            </div>
        )
    }
}