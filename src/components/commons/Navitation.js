import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    @media (max-width: 1023px) {
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const NavComponent = styled.div`
    width: 100%;
    /* @media (max-width: 1023px) {
        height: 500px;
    } */
    ul {
        display: flex;
        justify-content: flex-end;
        height: auto;
        
        @media (max-width: 1023px) {
            flex-direction: column;
        }
        li {
            font-weight: 500;
            transition: all 0.4s ease-in-out;
            margin-right: 20px;
            line-height: 80px;
            position: relative;
            @media (max-width: 1023px) {
                height: 80px;
                margin-right: 0;
            }

            &:after {
                content: '';
                background-color: white;
                position: absolute;
                width: 0;
                left: 50%;
                height: 2px;
                bottom: 20px;
                transition: all 0.3s ease-in-out;
                @media (max-width: 1023px) {
                    content: none;
                }
            }

            &:hover {
                &:after {
                    width: 100%;
                    left: 0;
                }
            }

            a {
                display: block;
                width: 100%;
                height: 100%;
                color: #fff;
                text-decoration: none;
            }
        }
    }
`;
class Navitation extends Component {
    render() {
        return (
            <Nav>
                <NavComponent>
                    <ul>
                        <li><Link to="/" title="Home">Home</Link></li>
                        <li><Link to="/portfolio" title="Portfolio">Portfolio</Link></li>
                        <li><Link to="/blog" title="Blog">Blog</Link></li>
                        <li><Link to="/workshop" title="Workshop">Workshop</Link></li>
                        <li><Link to="/resume" title="Resume">Resume</Link></li>
                    </ul>
                </NavComponent>
            </Nav>
        );
    }
}

export default Navitation;