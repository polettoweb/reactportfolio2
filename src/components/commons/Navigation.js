import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%) !important;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
`;



const NavComponent = styled.nav`
    /* height: 100%;
    width: 100%;
    line-height: 50px;
    transition: height 0.4s ease-in-out;

    ul {
        display: flex;
        justify-content: flex-end;
        height: 100%;

        li {
            font-weight: 700;
            transition: all 0.4s ease-in-out;
            margin-right: 20px;

            &:hover {
                background-color: rgba(darken($azure, 30%), 0.5);
            }

            a {
                display: block;
                width: 100%;
                height: 100%;
                color: #fff;
                text-decoration: none;
            }
        }
    } */
`;
const MenuStyles = {
    bmMenuWrap: {
       width: '100%'
    },
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#ffffff'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'none'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
class Navigation extends Component {
    render() {
      return (
          <Menu right styles={ MenuStyles }>
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
        </Menu>
      );
    }
  }

  export default Navigation;