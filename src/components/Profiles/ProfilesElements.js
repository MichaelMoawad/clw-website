import styled from 'styled-components'

export const ProfilesContainer = styled.div`
    height: auto;
    min-height: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #181C25; */
    background: #EAECEC;
    /* background: #EDBE5A; */

    @media screen and (max-width: 1000px) {
        min-height: 2200px;
    }

    @media screen and (max-width: 768px) {
        /* height: 2200px; */
        min-height: 4200px;
    }

    @media screen and (max-width: 480px) {
        height: 2200px;
        min-height: 4200px;
    }
`

export const ProfilesH1 = styled.h1`
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

export const ProfilesWrapper = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 420px 420px 420px;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px 40px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 420px 420px 420px 420px 420px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 420px 420px 420px 420px 420px 420px 420px 420px 420px;
        padding: 0 20px;
    }
`

export const ProfilesCard = styled.div`
    transition: 0.2s;
    position: relative;
    height: 300px;
`

export const ProfilesFaceOne = styled.div`
    position: relative;
    /* background: #282F3E; */
    /* background: #D3D4D4; */
    background: #F5DBA3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    width: 300px;
    height: 300px;
    transition: 0.5s;
`

export const ProfilesFaceTwo = styled.div`
    position: relative;
    width: 300px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
    opacity: ${({profileActive}) => (profileActive ? '1' : '0')};
    z-index: ${({profileActive}) => (profileActive ? '10' : '0')};
    transition: 0.5s;
    transform: ${({profileActive}) => (profileActive ? 'translateY(65px)' : 'translateY(0px)')};
`

export const ProfilesP = styled.p`
    margin: 0;
    padding: 0;
`

export const ProfilesContentOne = styled.div`
    /* background-color: #282F3E; */
    background-color: #D3D4D4;
    /* background-color: #EDBE5A; */
    border-radius: 5px;
`

export const ProfilesContentTwo = styled.div`
`

export const ProfilesIcon = styled.img`
    transition: 0.2s;
    opacity: 0.9;
    height: 300px;
    max-width: 300px;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover{
        transition: 0.2s;
        opacity: 1;
        cursor: pointer;
    }
`

export const ProfilesHeading = styled.div`
    display: grid;
    grid: 25px / 250px 50px;
`

export const ProfilesH2 = styled.h2`
    /* color: #fff; */
    /* color: #010606; */
    /* color: #8F8F8F; */
    color: #3D3D3D;
    font-size: 1.2rem;
    padding: 0;
    text-align: left;
    padding: 0 18px 0;
`

export const ProfilesExpandBtn = styled.a`
    transition: 0.2s;
    margin: 15px 0 0;
    display: inline-block;

    text-decoration: none;
    text-align: center;
    font-weight: 900;
    /* background-color: #384156; */
    background-color: #E5E6E6;
    /* color: #fff; */
    /* color: #010606; */
    /* color: #8F8F8F; */
    color: #3D3D3D;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 5px;
    margin: 15px 15px 15px;
    width: -webkit-fill-available;

    &:hover {
        transition: 0.2s;
        /* background-color: #404B63; */
        background-color: #FAFAFA;
        cursor: pointer;
    }
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
    font-size: 24px;
    padding: 0 3px 0;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`