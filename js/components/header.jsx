import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/header.scss';

export class Header extends React.Component {
    render() {
        return (
          <div className={scss.header}>Header</div>
        )
    }
}

export default Header;
