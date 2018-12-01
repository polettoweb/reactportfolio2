import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

const MenuStyles = styled.div`
    /* Position and sizing of burger button */
    .bm-menu-wrap {
      @media (max-width: 1023px) {
        width: 100% !important;
      }
    }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
    @media (max-width: 480px) {
      top: 8px;
      right: 8px;
    }
  }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #ffffff;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 45px !important;
    width: 45px !important;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    &>span {
      top: 12px !important;
      right: 24px !important;
      bottom: auto !important;
    }
  }
  
  /* Color/shape of close button cross */
  .bm-cross {
    background-color: #ffffff !important;
    height: 25px !important;
  }
  
  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }
  
  /* Individual item */
  .bm-item {
    display: inline-block;
  }
  
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
// var isMenuOpen = function(state) {
//   return state.isOpen
// }
class MenuItem extends Component {
    render() {
      return (
        <MenuStyles>
          <Menu right isOpen={ false }>
            {this.props.children}
          </Menu>
        </MenuStyles>
      );
    }
  }

  export default MenuItem;