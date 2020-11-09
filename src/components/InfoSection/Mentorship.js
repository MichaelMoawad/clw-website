import React from 'react'
import {ButtonExt} from '../ButtonElements'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'


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
                            <BtnWrap>
                                <ButtonExt to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1 : 0}
                                href="https://bit.ly/3hBT88N"
                                target="_blank"
                                >{buttonLabel}</ButtonExt>
                            </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}/>
                            {/* <Img src={img} alt={alt} style={{width: "600px", height: "500px"}}/> */}
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
