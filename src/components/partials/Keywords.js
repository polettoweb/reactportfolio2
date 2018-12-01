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
        name: 'Performance',
        opacity: '0.6'
    },
    {
        name: 'A11y',
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
    bottom: 5%;
    text-align: right;

    @media (max-width: 579px) {
        right: auto;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%) scale(0.7);
        background-color: rgba(255,255,255,0.05);
    }

    @media (max-width: 450px) {
        /* to fucking fix */
        bottom:0;
        transform: translateX(-50%) scale(0.5);
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

    #performance {
        left: 2%;
        top: 2%;
        font-size: 50px
    }

    #a11y {
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
                {/* <Spring config={{ duration: 3000 }} >
                    
                <Spring config={{ duration: 3000, delay: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <p style={props}>React</p>}
                </Spring>
                <Spring config={{ duration: 3000, delay: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <p style={props}>Vue</p>}
                </Spring>
                <Spring config={{ duration: 3000, delay: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <p style={props}>A11y</p>}
                </Spring>
                <Spring config={{ duration: 3000, delay: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <p style={props}>GraphQL</p>}
                </Spring>
                <Spring config={{ duration: 3000, delay: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <p style={props}>Performance</p>}
                </Spring> */}
            </KeywordsContainer>
        );
    }
}

export default Keywords;