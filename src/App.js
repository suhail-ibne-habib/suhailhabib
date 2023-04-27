import React, {useRef, useEffect} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import About from './About';
import './App.css';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Header from './Header';
import Hero from './Hero';
import Project from './Project';
import Work from './Work';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  let scrollRef = useRef(null)

  let addToSec = el => {
    if( el && !sectionsRef.current.includes(el) ){
      sectionsRef.current.push(el);
    }
}

  useEffect(()=>{

    if(containerRef.current){
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true
      })

      scrollRef.current = scroll;
    }

    scrollRef.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length ? scrollRef.current.scrollTo(value, 0, 0) :    scrollRef.current.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: containerRef.current.style.transform ? "transform" : "fixed"
      });
      sectionsRef.current.forEach(sec => {
        gsap.from(sec, {
          opacity: 0,
          y: "100%",
          ease: "back.out",
          scrollTrigger: {
            trigger: sec,
            scroller: containerRef.current,
            start: "-105% center",
          }
        })
      })

      ScrollTrigger.addEventListener("refresh", () => scrollRef.current.update());
      ScrollTrigger.refresh();
    
  }, [containerRef, sectionsRef])

  const handleScroll = (e)=>{
    e.preventDefault();
    const attr = e.target.getAttribute('data-target')
    console.log(attr)
    if (scrollRef) {
      scrollRef.current.scrollTo(`#${attr}`);
    }
  
  }

  return (

        <div class="page-starts" id="page" data-scroll-container ref={containerRef}>
          <Header handleClick={handleScroll}/>
          <Hero />
          <div ref={addToSec}>
              <About />
          </div>
          <div ref={addToSec}>
              <Work />
          </div>
          <div ref={addToSec}>
              <Project />
          </div>
          <div ref={addToSec}>
              <GetInTouch />
          </div>
          <Footer />
        </div>
       
  );
}

export default App;
