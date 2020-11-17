import React from 'react'
import { TeamContainer, TeamH1, TeamWrapper } from './TeamElements'
import TeamCard from './TeamCard'

import markPhoto from '../../images/mark-circle-cropped.png'
import samPhoto from '../../images/sam-circle-cropped.png'

const Team = () => {
    return ( 
        <TeamContainer>
            <TeamH1>Founders</TeamH1>
            <TeamWrapper>
                <TeamCard 
                    TeamPic={markPhoto} 
                    TeamName="Mark Dimitri" 
                    TeamLinkedin="https://www.linkedin.com/in/mark-dimitri-7331b6152/"
                    TeamText="Final Year Law Student (with a year abroad) at the University of Leicester"/>
                <TeamCard 
                    TeamPic={samPhoto} 
                    TeamName="Samuel Dimitri" 
                    TeamLinkedin="https://www.linkedin.com/in/samuel-dimitri/"
                    TeamText="Finance Litigation Paralegal at Addleshaw Goddard"
                />
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team
