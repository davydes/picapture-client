/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Footer() {
  return (
    <footer>
      <div className="container" >
        <FormattedMessage {...messages.header} />
      </div>
    </footer>
  );
}

Footer.propTypes = {

};

export default Footer;
