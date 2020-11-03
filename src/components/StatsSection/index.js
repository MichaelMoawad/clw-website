import React from 'react'

import {StatsContainer, StatsWrapper, StatsImg, StatsSubtitle} from './StatsElements'

const Stats = () => {
    return (
        <StatsContainer>
            <StatsWrapper>
                <StatsImg src={StatsImg1} alt={alt} style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>2,500 followers since launching in June 2020</StatsSubtitle>
            </StatsWrapper>
            <StatsWrapper>
            <StatsImg src={StatsImg2} alt={alt} style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>Covering 15 jurisdictions</StatsSubtitle>
            </StatsWrapper>
            <StatsWrapper>
            <StatsImg src={StatsImg3} alt={alt} style={{width: "150px", height: "150px"}}/>
                <StatsSubtitle>Network in over 30 specialisms</StatsSubtitle>
            </StatsWrapper>
        </StatsContainer>
    )
}

export default Stats
