import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Works from './components/works.jsx';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import About from './components/about.jsx';
// import Contact from './components/contact.jsx';

import registerServiceWorker from '../registerServiceWorker.js';

import scss from '../scss/main.scss';

import Scroll from 'react-scroll';

let myTime = window.performance.now();

const LazyContact = React.lazy(() => import('./components/contact.jsx'));
const LazyWorks = React.lazy(() => import('./components/works.jsx'));
console.log(process.env.REACT_APP_APIKEY)
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
            <Suspense fallback={<div>Loading...</div>}>
              <LazyWorks/>
            </Suspense>
            <hr/>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyContact/>
            </Suspense>
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
window.performance.mark('mark_fully_loaded');
