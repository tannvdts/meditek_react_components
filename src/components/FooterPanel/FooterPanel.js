import React, { Component, PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default class FooterPanel extends Component {
  render() {
    const styles     = require('../../../assets/FooterPanel.scss');
    // require("../../../assets/FooterPanel.css");
    const {footerItems} = this.props;
    const {nav, ver} = footerItems;
    return (
      <footer className={styles.ct_footer}>
        <div className="container">
          <p>

            {nav.map((link, index) => {
              switch (link.type) {
                case 'linkDirect': {
                  return (<a href={link.detail.url} > {link.detail.desc} { index < (nav.length) - 1 && ' | '} </a>);
                }
                case 'linkRoute': {
                  return (<LinkContainer to= {link.detail.url}>
                    <a>{link.detail.desc} { index < (nav.length) - 1 && ' | '}</a>
                  </LinkContainer>);
                }
                case 'linkAction': {
                  return (<a onClick= {link.detail.action}>{link.detail.desc} { index < (nav.length) - 1 && ' | '}</a>);
                }
                default: {
                  break;
                }
              }
            })}
            <br/>
            <span className= {styles.span_bold}>Xem chotot.vn phiên bản: </span>
            <br/>
            {ver.map((link, index) => {
              switch (link.type) {
                case 'linkDirect': {
                  return (<a href={link.detail.url} > {link.detail.desc} { index < (nav.length) - 1 && ' | '} </a>);
                }
                case 'linkRoute': {
                  return (<LinkContainer to= {link.detail.url}>
                    <a>{link.detail.desc} { index < (nav.length) - 1 && ' | '}</a>
                  </LinkContainer>);
                }
                case 'linkAction': {
                  return (<a onClick= {link.detail.action}>{link.detail.desc} { index < (nav.length) - 1 && ' | '}</a>);
                }
                default: {
                  break;
                }
              }
            })}
          </p>
        </div>
      </footer>
    );
  }
}
FooterPanel.propTypes = {
  footerItems: PropTypes.object.isRequired,
};
