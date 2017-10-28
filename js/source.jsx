import React from 'react';
import ReactDOM from 'react-dom';
import Works from './components/works.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Logo from './components/logo.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

import scss from '../scss/main.scss';

class App extends React.Component {

componentDidMount() {
  let Link       = Scroll.Link;
  let Element    = Scroll.Element;
  let Events     = Scroll.Events;
  let scroll     = Scroll.animateScroll;
  let scrollSpy  = Scroll.scrollSpy;
  Events.scrollEvent.register('begin', (to, element)=> {
    console.log("begin", arguments);
  });
  Events.scrollEvent.register('end', (to, element)=> {
    console.log("end", arguments);
  });
  scrollSpy.update();}

componentWillUnmount() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}
    render() {
        return (
            <div className={scss.root}>
            <Header/>
            <About/>
            <Works/>
            <Contact/>
            <Footer/>
          </div>
        )
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
