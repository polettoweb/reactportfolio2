import React, {Component} from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Navigation from './Navitation';
import MenuItem from './MenuItem';
import logo from '../../img/logo.svg';

const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
    width: 36px;
    height: 36px;
    align-self: center;
    margin-right: 20px;
    position: absolute;
    top: 36px;
    left: 36px;
    
    @media (max-width: 480px) {
        top: 8px;
        left: 8px;
    }

    img {
        width: auto;
        height: 100%;
    }
`;


class Header extends Component {
    render() {
        return (
            <HeaderStyle>
              <Logo>
                  <a href="/" title="Back to the Homepage"><img src={logo} alt="logo" /></a>
              </Logo>
              <MediaQuery query="(min-width: 1024px)">
                <Navigation />
              </MediaQuery>
              <MediaQuery query="(max-width: 1023px)">
                <MenuItem>
                    <Navigation />
                </MenuItem>
              </MediaQuery>
            </HeaderStyle>
        )
    }
}

export default Header;