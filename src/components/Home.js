import React, { Component } from 'react';
import styled from 'styled-components';
import Keywords from './partials/Keywords';
import me from '../img/marco.png';


const HomeContainer = styled.div`
    height: calc(100vh - 160px);
    min-height: 610px;
    width: 100vw;
    max-width: 1280px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`;

const IntroContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;

    @media (max-width: 1199px) {
        justify-content: flex-end
    }
    @media (max-width: 960px) {
        flex-direction: column-reverse;
    }

    .tilt {
        width: 500px;
        height: 500px;
        position: absolute;
        top: 20%;
        left: 5%;
        transform: rotateY(40deg);
        background: rgba(255, 255, 255, 0.1);
        @media (max-width: 960px) {
            position: relative;
            transform: none;
            top:0;
            left: 0;
        }
        img {
            display: block;
            height: 100%;
            margin-left: 20px;
        }
    }
    h1 {
        width: 90%;
        max-width: 550px;
        font-size: 3em;
        color: #ffffff;
        text-align: left;
        margin-left:60px;
        @media (max-width: 1199px) {
            margin-left: 0;
        }
        @media (max-width: 960px) {
            font-size: 2.5em;
            margin-right: 20px;
            /* text-align: right; */
        }
        
        /* @media (max-width: 768px) {
            text-align: left;
        } */
        @media (max-width: 480px) {
            font-size: 2em;
        }
    }
`;

class Home extends Component {
    handleMouseLeave(e) {

        setTimeout(function () {
            document.querySelector('.Tilt').style.transform = "rotateY(40deg)";
        }, 0)

    }

    render() {
        return (
            <HomeContainer>
                <IntroContainer>
                    <div className="tilt">
                        <img src={me} alt="Marco Poletto" />
                    </div>
                    <h1>Hi, I'm Marco, <br /><span>Frontend Developer<br />and UI Engineer</span></h1>
                </IntroContainer>
                <Keywords />

            </HomeContainer>

        );
    }
}

export default Home;
