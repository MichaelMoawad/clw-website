import styled from 'styled-components'

export const ProfilesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #181C25;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ProfilesWrapper = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProfilesCard = styled.div`
    background: #202432;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    max-height: 640px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale()(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProfilesIcon = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const ProfilesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProfilesH2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProfilesP = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: left;
`

