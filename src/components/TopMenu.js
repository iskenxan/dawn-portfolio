import React, { Component } from 'react';
import Logo from '../media/logo.svg';
import Separator from '../media/menu_separator.svg';
import FacebookIcon from '../media/facebook-icon.svg';
import InstagramIcon from '../media/instagram-icon.svg';
import TumblrIcon from '../media/tumblr-icon.svg';
import { withRouter } from 'react-router-dom';
import { routes } from '../routes';
import _ from 'lodash';
import  Headroom  from 'react-headroom';

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
      isOpen: false
    };
  }

  onTogglerClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  onNavLink = (route) => {
    this.props.history.push(route.path);
  }

  getNavItems = () => {
    return _.map(routes, route => {
      const active = this.props.location.pathname === route.path
      return(
        <NavItem key={route.displayName} active={active}  className="mx-sm-4"><NavLink onClick={() => this.onNavLink(route)} href="#">{route.displayName}</NavLink></NavItem>
      );
    });
  }

  render() {
    return (
      <Headroom upTolerance={100}>
        <Navbar light className="shadow-sm" expand="sm">
          <NavbarBrand href="/"><img src={Logo} className="logo img-responsive p-1"/></NavbarBrand>
          <NavbarToggler onClick={this.onTogglerClick} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto my-nav" navbar>
              {this.getNavItems()}
              <NavItem className="mx-sm-4 d-none d-md-flex"><img src={Separator} className="menu-separator"/></NavItem>
              <Nav className="d-none d-md-flex">
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={FacebookIcon} className="social-icons" /></NavLink></NavItem>
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={InstagramIcon} className="social-icons" /></NavLink></NavItem>
                <NavItem className="mx-sm-2"><NavLink href="#"><img src={TumblrIcon} className="social-icons" /></NavLink></NavItem>
              </Nav>
            </Nav>
          </Collapse>
        </Navbar>
    </Headroom>
    );
  }
}

export default withRouter(TopMenu);
