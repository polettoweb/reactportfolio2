import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

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
};

class MenuItem extends Component {
    render() {
      return (
          <Menu right styles={ MenuStyles }>
            {this.props.children}
        </Menu>
      );
    }
  }

  export default MenuItem;