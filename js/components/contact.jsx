import React from 'react';
import ReactDOM from 'react-dom';

import scss from '../../scss/components/contact.scss';


export class Contact extends React.Component {
    constructor(props){
        super(props)
    }
    sendMessage = () =>{

    }
    render() {
        return (
            <section name='Contact' id={scss.contact}>
            <h3>Get in touch</h3>
            <form id={scss.contact__form} onSubmit={this.sendMessage}>
            <div id={scss.name}>
            <i className="fa fa-user  fa-lg" aria-hidden="true"></i>
            <input id='name' className={scss.input__name} name='name' type='text' required/>
            <label className={scss.label__name} htmlFor='name'>Your name</label>
            </div>
            <div id={scss.email}>
            <i className="fa fa-envelope  fa-lg" aria-hidden="true"></i>
            <input id='email' className={scss.input__email} name='email' type='email' required/>
            <label  className={scss.label__email} htmlFor='email'>Your email</label>
            </div>
            <div id={scss.message}>
            <i className="fa fa-pencil  fa-lg" aria-hidden="true"></i>
            <textarea id='message' className={scss.message} required></textarea>
            <label  className={scss.label__textarea} htmlFor='message'>Type your message</label>
            </div>
            <input id={scss.submit__button} type='submit' value='send'/>
            </form>
            </section>
        )
    }
}

export default Contact;