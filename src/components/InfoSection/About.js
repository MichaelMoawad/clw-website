import React from 'react'
import StatsImg1 from '../../images/social-media.svg'
import StatsImg2 from '../../images/world.svg'
import StatsImg3 from '../../images/agreement.svg'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, StatsContainer, StatsWrapper, StatsImg, StatsSubtitle} from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, description3, img, alt}) => {
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
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            {/* <Img src={img} alt={alt} style={{width: "700px"}}/> */}
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                  {/* <StatsContainer>
                      <StatsWrapper>
                          <StatsImg src={StatsImg1} alt={alt} style={{width: "150px", height: "150px"}}/>
                          <StatsSubtitle>2,500 followers since launching in June 2020</StatsSubtitle>
                      </StatsWrapper>
                      <StatsWrapper>
                      <StatsImg src={StatsImg2} alt={alt} style={{width: "150px", height: "150px"}}/>
                          <StatsSubtitle>Covering 15 jurisdictions</StatsSubtitle>
                      </StatsWrapper>
                      <StatsWrapper>
                      <StatsImg src={StatsImg3} alt={alt} style={{width: "150px", height: "150px"}}/>
                          <StatsSubtitle>Network in over 30 specialisms</StatsSubtitle>
                      </StatsWrapper>
                  </StatsContainer> */}
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
