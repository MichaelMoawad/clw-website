import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjProfiles } from '../components/InfoSection/Data'
import About from '../components/InfoSection/About'
import Mentorship from '../components/InfoSection/Mentorship'
import Contact from '../components/InfoSection/Contact'
import Navbar from '../components/Navbar'
import Profiles from '../components/Profiles'
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
            <About {...homeObjOne}/>
            <Mentorship {...homeObjTwo}/>
            <Profiles {...homeObjProfiles}/>
            <Contact {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
