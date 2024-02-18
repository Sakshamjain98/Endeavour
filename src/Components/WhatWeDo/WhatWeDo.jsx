import a from "../../assets/statsnew.webp";
import b from "../../assets/expo.png";
import c from "../../assets/upstart.png";
import d from "../../assets/networkingDinner.png";
import "./WhatWeDo.css";
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhatWeDo() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
          ".card",
          { rotationX: 0 },
          {
            duration: 0.1,
            rotationX: 180,
            scrollTrigger: {
              trigger: ".card",
              toggleActions: "restart restart reverse reverse",
            },
          }
        );
      }, []);

    return <>   
       <div className="scene">
        <div className="card" style={{ transform: 'translate(0px, 0px)' }}>
          <div className="card__face card__face--front">
            <img src={a} alt="" />
          </div>
          <div className="card__face card__face--back">
            <img src={a} alt="" />
          </div>
        </div>
        </div>
        <div className="what-we-do">
          <div className="what-we-do-heading">
            WHAT WE DO
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-card">
              <img src={b} alt="" loading="lazy" />
              <div className="read-more-what-we-do" style={{ left: '40px' }}>
                <a href="" target="_blank" rel="noopener noreferrer">read more</a>
              </div>
              <div className="what-we-do-card-heading">Startup <br /> Expo</div>
              <div className="what-we-do-card-content">
                Startup expo offers a platform for startups to showcase their unique ideas and the
                opportunity to orchestrate Product Launches, network with investors, and gain exposure to a
                wider audience.
              </div>
            </div>
            <div className="what-we-do-card">
              <img src={c} alt="" loading="lazy" />
              <div className="read-more-what-we-do" style={{ left: '70px' }}>
                <a href="" target="_blank" rel="noopener noreferrer">read more</a>
              </div>
              <div className="what-we-do-card-heading">UpStart</div>
              <div className="what-we-do-card-content">
                UpStart being the flagship pitching event of E-Cell has always catered to the budding
                startups of the nation. With 500+ registrations, UpStart has managed to sow the seeds of
                entrepreneurship across the country.
              </div>
            </div>
            <div className="what-we-do-card">
              <img src={d} alt="" loading="lazy" />
              <div className="read-more-what-we-do">
                <a href="" target="_blank" rel="noopener noreferrer">read more</a>
              </div>
              <div className="what-we-do-card-heading">networking dinner</div>
              <div className="what-we-do-card-content">
                E-Cell KIET Ghaziabad holds a networking dinner with the aim of not just connecting people but
                connecting people with ideas and people with opportunities.
              </div>
            </div>
          </div>
        </div>
    </>
  }
  