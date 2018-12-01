import React, { Component } from 'react';
import styled from "styled-components";

const SocialsStyle = styled.div`
    display:flex;

    a {
        width: 45px;
        height: 100%;
        line-height: 80px;
        display: inline-block;
        text-align: center;

        i {
            line-height: 80px;
            font-size: 24px;
            transition: all 0.2s linear;
            color: #ffffff;
            @media (max-width: 579px) {
                font-size: 32px;
            }

            &.ion-social-github {
                &:hover {
                    color: #cccccc;
                }
            }
            &.ion-social-twitter {
                &:hover{
                    color: #50ABF1;
                }
            }
            &.ion-social-googleplus {
                &:hover{
                    color: #DD4B39;
                }
            }
            &.ion-social-linkedin {
                &:hover{
                    color: #0084B1;
                }

            }
        }
    }
`;

class Socials extends Component {
    render() {
        return (
            <SocialsStyle>
                <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-github"></i></a>
                <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                <a href="mailto:marco@marcopoletto.eu" title="Contact me via email"><i className="ion-email"></i></a>
            </SocialsStyle>
        );
    }
}

export default Socials;