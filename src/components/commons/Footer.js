import React, {Component} from 'react';
import styled from "styled-components";
import Socials from "../partials/Socials";

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0 36px;
    height: 80px;
`;

const FooterCopy = styled.div`
    height: 100%;
    line-height: 80px;
    color: #ffffff;
    font-size: 14px;
`;
class Footer extends Component {
    setCopyrightDate() {
        var year = new Date().getFullYear();
        return year;
    }
    render() {
      return (
        <FooterStyle>
            <FooterCopy>
                <p>&copy; {this.setCopyrightDate()} Marco Poletto</p>
            </FooterCopy>
            <Socials />
        </FooterStyle>
      );
    }
  }

  export default Footer;