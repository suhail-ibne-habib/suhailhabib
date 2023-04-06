import React, {useState,useRef} from 'react'
import {gsap} from 'gsap';

import SectionTitle from './layout/SectionTitle';

import classes from "./Work.module.css";
import WorkDetails from './layout/WorkDetails';

const data = [
    {
        title: 'Fullstack developer',
        workAt: 'Cubix IT Limited',
        time: '2021 - Present',
        ul: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]

    },
    {
        title: 'Project Manager & Fullstack developer',
        workAt: 'Spire Sparkle Agency',
        time: '2019 - 2021',
        ul: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]

    },
    {
        title: 'Fullstack & WordPress developer',
        workAt: 'Fiverr, Upwork',
        time: '2017 - Present',
        ul: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]

    }
]

function Work(){

    const barRef = useRef();
    const detailsRef = useRef();
    const [itemNum, setItem] = useState(0);

    const handleClick = (e)=>{
        
        const parentPosition = e.currentTarget.parentNode.getBoundingClientRect().top;
        const childPosition = e.currentTarget.getBoundingClientRect().top;
        const position = childPosition-parentPosition;

        gsap.to(barRef.current, {
            top: position,
            ease: 'power4.out'
        })

        gsap.from(detailsRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.3,
            ease: "power4.out"
        })

        const item = e.currentTarget.dataset['item'];
        setItem(item-1);

    }

    return(
        <section id="work">
            <div className="container">
                <SectionTitle title="Where I’ve Worked" number="02" />
                <div className={classes['work-wrapper']+" mt-50 mb-50"}>
                    <div className={classes['work-nav']}>
                        <ul className={classes.lists}>
                            <span className={classes.bar} ref={barRef}></span>
                            <li className={classes.list} onClick={handleClick} data-item="1">Cubix IT Limited</li>
                            <li className={classes.list} onClick={handleClick} data-item="2">Spire Sparkle Agency</li>
                            <li className={classes.list} onClick={handleClick} data-item="3">Fiverr, Upwork</li>
                        </ul>
                    </div>
                    <div className="work-details" ref={detailsRef}>
                        <WorkDetails 
                            title={data[itemNum].title} 
                            workAt={data[itemNum].workAt}
                            time={data[itemNum].time}
                            ul={data[itemNum].ul}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;