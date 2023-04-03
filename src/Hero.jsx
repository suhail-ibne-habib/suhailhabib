import React from 'react';

// import classes from './hero.module.css';

function Hero(){
    return (
        <section id="hero" className='full-page flex direction-column justify-center'>
            <div className="row">
                <div className="container">
                    <h5 className='txt-green txt-small txt-font-mono'>My name is</h5>
                    <h2 className="big-heading">Suhail Habib.</h2>
                    <h2 className='semi-heading txt-slate'>My mission is to maximize my clients' revenue.</h2>
                    <p class="mt-20">As a highly skilled full-stack and WordPress web developer, I offer a range of cutting-edge web development services to help my clients achieve their business goals. </p><p>Specializing in HTML, CSS, PHP, Javascript, Reactjs, Nodejs, and WordPress,</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;