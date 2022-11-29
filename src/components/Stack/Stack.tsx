import React from "react";
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import git from  '../../assets/git.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import ts from '../../assets/ts.png';
import mongoDB from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.png';
import nest from '../../assets/nest.png';
import node from '../../assets/node.png';


import './Stack.css';

export const Stack = () => {
    return(
        <div id="stack" className="stack">
            <h1 className="stack__title">Stack Technologiczny</h1>
            <div className="stack__wrapper">
                <div className="stack__wrapper-section">
                    <h2 className="stack__wrapper-h2">Frontend</h2>
                    <div className="stack__wrapper-section_icons">
                        <div className="icon">
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src={css} alt="icon"/></a>
                            <p>CSS</p>
                        </div>
                        <div className="icon">
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src={html} alt="icon"/></a>
                            <p>HTML</p>
                        </div>
                        <div className="icon">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src={js} alt="icon"/></a>
                            <p>JavaScript</p>
                        </div>
                        <div className="icon">
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src={ts} alt="icon"/></a>
                            <p>TypeScript</p>
                        </div>
                        <div className="icon">
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={react} alt="icon"/></a>
                            <p>React</p>
                        </div>
                        <div className="icon">
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src={git} alt="icon"/></a>
                            <p>GIT</p>
                        </div>
                    </div>
                </div>
                <div className="stack__wrapper-section">
                    <h2 className="stack__wrapper-h2">Backend</h2>
                    <div className="stack__wrapper-section_icons">
                        <div className="icon">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src={js} alt="icon"/></a>
                            <p>JavaScript</p>
                        </div>
                        <div className="icon">
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src={ts} alt="icon"/></a>
                            <p>TypeScript</p>
                        </div>
                        <div className="icon">
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src={node} alt="icon"/></a>
                            <p>Node.js</p>
                        </div>
                        <div className="icon">
                            <a href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src={nest} alt="icon"/></a>
                            <p>Nest.js</p>
                        </div>
                        <div className="icon">
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src={mongoDB} alt="icon"/></a>
                            <p>mongoDB</p>
                        </div>
                        <div className="icon">
                            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src={mysql} alt="icon"/></a>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}