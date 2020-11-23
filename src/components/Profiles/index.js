import React from 'react'
import {Button} from '../ButtonElements'


import markPhoto from '../../images/mark-circle-cropped.png'
import samPhoto from '../../images/sam-circle-cropped.png'

// import Icon1 from '../../images/svg-1.svg'
// import Icon2 from '../../images/svg-2.svg'
// import Icon3 from '../../images/svg-3.svg'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, StatsContainer, StatsWrapper, StatsImg, StatsSubtitle} from '../InfoSection/InfoElements'

import Profile1 from '../../images/profile-1.JPG'
import Profile2 from '../../images/profile-2.JPG'
import Profile3 from '../../images/profile-3.JPG'
import Profile4 from '../../images/profile-4.JPG'
import Profile5 from '../../images/profile-5.JPG'
import Profile6 from '../../images/profile-6.JPG'
import Profile7 from '../../images/profile-7.JPG'
import Profile8 from '../../images/profile-8.JPG'
import Profile9 from '../../images/profile-9.JPG'

import { ProfilesContainer, ProfilesH1, ProfilesWrapper, TeamWrapper } from './ProfilesElements'
import Card from './Card'
// import TeamCard from './TeamCard'

const Profiles = ( {primary, dark, dark2} ) => {
    return (
        <ProfilesContainer >
        
            <ProfilesH1>Our Profiles</ProfilesH1>
            <ProfilesWrapper>
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/john-asaad/"
                    ProfilePic={Profile1}
                    ProfileName="John Asaad"
                    ProfileText="John is a barrister in chambers in London.

                    He has a broad practice in areas including commercial law, general civil law, personal injury law and family law.
                    
                    John also regularly acts on behalf of government bodies such as the Ministry of Defence and Ministry of Justice."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/majd-dahdah-76793719b/"
                    ProfilePic={Profile2}
                    ProfileName="Majd Dahdah"
                    ProfileText="Majd Dahdah initially graduated from The University of Manchester with an MEng in Civil Engineering. He then decided to pursue a career in law and has recently completed his Graduate Diploma in Law (GDL) at BPP University in Manchester. He is going into his final year to complete the Legal Practice Course (LPC) at BPP University."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/marina-choucrallah-b-sc-hons-ll-l-j-d-27b3a9171/"
                    ProfilePic={Profile3}
                    ProfileName="Marina Hani"
                    ProfileText="Marina Hani studied Law at the University of Ottawa and is now a member of the Law Society of Ontario. She completed her articles in a leading Criminal and Child Protection Law firm in Ottawa before moving her practice to Personal Injury and Medical Malpractice."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/sandysamyaziz/"
                    ProfilePic={Profile4}
                    ProfileName="Sandy Aziz"
                    ProfileText="Sandy Aziz is a Texas-qualified lawyer and also a member of the Brussels bar (B-list). She works as a knowledge development lawyer and associate for an international law firm in London."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/marina-iskander-61978a125/"
                    ProfilePic={Profile5}
                    ProfileName="Marina Iskander"
                    ProfileText="Marina Iskander is a case handler and Head of Division at the Egyptian Competition Authority."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/caroline-keryakas/"
                    ProfilePic={Profile6}
                    ProfileName="Caroline Keryakas"
                    ProfileText="Caroline completed her Bachelor of Civil Law at the University of Sherbrooke. She is a member of the Quebec Bar and she recently completed her Juris Doctor degree at the University of Montreal. She is also a Christian Legal Fellowship (CLF) member."
                />     
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/sherif-saad-7087aa177/"
                    ProfilePic={Profile7}
                    ProfileName="Sherif Saad"
                    ProfileText="Sherif Saad is a trainee solicitor at a US international law firm in London. Sherif completed his LLB law degree and Legal Practice Course (LPC) at the Univeristy of Sheffield."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/talyesq/"
                    ProfilePic={Profile8}
                    ProfileName="Taly Goody"
                    ProfileText="Taly Goody is the founder and attorney of @goodylawgroup , LLP. She was raised by Iranian immigrant parents in Los Angeles, California and is fluent in Farsi. She is licensed to practice law in the state of California."
                />
                <Card 
                    ProfileLinkedin="https://www.linkedin.com/in/dmostokly12345/"
                    ProfilePic={Profile9}
                    ProfileName="David Mostokly"
                    ProfileText="David Mostokly was admitted to the legal profession as an Australian Lawyer and an Officer of the Supreme Court of Victoria in 2017, after having completed his Bachelor of Laws (Honours) (LL.B) at Deakin University amongst the top 20% of his graduating cohort."
                />     
            </ProfilesWrapper>
            {/* <ProfilesH1>Founders</ProfilesH1> */}
            {/* <TeamWrapper>
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
            </TeamWrapper> */}
            {/* <BtnWrap>
                <Button to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1: 0}
                    dark2={dark2 ? 1 : 0}
                    >Show More
                </Button>
            </BtnWrap> */}
        </ProfilesContainer>
    )
}

export default Profiles
