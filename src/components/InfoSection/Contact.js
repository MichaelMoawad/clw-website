import React from 'react'
import {Button} from '../ButtonElements'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from '../Footer/FooterElements'

import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FiMail } from "react-icons/fi";

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, description3, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description1}</Subtitle>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>
                            <SocialIcons style={{paddingTop: "20px"}}>
                                <SocialIconLink href="mailto:copticlawyersworldwide@gmail.com" target="_blank" aria-label="Linkedin">
                                    <FiMail/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.facebook.com/CopticLawyersWorldwide" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/copticlawyersworldwide/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/company/copticlawyersworldwide/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            </SocialIcons>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}/>
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
