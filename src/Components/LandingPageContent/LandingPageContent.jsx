import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import a from "../../assets/leftbackground.webp";
import b from "../../assets/rightbackground.webp";
import SlidingText from "../SlidingText/SlidingText";
import WhatIsEsummit from "../WhatIsEsummit/WhatIsEsummit";
import Theme from "../Theme/Theme";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import "./LandingPageContent.css";
export default function LandingPageContent() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".leftBackground",
          { y: 600 },
          {
            y: 10,
            scrollTrigger: {
              trigger: ".leftBackground",
              toggleActions: "restart restart reverse reverse",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
    
        gsap.fromTo(
          ".rightBackground",
          { y: 500 },
          {
            y: 10,
            scrollTrigger: {
              trigger: ".rightBackground",
              toggleActions: "restart restart reverse reverse",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, []);

  return (
    <div className="landing-page-content">
      <img className="leftBackground" src={a} alt="" srcSet="" loading="lazy" style={{ transform: 'translate(0px, 600px) scale(1.2, 1.2)' }} />
      <img className="rightBackground" src={b} alt="" srcSet="" loading="lazy" style={{ transform: 'translate(0px, 500px) scale(1.1, 1.1)' }} />

      <SlidingText />
      <WhatIsEsummit />
      <Theme />
      <WhatWeDo />
    </div>
  );
}
