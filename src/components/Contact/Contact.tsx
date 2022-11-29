import React, {SyntheticEvent, useContext, useRef, useState} from "react";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import {ThemeContext} from "../../context/themeContext";

import './Contact.css';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState<boolean>(false);
    const {darkMode} = useContext(ThemeContext);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (formRef.current !== null) {
            await emailjs.sendForm('service_rerzhqg', 'template_2jsor1r', formRef.current, '46vfu3V_dXSjCUxR7');
            setIsSent(true);
        }
    };

    return (
        <div className="contact" id="contact" style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}>
            <div className="contact__left-side">
                <h1 className="contact__left-side_title" style={{textShadow: darkMode ? '0 0 3px var(--color-light-beige)' : ''}}>Kontakt</h1>
                <div
                    className="contact__left-side_info"
                    style={{color: darkMode ? 'var(--color-light-beige)' : 'var(--color-dark-blue)'}}
                >
                    <AiOutlineMail className="contact__left-side_info-icon"/> tymek.lossy@gmail.com
                </div>
                <div className="contact__left-side_info" >
                    <a
                        href="https://github.com/madridista5"
                        target="_blank"
                        style={{color: darkMode ? 'var(--color-light-beige)' : 'var(--color-dark-blue)'}}
                    >
                        <AiFillGithub
                        className="contact__left-side_info-icon"/> madridista5
                    </a>
                </div>
                <div className="contact__left-side_info">
                    <a
                        href="https://www.linkedin.com/in/tymoteusz-lossy/"
                        target="_blank"
                        style={{color: darkMode ? 'var(--color-light-beige)' : 'var(--color-dark-blue)'}}
                    >
                        <AiFillLinkedin className="contact__left-side_info-icon"/> Tymoteusz Lossy
                    </a>
                </div>
            </div>
            <div className="contact__right-side">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Imię"
                        name="user_name"
                        style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)', borderColor: darkMode ? 'var(--color-light-beige' : 'var(--color-dark-blue)'}}
                    />
                    <input
                        type="text"
                        placeholder="Temat"
                        name="user_subject"
                        style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)', borderColor: darkMode ? 'var(--color-light-beige' : 'var(--color-dark-blue)'}}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="user_email"
                        style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)', borderColor: darkMode ? 'var(--color-light-beige' : 'var(--color-dark-blue)'}}
                    />
                    <textarea
                        rows={5}
                        placeholder="Wiadomość"
                        name="message"
                        style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}
                    />
                    {isSent && <p style={{color: 'var(--color-dark-red)', marginBottom: '1rem'}}>Twoja wiadomość została wysłana.</p>}
                    <button type="submit" value="Send" className="contact__right-side__btn">Wyślij</button>
                </form>
            </div>
        </div>
    )
};