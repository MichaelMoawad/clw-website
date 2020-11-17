import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: auto;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #181C25; */
    background: #EAECEC;
    /* background: #EDBE5A; */

    @media screen and (max-width: 1000px) {
        min-height: 400px;
    }

    @media screen and (max-width: 768px) {
        /* height: 2200px; */
        min-height: 400px;
    }

    @media screen and (max-width: 480px) {
        height: 950px;
        min-height: 800px;
    }
`

export const TeamContent = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    max-width: 800px;
    height: 100%;
    /* background-color: #D3D4D4; */
    /* background-color: #EDBE5A; */
    border-radius: 5px;
    padding-bottom: 20px;
`

export const TeamsHeading = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid: 25px / 220px 50px;
    grid-gap: 16px;
    padding: 30px;
    padding-left: 60px;
    padding-right: 10px;
`

export const TeamP = styled.p`
    font-size: 1em;
    text-align: center;
    margin: 0;
    padding: 0;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 880px) {
        padding-left: 100px;
        padding-right: 100px;
    }

    @media screen and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const TeamIcon = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    border-radius: 500px;
    border: 5px solid #3D3D3D;

    @media screen and (max-width: 880px) {
        width: 55%;
    }

    @media screen and (max-width: 768px) {
        width: 55%;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 420px;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px 40px;

    @media screen and (max-width: 880px) {
        grid-template-columns: 1fr;
        grid-template-rows: 620px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 420px;
        padding: 0 20px;
        width: 180px;
    }
`

export const TeamH1 = styled.h1`
    font-size: 48px;
    /* color: #fff; */
    color: #010606;
    margin-top: 50px;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-top: 50px;
    }
`

export const TeamH2 = styled.h2`
    color: #3D3D3D;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0;
    text-align: center;
    padding: 0 18px 0;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20px;
`

export const SocialIconLink = styled.a`
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    color: #EAECEC;
    /* color: #333; */
    font-size: 24px;
    padding: 0 3px 0;
    transition: 0.2s;

    &:hover{
        transition: 0.2s;
        color: #FAFAFA;
    }
`

export const TeamSocialIconLink = styled.a`
    display: flex;
    align-items: center;
    position: absolute;
    /* right: 12px; */
    /* color: #EAECEC; */
    color: #333;
    font-size: 24px;
    padding: 0 3px 0;
    transition: 0.2s;

    &:hover{
        transition: 0.2s;
        color: #EDBE5A;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`