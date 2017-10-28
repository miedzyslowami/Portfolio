import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/contact.scss';

export class Contact extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section name='Contact' id={scss.contact}>Section Contact</section>
        )
    }
}

export default Contact;
