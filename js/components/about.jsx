import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/about.scss';

export class About extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section name='About' id={scss.about}>Section about</section>
        )
    }
}

export default About;
