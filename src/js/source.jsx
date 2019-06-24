import React from 'react';
import ReactDOM from 'react-dom';
import Works from './components/works.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

import registerServiceWorker from '../registerServiceWorker.js';

import scss from '../scss/main.scss';

import Scroll from 'react-scroll';

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

  scrollSpy.update();
}

componentWillUnmount() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}
    render() {
        return (
            <div>
            <Header/>
            <hr/>
            <About/>
            <hr/>
            <Works/>
            <hr/>
            <Contact/>
            <hr/>
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

registerServiceWorker();
