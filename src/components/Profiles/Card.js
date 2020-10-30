import React, { useState } from 'react'
import { ProfilesCard, ProfilesFaceOne, ProfilesContentOne, ProfilesIcon, ProfilesH2, ProfilesExpandBtn, ProfilesFaceTwo, ProfilesContentTwo, ProfilesP} from './ProfilesElements'


const Card = ( {ProfilePic, ProfileName, ProfileText, textHeight}) => {
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
                            <ProfilesIcon src={ProfilePic}/>
                            <ProfilesH2>{ProfileName}</ProfilesH2>
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
