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
    @media (max-width: 959px) {
        height: auto;
    }
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

        @media (max-width: 959px) {
            width: 100%;
            position: relative;
            transform: none;
            top:0;
            left: 0;
        }

        @media (max-width:579px) {
            height: auto;
        }

        img {
            display: block;
            height: 100%;
            margin-left: 20px;

            @media (max-width:579px) {
                width: 100%;
                height: auto;
                margin-left: 0;
            }
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

        @media (max-width: 959px) {
            font-size: 2.5em;
            margin-right: 20px;
        }

        @media (max-width: 479px) {
            font-size: 2em;
        }
    }
`;

const Intro = styled.div`
    position: absolute;
    width: 100%;
    padding: 0 10px;
    max-width: 500px;
    left: 50%;
    top: 30%;
    color: white;
    line-height: 30px;

    @media (max-width: 959px) {
        position: relative;
        max-width: 94%;
        margin-left: 3%;
        left: auto;
        margin: 0 auto;
        margin-bottom: 36px;
    }

    @media (min-height: 900px) {
        line-height:35px;
        font-size: 16px;
    }
`;

const keywords = [
    {
        name: 'JavaScript',
        opacity: '1'
    },
    {
        name: 'React',
        opacity: '0.7'
    },
    {
        name: 'Vue',
        opacity: '0.7'
    },
    {
        name:'Accessibility',
        opacity: '0.6'
    },
    {
        name: 'SSR',
        opacity: '0.4'
    },
    {
        name: 'GraphQL',
        opacity: '0.3'
    },
    {
        name: 'Sass',
        opacity: '0.5'
    }
];

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
                <Keywords {...keywords}/>
                <Intro>
                    <p>I create websites from scratch using the latest cutting edge web technologies. Innovation, clean code and pixel perfect results characterize all my projects. With attention to details, I always deliver the best solution to the clients according to their requirements.</p>
                </Intro>

            </HomeContainer>
        );
    }
}

export default Home;
