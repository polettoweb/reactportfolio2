import React, { Component } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import MediaQuery from 'react-responsive';
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
    height: 500px;
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

    .Tilt {
        width: 500px;
        height: auto;
        position: absolute;
        top: 25%;
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
        /* @media (max-width: 960px) {
            font-size: 2.5em;
            margin-right: 20px;
            text-align: right;
        }
        @media (max-width: 768px) {

        } */
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
                    <MediaQuery query="(min-width: 960px)">
                        <Tilt onMouseLeave={this.handleMouseLeave} className="Tilt" options={{ max: 40, perspective: 1000, reverse: true, onMouseLeave: 'transform: rotateY(40deg)' }}>
                            <img src={me} alt="Marco Poletto" />
                        </Tilt>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 959px)">
                        <div className="Tilt">
                            <img src={me} alt="Marco Poletto" />
                        </div>
                    </MediaQuery>

                    {/* <div> */}
                    <h1>Hi, I'm Marco, <br /><span>Frontend Developer<br />and UI Engineer</span></h1>
                    {/* </div> */}
                </IntroContainer>
                <Keywords />

            </HomeContainer>

        );
    }
}

export default Home;
