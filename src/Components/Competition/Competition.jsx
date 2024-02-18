import a from "../../assets/Comp1.png";
import b from "../../assets/Comp2.png";
import c from "../../assets/Comp3.png";
import d from "../../assets/Comp4.png";
import e from "../../assets/Comp5.png";
import f from "../../assets/Comp6.png";
import "./Competition.css"
import  { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger from GSAP


gsap.registerPlugin(ScrollTrigger);

export default function Competition(){

    useEffect(() => {
        const blurElements = document.querySelectorAll(
          ".competition-content-section-right-blur-background"
        );
    
        blurElements.forEach((element) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              // markers: true,
              toggleActions: "restart restart none none",
              start: "10px 90%", // Start the animation when the element's top reaches the center of the viewport
            },
          });
    
          tl.to(element, { width: "0%", duration: 2 });
        });
      }, []); // Empty dependency array to run this effect only once when the component mounts

    return <>
     <div className="competition-content-outer" id="competition-heading">
            <div className="competition-content-outer-heading">COMPETITIONS</div>
            <div className="competition-content" id="comp1">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1>Decrypt</h1>
                        <p>
                            Ignite your entrepreneurial spirit with Decrypt, the ultimate case study competition. Dive
                            into real-world challenges, make tough decisions, and embark on an exhilarating journey of
                            problem-solving!
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>

                        <img src={a} alt="" srcSet="" loading="lazy"/>
                        <div className="competition-read-more"><a href="" >READ MORE</a></div>
                    </div>
                </div>
            </div>
            <div className="competition-content" id="comp2">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1>Upstart Campus</h1>
                        <p>
                            The classic pitching competition that showcases ones ability to ideate and pitch in front
                            of judges from the across entrepreneurship world. Get the experience of being in the shoes
                            of real life entrepreneur and learn what The Art of the Pitch is all about.
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>
                        <img src={b} alt="" srcSet="" loading="lazy"/>

                        <div className="competition-read-more"><a href="" >READ MORE</a></div>
                    </div>
                </div>
            </div>
            <div className="competition-content" id="comp3">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1>Cryptocraze</h1>
                        <p>
                            Get ready to ride the CryptoCraze wave, a thrilling virtual crypto trading competition where
                            fortune favors the boldest! Seize control of your financial destiny and showcase your
                            trading prowess. Dive into the undiscovered realms of the entrepreneurial world!
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>
                        <img src={c} alt="" srcSet="" loading="lazy" style={{ width: "37%" }}/>
                        <div className="competition-read-more"><a href="" >READ MORE</a></div>
                    </div>
                </div>
            </div>
            <div className="competition-content" id="comp4">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1>Sell your Sole</h1>
                        <p>
                            Prepare to unleash your marketing genius in the Sell Your Sole competition! Step into the
                            shoes of a CMO and craft a game-changing marketing campaign for an existing brand. Its your
                            chance to redefine success!
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>

                        <img src={d} alt="" srcSet="" loading="lazy"/>
                        <div className="competition-read-more"><a href="" >READ MORE</a></div>
                    </div>
                </div>
            </div>
            <div className="competition-content" id="comp5">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1>Model United Corporations</h1>
                        <p>
                            Unlock the thrill of corporate leadership! Join Model United Corporations and immerse yourself in the world of CEOs, CMOs, and CFOs. Conquer high-pressure decision-making, strategic challenges, and teamwork. Sharpen your skills, seize the spotlight, and prove you have got what it takes to lead in the boardroom. Join the competition, transform into a corporate 
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>

                        <img src={e} alt="" srcSet="" loading="lazy" style={{ width: "37%" }}/>
                        <div className="competition-read-more"><a href="" >READ MORE</a></div>
                    </div>
                </div>
            </div>
            <div className="competition-content" id="comp6">
                <div className="competition-content-section">
                    <div className="competition-content-section-left">
                        <h1> Be An Angel</h1>
                        <p>
Experience the investor perspective in Be an Angel:Shark Tank Edition. Role-play as an Angel Investor with $5 million to invest. Assess startups, pitch investment strategies, and face VC judges. Understand both sides of the table in this nerve-wracking pitch competition.
                        </p>
                    </div>
                    <div className="competition-content-section-right">
                        <div className="competition-content-section-right-blur-background"></div>

                        <img src={f} alt="" srcSet="" loading="lazy"/>
                        <div className="competition-read-more"><a href="">READ MORE</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}