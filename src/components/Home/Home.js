import React from 'react';
import Wizard from './img/wizard'
import SpinNews from './SpinNews/SpinNews'

 function Home() {
    return (
        <div>
            <section className='header'>
                <div className='header-text'>
                    {Wizard}
                </div>
            </section>
            <section >
                <div className='spinnews' >
                    <SpinNews  />
                </div>
            </section>
            
        </div>
    )
}
export default Home