import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjProfiles } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/index'
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
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Profiles {...homeObjProfiles}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
