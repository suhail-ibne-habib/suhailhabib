import React from 'react';

import SectionTitle from './layout/SectionTitle';

import classes from './GetInTouch.module.css';

function GetInTouch(){
    return(
        <section id="contact">
            <div className="container">
                <SectionTitle title="Get in Touch" number="04" />
                <h2 className={classes.h2}>Dont be a stranger!</h2>
                <p>Connect with me online</p>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <span><i className="fa-brands fa-github"></i></span>
                        <a href="https://github.com/suhail-ibne-habib" className={classes.a}>Github</a>
                    </li>
                    <li className={classes.li}>
                        <span><i className="fa-brands fa-facebook"></i></span>
                        <a href="https://www.facebook.com/suhailibnehabib/" className={classes.a}>Facebook</a>
                    </li>
                    <li className={classes.li}>
                        <span><i className="fab fa-whatsapp"></i></span>
                        <a href="https://api.whatsapp.com/send?phone=8801790762686" target="_blank">Whatsapp</a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default GetInTouch;