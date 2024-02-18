import "./Speaker.css";
import a from "../../assets/Group2609.png";
import b from "../../assets/Group2612.png";
import c from "../../assets/Group2614.png";
import d from "../../assets/Group2615.png";
import e from "../../assets/Group2616.png";
import f from "../../assets/Group2619.png";
import g from "../../assets/Group2620.png";
import h from "../../assets/AMITA.png";



export default function Speaker(){
  
    return <>
        <div className="main-page-speaker-section">
            <div id="particles-js"></div>

            <div className="main-page-speaker-section-heading">PAST SPEAKERS</div>
            <div className="main-page-speaker-section-content">
                <div className="main-page-speaker-card">
                    <img src={a} alt="" srcSet="" loading="lazy"/>
                </div>
                <div className="main-page-speaker-card">
                    <img src={b} alt="" srcSet="" loading="lazy"/>
                </div>
                <div className="main-page-speaker-card">
                    <img src={c} alt="" srcSet="" loading="lazy"/>
                </div>
                <div className="main-page-speaker-card">
                    <img src={d} alt="" srcSet="" loading="lazy"/>
                </div>
            </div>
            <div className="main-page-speaker-section-content">
                <div className="main-page-speaker-card">
                    <img src={e} alt="" srcSet="" loading="lazy"/>
                </div>
                <div className="main-page-speaker-card">
                    <img src={h} alt="" srcSet="" loading="lazy"/>
                </div>
               
                <div className="main-page-speaker-card">
                    <img src={g} alt="" srcSet="" loading="lazy"/>
                </div>
                <div className="main-page-speaker-card">
                    <img src={f} alt="" srcSet="" loading="lazy" />
                </div>
            </div>
            <div className="main-page-speaker-section-content">
                <div className="speaker-see-more">
                    <a href="">SEE MORE</a>
                </div>
            </div>

        </div>
    </>
}