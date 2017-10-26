import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Logo from './components/logo.jsx';
import scss from '../scss/main.scss';



class App extends React.Component {
    render() {
        return (
            <div className={scss.root}>
            <Header/>
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
