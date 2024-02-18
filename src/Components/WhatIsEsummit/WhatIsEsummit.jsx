import  { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import a from "../../assets/astronaut2.webp";
import b from "../../assets/whatisesummit.webp";
import c from "../../assets/whatisesummitvector.webp";
import "./WhatIsEsummit.css";

export default function WhatIsEsummit() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".what-is-esummit-astronaut",
          { y: 200, x: 100, scale: 0.5 },
          {
            y: 10,
            scale: 1,
            x: window.innerWidth - 50,
            scrollTrigger: {
              trigger: ".what-is-esummit-astronaut",
              toggleActions: "restart restart reverse reverse",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              ease: Power3.easeIn
            },
          }
        );
    
    
        const elementClassNames = [".what-is-esummit-img", ".what-is-esummit-heading", ".what-is-esummit-content"];
    
        elementClassNames.forEach((className) => {
          gsap.fromTo(
            className,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: className,
                toggleActions: "restart none none none",
              },
            }
          );
        });
      }, []);

    return (
        <div className="what-is-esummit">
            <img className="what-is-esummit-astronaut" src={a} alt="" loading="lazy" style={{ transform: 'translate(100px, 200px) scale(0.5, 0.5)' }} />
            <img className="what-is-esummit-img" src={b} alt="" loading="lazy" style={{ opacity: '0', transform: 'translate(-100px, 0px)' }} />
            <img className="what-is-esummit-vector" src={c} alt="" loading="lazy" />

            <div className="what-is-esummit-heading" style={{ opacity: '0', transform: 'translate(-100px, 0px)' }}>WHAT IS <br /> E-SUMMIT?</div>

            <div className="what-is-esummit-content" style={{ opacity: '0', transform: 'translate(-100px, 0px)' }}>
                E-Summit is the flagship event of E-Cell, annually convening academia, venture capitalists, and
                forward-thinking entrepreneurs. It serves as a platform to showcase entrepreneurial talent through
                diverse competitions, including business ventures, product design, and social entrepreneurship
                ideas. Join us to witness innovation and creativity in action, where entrepreneurship finds its
                home.
            </div>
        </div>
    );
}
