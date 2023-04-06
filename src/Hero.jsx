import React, {useRef, useEffect} from 'react';

import {gsap} from 'gsap';

import classes from './hero.module.css';

function Hero(){

    const bigHeadingRef = useRef();
    const chars = useRef([]);
    const replaceChar = useRef([]);

    const timeline = gsap.timeline();

    const addToChar = el => {
        if( el && !chars.current.includes(el) ){
            chars.current.push(el);
        }

        if(el.getAttribute('data-char') !== "."){
            replaceChar.current.push(el)
        }
    }

    useEffect(()=>{

        gsap.set( bigHeadingRef.current.children, {
            yPercent: -110,
            autoAlpha: 1,
            duration: 0.3
        })

        timeline.to( bigHeadingRef.current.children, {
            yPercent: 0,
            duration: 1,
            stagger: 0.05,
            ease: 'expo.inOut'
        } )

        timeline.to( replaceChar.current, {
            duration: 1,
            yPercent: 110,
            ease: 'expo.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.1
        } )

    }, [])

    return (
        <section id="hero" className='full-page flex direction-column justify-center'>
            <div className="row">
                <div className="container">
                    <h5 className='txt-green txt-small txt-font-mono'>My name is</h5>
                    <h2 className={classes.name + " big-heading"} ref={bigHeadingRef}>
                        <span ref={addToChar} className='char' data-char="S">S</span>
                        <span ref={addToChar} className='char' data-char=".">u</span>
                        <span ref={addToChar} className='char' data-char="h">h</span>
                        <span ref={addToChar} className='char' data-char=".">a</span>
                        <span ref={addToChar} className='char' data-char="i">i</span>
                        <span ref={addToChar} className='char' data-char=".">l</span> 
                        <span ref={addToChar} className='char ml-10' data-char="H">H</span>
                        <span ref={addToChar} className='char' data-char=".">a</span>
                        <span ref={addToChar} className='char' data-char="b">b</span>
                        <span ref={addToChar} className='char' data-char=".">i</span>
                        <span ref={addToChar} className='char' data-char="b">b</span>.
                        </h2>
                    <h2 className='semi-heading txt-slate'>My mission is to maximize my clients' revenue.</h2>
                    <p className="mt-20">As a highly skilled full-stack and WordPress web developer, I offer a range of cutting-edge web development services to help my clients achieve their business goals. </p>
                    <p className="mt-20 flex align-center">
                        <span className='line-height-0'>Specializing in</span> 
                        <span className={classes.fields}>
                            <span className={classes.field} >HTML</span>
                            <span className={classes.field} >CSS</span>
                            <span className={classes.field} >JavaScript</span>
                            <span className={classes.field} >ReactJs</span>
                            <span className={classes.field} >NodeJs</span>
                            <span className={classes.field} >AWS</span>
                            <span className={classes.field} >PYTHON</span>
                            <span className={classes.field} >WordPress</span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;