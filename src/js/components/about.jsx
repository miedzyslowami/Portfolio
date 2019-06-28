import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import scss from '../../scss/components/about.scss';

export class About extends React.Component {
    constructor(props) {
        super(props)
    }
    scrollToContact = () => {
        scroller.scrollTo('Contact', {
            duration: 1500,
            delay: 100,
            smooth: true
        })
    }
    componentDidMount() {
        let Link = Scroll.Link;
        let Element = Scroll.Element;
        let Events = Scroll.Events;
        let scroll = Scroll.animateScroll;
        let scrollSpy = Scroll.scrollSpy;
        Events.scrollEvent.register('begin', (to, element) => {
        });
        Events.scrollEvent.register('end', (to, element) => {
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <section name='About' id={scss.about}>
                <h2>Know me</h2>
                <picture>
                    <source srcset="https://res.cloudinary.com/miedzyslowamicode/image/upload/v1561717406/Assets/portfolio_about_me_500.webp 1x, https://res.cloudinary.com/miedzyslowamicode/image/upload/v1561717406/Assets/portfolio_about_me_500_2x.webp 2x" sizes='(max-width: 500px)' type="image/webp" alt='picture of me'/>
                    <source srcset="https://res.cloudinary.com/miedzyslowamicode/image/upload/v1561717406/Assets/portfolio_about_me.webp 1x,https://res.cloudinary.com/miedzyslowamicode/image/upload/v1561717406/Assets/portfolio_about_me_2x.webp 2x" type="image/webp" alt='picture of me'/>
                    <source srcset="https://res.cloudinary.com/miedzyslowamicode/image/upload/v1509381717/Assets/portfolio_about_me.png" type="image/jpeg" alt='picture of me'/> 
                    <img src='https://res.cloudinary.com/miedzyslowamicode/image/upload/v1561717406/Assets/portfolio_about_me.webp' alt='picture of me' />
                </picture>
                <div className={scss.info}>
                    <p>I'm Gosia and I am React's enthusiast, but not only.</p>
                    <p>I love traveling and learning new stuff. You can tell that by checking my
                        <a className={scss.highlight_container} target='_blank' href='https://www.linkedin.com/in/miedzyslowami/' rel="noreferrer">
                            &nbsp;
                                <span className={scss.highlight}>
                                linkedin profile
                                </span>
                        </a>.
                        I manage my time well and I learn fast. I constantly develop my skills, what you can observe at my
                        <a className={scss.highlight_container} href='https://github.com/miedzyslowami' target='_blank' rel="noreferrer">
                            &nbsp;
                            <span className={scss.highlight}>
                                github profile
                            </span>
                        </a>.
                        I am a mature and reliable worker - I am capable of making reasonable decisions and taking responsibility.
                        You can take a look at my works in a next section. For questions don't hesitate to use <span className={scss.highlight_container}><span className={scss.highlight} onClick={this.scrollToContact}>contact form</span></span>.
                    </p>
                </div>
            </section>
        )
    }
}

export default About;
