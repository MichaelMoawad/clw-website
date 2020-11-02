import React, { useState } from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { ProfilesCard, ProfilesFaceOne, ProfilesContentOne, ProfilesIcon, ProfilesHeading, ProfilesH2, ProfilesExpandBtn, ProfilesFaceTwo, ProfilesContentTwo, ProfilesP, SocialIcons, SocialIconLink} from './ProfilesElements'


const Card = ( {ProfilePic, ProfileName, ProfileText, textHeight, ProfileLinkedin}) => {
    const [profileActive, setProfileActive] = useState(false)
    const [expandBtnText, setExpandBtnText] = useState("Show More")

    const changeProfile = () => {
        if(profileActive === false){
            setProfileActive(true)
            setExpandBtnText("Show Less")
        } else {
            setProfileActive(false)
            setExpandBtnText("Show More")
        }
    }

    return (
        <ProfilesCard>
            <ProfilesFaceOne profileActive={profileActive}>
                <ProfilesContentOne>
                        <ProfilesIcon src={ProfilePic} onClick={changeProfile}/>
                        <ProfilesHeading>
                            <ProfilesH2>{ProfileName}</ProfilesH2>
                            <SocialIcons>
                                {/* <SocialIconLink href="//www.google.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.google.com" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink> */}
                                {/* <SocialIconLink href="//www.google.com" target="_blank" aria-label="YouTube">
                                    <FaYoutube/>
                                </SocialIconLink> */}
                                {/* <SocialIconLink href="//www.google.com" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink> */}
                                <SocialIconLink href={ProfileLinkedin} target="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons> 
                        </ProfilesHeading>
                    <ProfilesExpandBtn onClick={changeProfile}>
                        {expandBtnText}
                    </ProfilesExpandBtn>
                </ProfilesContentOne>
            </ProfilesFaceOne>
            <ProfilesFaceTwo 
                profileActive={profileActive}
                textHeight={textHeight}>
                <ProfilesContentTwo>
                <ProfilesP>{ProfileText}</ProfilesP>
                </ProfilesContentTwo>
            </ProfilesFaceTwo>
        </ProfilesCard>
    )
}

export default Card
