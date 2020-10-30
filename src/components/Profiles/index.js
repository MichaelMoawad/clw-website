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

import { ProfilesContainer, ProfilesH1, ProfilesWrapper } from './ProfilesElements'
import Card from './Card'

const Profiles = () => {

    return (
        <ProfilesContainer id="profiles">
            <ProfilesH1>Our Profiles</ProfilesH1>
            <ProfilesWrapper>
                <Card 
                    ProfilePic={Profile1}
                    ProfileName="John Asaad"
                    ProfileText="John is a barrister in chambers in London.

                    He has a broad practice in areas including commercial law, general civil law, personal injury law and family law.
                    
                    John also regularly acts on behalf of government bodies such as the Ministry of Defence and Ministry of Justice."
                />
                <Card 
                    ProfilePic={Profile2}
                    ProfileName="Majd Dahdah"
                    ProfileText="Majd Dahdah initially graduated from The University of Manchester with an MEng in Civil Engineering. He then decided to pursue a career in law and has recently completed his Graduate Diploma in Law (GDL) at BPP University in Manchester. He is going into his final year to complete the Legal Practice Course (LPC) at BPP University."
                />
                <Card 
                    ProfilePic={Profile3}
                    ProfileName="Marina Hani"
                    ProfileText="Marina Hani studied Law at the University of Ottawa and is now a member of the Law Society of Ontario. She completed her articles in a leading Criminal and Child Protection Law firm in Ottawa before moving her practice to Personal Injury and Medical Malpractice."
                />
                <Card 
                    ProfilePic={Profile4}
                    ProfileName="Sandy Aziz"
                    ProfileText="Sandy Aziz is a Texas-qualified lawyer and also a member of the Brussels bar (B-list). She works as a knowledge development lawyer and associate for an international law firm in London."
                />
                <Card 
                    ProfilePic={Profile5}
                    ProfileName="Marina Iskander"
                    ProfileText="Marina Iskander is a case handler and Head of Division at the Egyptian Competition Authority."
                />
                <Card 
                    ProfilePic={Profile6}
                    ProfileName="Bishoy Lastname"
                    ProfileText="Bishoy is a real estate and finance lawyer licensed in Florida and New York who focuses his practice in the areas of complex commercial and residential real estate transactions, including developer, lender, landlord and tenant representation."
                />
                
            </ProfilesWrapper>
        </ProfilesContainer>
    )
}

export default Profiles
