import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjProfiles } from '../components/InfoSection/Data'
<<<<<<< HEAD
import InfoSection from '../components/InfoSection/index'
import Stats from '../components/StatsSection'
=======
import About from '../components/InfoSection/About'
import Mentorship from '../components/InfoSection/Mentorship'
import Contact from '../components/InfoSection/Contact'
>>>>>>> sections-re-structure
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
<<<<<<< HEAD
            <InfoSection {...homeObjOne}/>
            <Stats />
            <InfoSection {...homeObjTwo}/>
=======
            <About {...homeObjOne}/>
            <Mentorship {...homeObjTwo}/>
>>>>>>> sections-re-structure
            <Profiles {...homeObjProfiles}/>
            <Contact {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
