import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

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
const KeywordsContainer = styled.div`
    width: 560px;
    height: 240px;
    position: absolute;
    z-index: 1;
    right: 10%;
    top: 70%;
    text-align: right;

    @media (max-width: 959px) {
        position: relative;
        width: 90%;
        left: 5%;
    }

    @media (max-width: 450px) {
        transform: scale(0.7);
    }

    @media (max-height: 900px) {
        top: 60%;
    }

    .keywords__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    p {
        color: white;
        font-style: italic;
        position: absolute;
    }

    #javascript {
        font-size: 96px;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        @media (max-width: 579px) {
            font-size: 80px;
        }
    }

    #react {
        top: 5%;
        right: 5%;
        font-size: 48px;
    }

    #sass {
        bottom: 8%;
        left: 45%;
        font-size: 64px;
        transform: translateX(-50%);
        @media (max-width: 579px) {
            font-size: 48px;
        }
        @media (max-width: 450px) {
            bottom: 17%;
        }
    }

    #vue {
        bottom: 5%;
        left: 5%;
        font-size: 56px;
    }

    #graphql {
        right: 5%;
        bottom: 5%;
        font-size: 38px
    }

    #accessibility{
        left: 2%;
        top: 2%;
        font-size: 40px;
        @media (max-width: 450px) {
            left:0;
            font-size: 32px;
        }
    }

    #ssr {
        top: 25%;
        left: 30%;
        font-size: 30px
    }
`;

class Keywords extends Component {
    render() {
        return (
            <KeywordsContainer>
                <div className="keywords__wrapper">
                    {keywords.map((item, i) => {
                        return (
                            <Spring key={i} config={{ duration: 3000, delay: i * 700 }} from={{ opacity: 0 }} to={{ opacity: item.opacity }}>
                                {props => <p id={item.name.toLowerCase()} style={props}>{item.name}</p>}
                            </Spring>
                        )
                    })}
                </div>
            </KeywordsContainer>
        );
    }
}

export default Keywords;