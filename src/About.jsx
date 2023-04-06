import React from 'react';

import classes from './About.module.css';

import Suhail from './imgs/suhail.jpg';
import SectionTitle from './layout/SectionTitle';

function About(){
    return(
        <section id="about" class="full-page">
            <div className="container flex direction-column justify-center">
                <SectionTitle title="About Me" number="01" />
                <div className="inner">
                    <div>
                        <p class="mt-10">As a highly skilled full-stack and WordPress web developer, I offer a range of cutting-edge web development services to help my clients achieve their business goals. Specializing in HTML, CSS, PHP, Javascript, Reactjs, Nodejs, and WordPress, I have a proven track record of delivering exceptional results to clients across various industries.</p>
                        <p class="mt-10">I am passionate about delivering the best possible experience to my clients and always follow best practices in my work. I am well-versed in Elementor, Divi, WPBakery, and other WordPress builders, and am confident in my ability to create custom WordPress themes, plugins, and landing pages that are both visually appealing and optimized for search engines.</p>
                        <p class="mt-10">My expertise also extends to front-end and back-end development, and I am comfortable working with a variety of design tools including Sketch, Figma, Adobe XD, and PSD. Whether you need a personal or business website, an ecommerce platform, or a custom web application, I have the skills and experience necessary to deliver the results you need.</p>
                        <ul class={classes['skills-list']}>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Eleventy</li>
                            <li>Node.js</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                    <div>
                        <picture className={classes['profile-wrapper']}>
                            <img src={Suhail} alt="suhail" className={classes.profile} />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;