import React from 'react';

import SectionTitle from './layout/SectionTitle';

import classes from './Project.module.css';

import alternative from './imgs/Alternative Scroll.png';
import horizontal from './imgs/horizontal.png';
import horizontalPage from './imgs/horizontal_page.png';

import Card from './layout/Card';

const data = [
    {
        heading: "HTML, JS, LOCOMOTIVE SCROLL",
        title: "Horizontal Page Scroll",
        picture: horizontalPage,
        link: "https://suhail-ibne-habib.github.io/page_scroll/",
        mob: true
    },
    {
        heading: "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
        title: "Alternative Scroll",
        picture: alternative,
        link: 'https://projects.cubixit.org/AlternateColumnScroll.html',
        mob: false
    },
    {
        heading: "REACT JS, LOCOMOTIVE SCROLL",
        title: "Horizontal Scroll Gallery",
        picture: horizontal,
        link: 'https://suhail-ibne-habib.github.io/horizontal_scroll_gallery/',
        mob: false
    }
]

function Project(){
    return(
        <section id="project">
            <div className="container">
                <SectionTitle title="Some Things I’ve Built" number="03" />
                <div className={classes.projects}>
                    {
                        data.map( (p, idx) => {
                            let idxN = +idx;
                            return <Card heading={p.heading} title={p.title} picture={p.picture} link={p.link} mob={p.mob} idx={idxN} key={idx} />
                        } )
                    }
                </div>
            </div>
        </section>
    )
}

export default Project;