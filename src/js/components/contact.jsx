import React from 'react';
import {app} from '../config.js';
import scss from '../../scss/components/contact.scss';
import SocialIcons from './socialIcons.jsx';

export class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name:'',
          email:'',
          message:'',
          correctClass:false
        }
    }
    sendMessage = (e) =>{
        e.preventDefault();
        if(this.validateName(this.state.name) && this.validateEmail(this.state.email) && this.validateMessage(this.state.message)){
            this.updateFirebase(this.state.name,this.state.email,this.state.message).then(()=>{
                this.setState({
                name:'',
                email:'',
                message:'',
                correctClass:false});
            })
        }else{
        this.setState({correctClass:true});
        }
    }

    updateFirebase = (name,email,message) =>{
        return new Promise((resolve,reject)=>{
            this.db.push({
                name:name,
                email:email,
                message:message
            });
            return resolve();
        })
    }

    nameChange = (e) =>{
        this.setState({name:e.target.value});
    }

    validateName = (name)=>{
        if(name.length>=5){
            return true;
        }
    }
    validateEmail = (email)=>{
        if(email.length>=5) {
            return true;
        }
    }
    validateMessage = (message)=>{
        if(message.length>=5){
            return true;
        }
    }
    emailChange = (e) =>{
        this.setState({email:e.target.value});
    }

    messageChange = (e) =>{
        this.setState({message:e.target.value});
    }

    componentWillMount(){
      this.db = app.database().ref().child('messages');
     }
     componentWillUnmount() {
         this.db.off();
     }


    render() {
        return (
            <section name='Contact' id={scss.contact}>
            <h2>Get in touch</h2>
            <form id={scss.contact__form} onSubmit={this.sendMessage}>
                    <div id={scss.name}>
                        <span className="fa fa-user  fa-lg" aria-hidden="true"></span>
                        <input id='name' className={scss.input__name} name='name' type='text' onChange={this.nameChange} value={this.state.name} required/>
                        <label className={scss.label__name} htmlFor='name'>Your name</label>
                    </div>
                    <div id={scss.email}>
                        <span className="fa fa-envelope  fa-lg" aria-hidden="true"></span>
                        <input id='email' className={scss.input__email} name='email' type='email' value={this.state.email} onChange={this.emailChange}required/>
                        <label  className={scss.label__email} htmlFor='email'>Your email</label>
                    </div>
                    <div id={scss.message}>
                        <span className="fa fa-pencil  fa-lg" aria-hidden="true"></span>
                        <textarea id='message' className={scss.message} onChange={this.messageChange} value={this.state.message} required></textarea>
                        <label  className={scss.label__textarea} htmlFor='message'>Type your message</label>
                    </div>
                    <input id={scss.submit__button} type='submit' value='send'/>
            </form>
            <SocialIcons/>
            </section>
        )
    }
}

export default Contact;
