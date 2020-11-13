import React from 'react'
// import './HeroButtonStyling.css'

import { HeroBtnContainer, HeroBtn, HeroSpan } from './HeroButtonElement'

const HeroButton = () => {
    return (
        <HeroBtnContainer>
            <HeroBtn
                to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
            >
                <HeroSpan></HeroSpan>
                See More
            </HeroBtn>
        </HeroBtnContainer>
        // <section id="section05" class="demo">
        //     <a href="#about"><span></span>See More</a>
        // </section>
    )
}

export default HeroButton
