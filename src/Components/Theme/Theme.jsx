import astronautImage from "../../assets/astronaut-2.webp";
import themeVectorImage from "../../assets/themevector-65.webp";
import themeImage from "../../assets/theme.png";
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Theme.css"
export default function Theme() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".astronaut-2",
          { y: 300, x: window.innerWidth / 2 },
          {
            y: 0, x: 0,
            scrollTrigger: {
              trigger: ".astronaut-2",
              toggleActions: "restart restart reverse reverse",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
    
        gsap.fromTo(
          ".esummit-theme-left",
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: ".esummit-theme-left",
              toggleActions: "restart none none none",
            },
          }
        );
    
        gsap.fromTo(
          ".esummit-theme-right",
          {
            x: 300, opacity: 0,
            webkitFilter: "blur(" + 10 + "px)"
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            webkitFilter: "blur(" + 0 + "px)",
            scrollTrigger: {
              trigger: ".esummit-theme-right",
              toggleActions: "restart none none none",
            },
          }
        );
      }, []);
    return (
        <div className="esummit-theme">
            <img className="astronaut-2" src={astronautImage} alt="Astronaut floating in space" loading="lazy" style={{ transform: 'translate(616px, 300px)' }} />
            <div className="esummit-theme-left" style={{ transform: 'translate(-100px, 0px)', opacity: 0 }}>
                <img className="themeVector" src={themeVectorImage} alt="Abstract vector representing the theme" loading="lazy" />
                <div className="esummit-theme-heading">E-SUMMIT 24 <br /> INQUISITION OF INFINITY </div>
                <div className="esummit-theme-content">
                    Unleashing the theme of Inquisition where uncharted realms await your curiosity embrace.
                    Venture into the unknown, question the unquestioned, and sculpt innovation from mere ideas. With
                    Infinity dream beyond horizons, paint success without borders. Let this fusion kindle a
                    wildfire of revolutionary thinking, where entrepreneurs script tomorrow unseen.
                </div>
            </div>
            <div className="esummit-theme-right" style={{ transform: 'translate(300px, 0px)', filter: 'blur(10px)', opacity: 0 }}>
                <img src={themeImage} alt="E-Summit23 Theme" loading="lazy" />
                <div className="esummit-theme-right-content">
                    <span>E-SUMMIT 24 THEME</span> <br />
                    Seeks to inspire a spirit of challenging conventional thinking, fostering an environment where
                    attendees can boldly explore, innovate, and redefine the boundaries of what is possible in their
                    entrepreneurial pursuits.
                </div>
            </div>
        </div>
    );
}
