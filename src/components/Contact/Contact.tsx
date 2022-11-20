import React, {SyntheticEvent, useRef} from "react";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import emailjs from '@emailjs/browser';

import './Contact.css';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (formRef.current !== null) {
            await emailjs.sendForm('service_rerzhqg', 'template_2jsor1r', formRef.current, '46vfu3V_dXSjCUxR7');
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="contact__left-side">
                <h1 className="contact__left-side_title">Kontakt</h1>
                <div className="contact__left-side_info">
                    <AiOutlineMail className="contact__left-side_info-icon"/> tymek.lossy@gmail.com
                </div>
                <div className="contact__left-side_info">
                    <a href="https://github.com/madridista5" target="_blank"><AiFillGithub
                        className="contact__left-side_info-icon"/> madridista5</a>
                </div>
                <div className="contact__left-side_info">
                    <a href="https://www.linkedin.com/in/tymoteusz-lossy/" target="_blank">
                        <AiFillLinkedin className="contact__left-side_info-icon"/> Tymoteusz Lossy
                    </a>
                </div>
            </div>
            <div className="contact__right-side">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Imię" name="user_name"/>
                    <input type="text" placeholder="Temat" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea
                        rows={5}
                        placeholder="Wiadomość"
                        name="message"
                    />
                    <button type="submit" value="Send">Wyślij</button>
                </form>
            </div>
        </div>
    )
};