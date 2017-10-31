import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/about.scss';

export class About extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section name='About' id={scss.about}>
                <h2>Know me</h2>
                <img src='http://res.cloudinary.com/miedzyslowamicode/image/upload/v1509381717/Assets/portfolio_about_me.png' alt='picture of me'/>
                <div className={scss.info}>
                    <p>I'm Gosia and I am React's enthusiast.</p>
                    <p>I love traveling and learning new stuff. You can tell that by checking my <a target='_blank' href='https://www.linkedin.com/in/miedzyslowami/'>linkedin profile</a>. I manage my time well and I learn fast. I constantly develop my skills, what you can observe at my <a href='https://github.com/miedzyslowami' target='_blank'>github profile</a>.
                    You can take a look at my works in a next section. For questions don't hesitate to use contact form.
                    </p>
                </div>
            </section>
        )
    }
}

export default About;
