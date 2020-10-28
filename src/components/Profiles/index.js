import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

import Profile1 from '../../images/profile-1.JPG'
import Profile2 from '../../images/profile-2.JPG'
import Profile3 from '../../images/profile-3.JPG'
import Profile4 from '../../images/profile-4.JPG'
import Profile5 from '../../images/profile-5.JPG'
import Profile6 from '../../images/profile-6.JPG'

import { ProfilesContainer, ProfilesH1, ProfilesWrapper, ProfilesCard, ProfilesIcon, ProfilesH2, ProfilesP} from './ProfilesElements'



const Profiles = () => {
    return (
        <ProfilesContainer id="profiles">
            <ProfilesH1>Our Profiles</ProfilesH1>
            <ProfilesWrapper>
                <ProfilesCard>
                    <ProfilesIcon src={Profile1}/>
                    <ProfilesH2>John Asaad</ProfilesH2>
                    <ProfilesP>You can access our platform online anywhere in the world.</ProfilesP>
                    {/* <ProfilesP>John is a barrister in chambers in London. He has a broad practice in areas including commercial law, general civil law, personal injury law and family law. </ProfilesP><br></br><ProfilesP>John also regularly acts on behalf of government bodies such as the Ministry of Defence and Ministry of Justice.</ProfilesP><br></br><ProfilesP>John also regularly acts on behalf of government bodies such as the Ministry of Defence and Ministry of Justice.</ProfilesP> */}
                </ProfilesCard>
                <ProfilesCard>
                    <ProfilesIcon src={Profile2}/>
                    <ProfilesH2>Virtual Offices</ProfilesH2>
                    <ProfilesP>You can access our platform online anywhere in the world.</ProfilesP>
                </ProfilesCard>
                <ProfilesCard>
                    <ProfilesIcon src={Profile3}/>
                    <ProfilesH2>Premium benifits</ProfilesH2>
                    <ProfilesP>Unlock our special membership card that returns 5% cash back.</ProfilesP>
                </ProfilesCard>
            </ProfilesWrapper>
            <ProfilesWrapper>
                <ProfilesCard>
                    <ProfilesIcon src={Profile4}/>
                    <ProfilesH2>Reduce expenses</ProfilesH2>
                    <ProfilesP>We help reduce your fees and increase your overall revenue.</ProfilesP>
                </ProfilesCard>
                <ProfilesCard>
                    <ProfilesIcon src={Profile5}/>
                    <ProfilesH2>Virtual Offices</ProfilesH2>
                    <ProfilesP>You can access our platform online anywhere in the world.</ProfilesP>
                </ProfilesCard>
                <ProfilesCard>
                    <ProfilesIcon src={Profile6}/>
                    <ProfilesH2>Premium benifits</ProfilesH2>
                    <ProfilesP>Unlock our special membership card that returns 5% cash back.</ProfilesP>
                </ProfilesCard>
            </ProfilesWrapper>
        </ProfilesContainer>
    )
}

export default Profiles
