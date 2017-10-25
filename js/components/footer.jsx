import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/footer.scss';

export class Footer extends React.Component {
    render() {
        return (
          <div className={scss.footer}>
          <p className={scss.copyrights}>© 2017 by Małgorzata Grajewska</p>
          </div>
        )
    }
}

export default Footer;
