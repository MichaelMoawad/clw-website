import styled from 'styled-components'

export const ProfilesContainer = styled.div`
    height: auto;
    min-height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #181C25;

    @media screen and (max-width: 768px) {
        height: 1100px;
        min-height: 3000px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
        min-height: 3000px;
    }
`

export const ProfilesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
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
    grid-template-rows: 400px 400px;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 400px 400px 400px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 420px 420px 420px 420px 420px 420px;
        padding: 0 20px;
    }
`

export const ProfilesCard = styled.div`
    position: relative;
    height: 300px;
`

export const ProfilesFaceOne = styled.div`
    position: relative;
    background: #282F3E;
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
    background-color: #282F3E;
    border-radius: 5px;
`

export const ProfilesContentTwo = styled.div`
`


export const ProfilesIcon = styled.img`
    height: 300px;
    max-width: 300px;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const ProfilesH2 = styled.h2`
    color: #fff;
    font-size: 1.3rem;
    padding: 0;
    text-align: center;
`

export const ProfilesExpandBtn = styled.a`
    transition: 0.2s;
    margin: 15px 0 0;
    display: inline-block;

    text-decoration: none;
    text-align: center;
    font-weight: 900;
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    width: -webkit-fill-available;

    &:hover {
        transition: 0.2s;
        color: #EDBE5A;
        cursor: pointer;
    }
`


