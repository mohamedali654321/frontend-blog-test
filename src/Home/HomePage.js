import React from 'react'
import Hero from './Hero';
import Logo from './Logo';
import Review from './Review';

import Slice from './Slice';
import Steps from './Steps';
// import StepWrapper from './StepWrapper';



function HomePage() {
    return (
        <div>

<Hero/>
    
    <Logo/>
    <Slice/>
    <Steps/>
    {/* <StepWrapper/> */}

    <Review/>
    
   
        </div>
    )
}

export default HomePage
