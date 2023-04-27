import React, { useState, useRef } from "react";
import gsap from 'gsap';

import cv from './CV/cv.pdf';

import classes from './Header.module.css';

function Header(props){

    const [clicked, setClicked] = useState(false);
    const navRef = useRef();

    let tween = gsap.to(navRef.current, {
            left: 0
        })

    //tween.pause();

    if(clicked){
        tween.play();
    }

    if(!clicked){
        tween.vars.left = "-110%"
    }

    const handleClick = ()=>{
        setClicked(!clicked);
    }

    return(
        <header>
            <div className="container">
                <div className="row flex align-center space-between">
                    <div className={classes.logo}>
                        <a href="/">Suhail</a>
                    </div>
                    <div ref={navRef} className={'nav '+classes['pc-nav']}>
                        <ul className={classes["nav-lists"]}>
                            <li className={classes['nav-list']}>
                                <button data-target="about" onClick={props.handleClick} className={classes['nav-link']}><span>01.</span>About</button>
                            </li>
                            <li className={classes['nav-list']}>
                                <button data-target="work" onClick={props.handleClick} className={classes['nav-link']}><span>02.</span>Experience</button>
                            </li>
                            <li className={classes['nav-list']}>
                                <button data-target="project" onClick={props.handleClick} className={classes['nav-link']}><span>03.</span>Work</button>
                            </li>
                            <li className={classes['nav-list']}>
                                <button data-target="contact" onClick={props.handleClick} className={classes['nav-link']}><span>04.</span>Contact</button>
                            </li>
                            <li className={classes['nav-list']}>
                                <a href={cv} target="blank" className={classes['nav-link']+" btn"}>Donwload CV</a>
                            </li>

                        </ul>
                    </div>

                    <div onClick={handleClick} className={classes['mob-menu']}></div>

                </div>
            </div>
        </header>
    )
}

export default Header;