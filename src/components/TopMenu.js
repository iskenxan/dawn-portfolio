import React, { Component } from 'react';
import Logo from '../media/logo.svg';
import Separator from '../media/menu_separator.svg';
import FacebookIcon from '../media/facebook-icon.svg';
import InstagramIcon from '../media/instagram-icon.svg';
import TumblrIcon from '../media/tumblr-icon.svg';
import { withRouter } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';


class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeState: {
        portfolio:true,
        contacts:false,
        about:false,
      }
    };
  }

  onTogglerClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  onNavLink = (path) => {
    this.props.history.push(`/${path}`);
    switch (path) {
      case "gallery":

        break;
      default:

    }
  }

  render() {
    const { activeState } = this.state;
    return (
        <Navbar light className=" shadow-sm" expand="sm">
          <NavbarBrand href="/"><img src={Logo} className="logo img-responsive p-1"/></NavbarBrand>
          <NavbarToggler onClick={this.onTogglerClick} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto my-nav" navbar>
              <NavItem active={activeState.portfolio} className="mx-sm-4"><NavLink onClick={() => this.onNavLink("gallery")} href="#">portfolio</NavLink></NavItem>
              <NavItem active={activeState.contacts} className="mx-sm-4"><NavLink onClick={() => this.onNavLink("contact")} href="#">contact</NavLink></NavItem>
              <NavItem active={activeState.about} className="mx-sm-4"><NavLink onClick={() => this.onNavLink("about")} href="#">about</NavLink></NavItem>
              <NavItem className="mx-sm-4 d-none d-md-flex"><img src={Separator} className="menu-separator"/></NavItem>
              <Nav className="d-none d-md-flex">
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={FacebookIcon} className="social-icons" /></NavLink></NavItem>
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={InstagramIcon} className="social-icons" /></NavLink></NavItem>
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={TumblrIcon} className="social-icons" /></NavLink></NavItem>
              </Nav>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default withRouter (TopMenu);
