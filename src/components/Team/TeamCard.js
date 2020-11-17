import React from 'react'

import { TeamContent, TeamIcon, TeamH2, TeamsHeading, SocialIcons, TeamSocialIconLink, TeamP } from './TeamElements'
import { FaLinkedin } from 'react-icons/fa'

const TeamCard = ( {TeamPic, TeamName, TeamText, TeamLinkedin} ) => {
    return (
        <TeamContent>
            <TeamIcon src={TeamPic} alt="Mark"/>
            <TeamsHeading>
                <TeamH2>{TeamName}</TeamH2>
                <SocialIcons>
                    <TeamSocialIconLink href={TeamLinkedin} target="_blank" aria-label="Linkedin">
                        <FaLinkedin/>
                    </TeamSocialIconLink>
                </SocialIcons> 
            </TeamsHeading>
                    <TeamP>{TeamText}</TeamP>
        </TeamContent>
    )
}

export default TeamCard
