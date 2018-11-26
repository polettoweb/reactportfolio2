import React, {Component} from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
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
                  <img src={logo} alt="logo" />
              </Logo>
              <Navigation />
            </HeaderStyle>
        )
    }
}

export default Header;