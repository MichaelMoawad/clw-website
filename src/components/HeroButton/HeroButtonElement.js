import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const HeroBtnContainer = styled.div`
    width: 500px;
    display:flex;
    justify-content: center;
`

export const HeroBtn = styled(LinkS)`
    padding-top: 70px;
    position: absolute;
    bottom: 100px;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
    letter-spacing: .1em;
    text-decoration: none;
    transition: opacity .3s;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        bottom: 20px;
    }

    /* @media screen and (max-width: 480px) {
        bottom: 20px;
    } */
`

export const HeroSpan = styled.span`
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb05 1.5s infinite;
    animation: sdb05 1.5s infinite;
    box-sizing: border-box;


    @-webkit-keyframes sdb05 {
        0% {
        -webkit-transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
        }
        50% {
        opacity: 1;
        }
        100% {
        -webkit-transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
        }
    }
    @keyframes sdb05 {
        0% {
        transform: rotate(-45deg) translate(0, 0);
        opacity: 0;
        }
        50% {
        opacity: 1;
        }
        100% {
        transform: rotate(-45deg) translate(-20px, 20px);
        opacity: 0;
        }
    }
`

