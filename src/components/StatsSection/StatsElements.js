import styled from 'styled-components'

export const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0;
`

export const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 200px 80px;
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