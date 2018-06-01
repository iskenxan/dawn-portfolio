import React, { Component } from 'react';
import Logo from '../media/logo.svg';
import Separator from '../media/menu_separator.svg';
import { withRouter } from 'react-router-dom';
import { routes, galleryRoutes } from '../routes';
import _ from 'lodash';
import  Headroom  from 'react-headroom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapseOpen: false,
      isDropDownOpen: false,
    };
  }

  onTogglerClick = () => {
    this.setState({isCollapseOpen: !this.state.isCollapseOpen});
  }

  onNavLink = (route) => {
    this.props.history.push(route.path);
  }

  onDropDownToggle = () => {
    this.setState({isDropDownOpen: !this.state.isDropDownOpen})
  }

  getGalleryMenuItems = () => {
    return _.map(galleryRoutes, route => {
      return(
         <DropdownItem key={route.displayName} onClick={()=>this.onNavLink(route)}>{route.displayName}</DropdownItem>
      );
    });
  }

  getDropDownItem = () => {
    const { pathname } = this.props.location;
    const active = pathname === "/" || pathname.includes("/gallery")
    return (
      <Dropdown active ={active}
        className="mx-sm-4" nav
        isOpen={this.state.isDropDownOpen}
        toggle={this.onDropDownToggle}>
        <DropdownToggle nav caret> gallery </DropdownToggle>
        <DropdownMenu>
          {this.getGalleryMenuItems()}
        </DropdownMenu>
      </Dropdown>
    );
  }

  getNavItems = () => {
    return _.map(routes, route => {
      const active = this.props.location.pathname === route.path
      return(
        <NavItem key={route.displayName}
          active={active}
          className="mx-sm-4">
          <NavLink onClick={() => this.onNavLink(route)} href="#">{route.displayName}</NavLink>
        </NavItem>
      );
    });
  }


  render() {
    return (
      <Headroom upTolerance={100}>
        <Navbar light className="shadow-sm" expand="sm">
          <NavbarBrand href="/"><img src={Logo} className="logo img-responsive p-1"/></NavbarBrand>
          <NavbarToggler onClick={this.onTogglerClick} />
          <Collapse isOpen={this.state.isCollapseOpen} navbar>
            <Nav className="ml-auto my-nav" navbar>
              {this.getDropDownItem()}
              {this.getNavItems()}
              <NavItem className="mx-sm-4 d-none d-md-flex"><img src={Separator} className="menu-separator"/></NavItem>
              <Nav className="d-none d-md-flex">
                <NavItem className="mx-sm-2 row"><NavLink className="col my-auto"  href="#"><div  className="social-icons icon-facebook" /></NavLink></NavItem>
                <NavItem className="mx-sm-2 row"><NavLink className="col my-auto" href="#"><div  className="social-icons icon-insta" /></NavLink></NavItem>
                <NavItem className="mx-sm-2 row"><NavLink  className="col my-auto" href="#"><div  className="social-icons icon-tumblr" /></NavLink></NavItem>
              </Nav>
            </Nav>
          </Collapse>
        </Navbar>
    </Headroom>
    );
  }
}

export default withRouter(TopMenu);
