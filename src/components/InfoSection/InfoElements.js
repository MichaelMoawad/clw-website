import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#EAECEC' : '#181C25')};

    @media screen and (max-width: 768px){
        padding: 100px 0
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1045px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 1280px;
    }
    @media screen and (max-width: 420px){
        height: 1145px;
    }
`

export const InfoWrapperCopticChurch = styled.div`
    display: grid;
    z-index: 1;
    height: 1045px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 1480px;
    }
    @media screen and (max-width: 420px){
        height: 1405px;
    }
`

export const InfoRow = styled.div`
    padding: 80px 0 0;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #EDBE5A;
    font-size: 16px;
    line-height:16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
// About Us Section

export const StatsContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0; */
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 280px 280px 280px;
`

export const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 200px 80px;
    /* padding: 0 30px 0; */
`

export const StatsImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;   

`
export const StatsSubtitle = styled.p`
    padding: 0 30px 0;
    text-align: center;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.4em;
    line-height: 1.4em;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

