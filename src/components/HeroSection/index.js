import React, { useState } from 'react'
import Video from '../../videos/video-1.mp4'
// import {Button} from '../ButtonElements'
import HeroButton from '../HeroButton'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Coptic Lawyers Worldwide</HeroH1>
                <HeroP>
                "But do not forget to do good and to share, for with such sacrifices God is well pleased."
                </HeroP>
                <HeroP>
                    Hebrews 13:16
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
                {/* <HeroBtnWrapper>
                    <HeroButton to="contact" onMouseEnter={onHover} onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    id="section05"
                    className="demo"
                    >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroButton>
                </HeroBtnWrapper> */}
            </HeroContent>
                <HeroButton />
        </HeroContainer>
    )
}

export default HeroSection
