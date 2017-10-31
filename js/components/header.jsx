import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './mobileMenu.jsx';
import Logo from './logo.jsx';
import scss from '../../scss/components/header.scss';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

export class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuItems:['About','Works','Contact'],
            className:'',
            showMenu:false
        }
    }
    dropDownMenu = ()=>{
      this.state.showMenu===false ? this.setState({className:scss.show__menu,showMenu:true}) : this.setState({className:'',showMenu:false});
    }
    componentDidMount() {
      let Link       = Scroll.Link;
      let Element    = Scroll.Element;
      let Events     = Scroll.Events;
      let scroll     = Scroll.animateScroll;
      let scrollSpy  = Scroll.scrollSpy;
      Events.scrollEvent.register('begin', (to, element)=> {
      });
      Events.scrollEvent.register('end', (to, element)=> {
      });
      scrollSpy.update();}

    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
    scrollToSection = (e) =>{
        let target = e.target.dataset.name;
        this.dropDownMenu();
        let navigation = e.target.parentElement;
        let transitionCounter = 0;//there are 5 trnasitions to end

        waitForAllTransitionend(transitionCounter).then(()=>{
            scroller.scrollTo(target, {
              duration: 1500,
              delay: 100,
              smooth: true
        })
        })
        function waitForAllTransitionend(transitionCounter){
            return new Promise((resolve, reject)=>{
                navigation.addEventListener('transitionend',()=>{
                    transitionCounter ++;
                    transitionCounter === 5 ? true : false;
                    if(transitionCounter === 5 ){
                        return resolve();
                    }
                })
            })
        }

    }

    render() {
        let menuItems = this.state.menuItems.map((item,i)=>{
            return <li data-name={item} onClick={this.scrollToSection} key={i}>{item}</li>
        })
        return (
          <header className={scss.header}>
            <h1 className={scss.main__heading}>Portfolio</h1>
              <div className={scss.wrapper}>
                <Logo/>
                <nav id={scss.mobile__menu}>
                <MobileMenu handleClick={this.dropDownMenu}/>
                <ul id={scss.navigation} className={this.state.className}>
                {menuItems}
                </ul></nav>
              </div>
          </header>
        )
    }
}

export default Header;
