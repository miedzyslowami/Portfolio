import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './mobileMenu.jsx';
import Logo from './logo.jsx';
import scss from '../../scss/components/header.scss';

export class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuItems:['About','Technologies','Works','Contact'],
            className:'',
            showMenu:false
        }
    }
    dropDownMenu = ()=>{
      this.state.showMenu===false ? this.setState({className:scss.show__menu,showMenu:true}) : this.setState({className:'',showMenu:false});
    }
    render() {
        let menuItems = this.state.menuItems.map((item,i)=>{
            return <li key={i}>{item}</li>
        })
        return (
          <div className={scss.header}>
              <div className={scss.wrapper}>
                <Logo/>
                <nav id={scss.mobile__menu}>
                <MobileMenu handleClick={this.dropDownMenu}/>
                <ul id={scss.navigation} className={this.state.className}>
                {menuItems}
                </ul></nav>
              </div>
          </div>
        )
    }
}

export default Header;
