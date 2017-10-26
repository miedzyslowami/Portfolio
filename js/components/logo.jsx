import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/logo.scss';

export class Logo extends React.Component {
    render() {
        return (
          <div id={scss.logo}>Logo
          </div>
        )
    }
}

export default Logo;
