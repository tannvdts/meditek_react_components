/**
 * Created by tan on 3/24/16.
 */
import React, { Component, PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class HeaderPanel extends Component {
  // static propTypes = {
  //  user: PropTypes.object,
  //  headerLogo: PropTypes.object,
  //  headerItems: PropTypes.array.isRequired
  // };
  render() {
    const styles = require('../../../assets/HeaderPanel.scss');

    const {headerItems, headerLogo, useDefaultStyle } = this.props;
    if (useDefaultStyle) {
      require('../../../assets/ct_header_main_style.css');
    }
    return (
      <div className= {styles.headerPanel}>
        <Navbar >
          <Navbar.Header>
            {<NavbarBrand>
              <a href={headerLogo.url}>
                <span className={headerLogo.largeLogo.styleClass + ' img-responsive hidden-xs'}
                      alt= "chotot-logo"/>
                <span className= {headerLogo.smallLogo.styleClass + ' img-responsive visible-xs-block'}
                      alt= "chotot-logo"/>
              </a>
            </NavbarBrand>}
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse className="pull-right">
            <Nav>
              {headerItems.map((item) => {
                switch (item.type) {
                  case 'linkRoute': {
                    return (<LinkContainer to= {item.detail.url}>
                      <NavItem target= {item.detail.target} className= {item.detail.itemStyle} title ="">
                        <span className= {item.detail.iconStyle}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className= {item.detail.descStyle}> &nbsp; {item.detail.desc}</span>
                      </NavItem>
                    </LinkContainer>);
                  }
                  case 'linkDirect': {
                    return (<NavItem target= {item.detail.target} className= {item.detail.itemStyle} title= "" href= {item.detail.url}>
                      <span className= {item.detail.iconStyle}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className= {item.detail.descStyle}> &nbsp; {item.detail.desc}</span>
                    </NavItem>);
                  }
                  case 'linkAction': {
                    return (<NavItem target= {item.detail.target} className= {item.detail.itemStyle} title="" onClick= {item.detail.action}>
                      <span className= {item.detail.iconStyle}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className= {item.detail.descStyle}> &nbsp; {item.detail.desc}</span>
                    </NavItem>);
                  }
                  case 'dropdown': {
                    return (<NavDropdown title={<span> <i className= {item.detail.iconStyle}> </i> {item.detail.desc}</span>} id="nav-dropdown">
                      {
                        item.detail.list.map((row) => {
                          switch (row.type) {
                            case 'linkRoute': {
                              return (<LinkContainer to= {row.detail.url}>
                                <MenuItem>
                                  <span className= {row.detail.iconStyle}></span>
                                  {row.detail.desc}
                                </MenuItem>
                              </LinkContainer>);
                            }
                            case 'linkDirect': {
                              return (<MenuItem href= {row.detail.url}>
                                <span className= {row.detail.iconStyle}></span>
                                {row.detail.desc}
                              </MenuItem>);
                            }
                            case 'linkAction': {
                              return (<MenuItem onClick={row.detail.action}>
                                <span className={row.detail.iconStyle}></span>
                                {row.detail.desc}
                              </MenuItem>);
                            }
                            default: {
                              break;
                            }
                          }
                        })
                      }
                    </NavDropdown>);
                  }
                  default: {
                    break;
                  }
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
HeaderPanel.propTypes = {
  user: PropTypes.object,
  headerLogo: PropTypes.object,
  headerItems: PropTypes.array.isRequired,
  useDefaultStyle: PropTypes.number,
};
