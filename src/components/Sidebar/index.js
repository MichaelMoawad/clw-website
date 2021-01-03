import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="copticchurch" onClick={toggle}>
                        Coptic Community
                    </SidebarLink>
                    <SidebarLink to="mentorship" onClick={toggle}>
                        Mentorship
                    </SidebarLink>
                    <SidebarLink to="profiles" onClick={toggle}>
                        Profiles
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
