import React, { useState, useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import Logo from '../../images/CLW-Logo-w-text.png'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> 
                        <img src={Logo} alt="Logo" style={{width: "140px"}}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars style={{color: "#EDBE5A"}}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="copticchurch"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Coptic Church</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="mentorship"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Mentorship</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="profiles"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Profiles</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

