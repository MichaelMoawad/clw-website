import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { aboutObj, churchObj, mentorshipObj, contactObj, profilesObj } from '../components/InfoSection/Data'
import About from '../components/InfoSection/About'
import CopticChurch from '../components/InfoSection/CopticChurch'
import Mentorship from '../components/InfoSection/Mentorship'
import Contact from '../components/InfoSection/Contact'
import Navbar from '../components/Navbar'
import Profiles from '../components/Profiles'
import Team from '../components/Team'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <About {...aboutObj}/>
            <CopticChurch {...churchObj}/>
            <Mentorship {...mentorshipObj}/>
            <Team />
            <Profiles {...profilesObj}/>
            <Contact {...contactObj}/>
            <Footer />
        </>
    )
}

export default Home
