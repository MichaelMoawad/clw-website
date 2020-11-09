import React from 'react'

import StatsImg1 from '../../images/social.svg'
import StatsImg2 from '../../images/world.svg'
import StatsImg3 from '../../images/agreement.svg'

import {StatsContainer, StatsWrapper, StatsImg, StatsSubtitle} from './StatsElements'

const Stats = () => {
    return (
        <StatsContainer>
            <StatsWrapper>
                <StatsImg src={StatsImg1} alt="ok" style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>2,500 followers since launching in June 2020</StatsSubtitle>
            </StatsWrapper>
            <StatsWrapper>
            <StatsImg src={StatsImg2} alt="ok" style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>Covering 15 jurisdictions</StatsSubtitle>
            </StatsWrapper>
            <StatsWrapper>
            <StatsImg src={StatsImg3} alt="ok" style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>Network in over 30 specialisms</StatsSubtitle>
            </StatsWrapper>
        </StatsContainer>
    )
}

export default Stats
