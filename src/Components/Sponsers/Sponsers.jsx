import "./Sponsers.css";
import a from "../../assets/GOOGLE.png";
import b from "../../assets/META.png";
import c from "../../assets/NOTION.png";
import d from "../../assets/TECHBITE.png";
import e from "../../assets/workshop3.png";
import Arc from "./Arc.jsx";

export default function Sponsers(){
    return <>
            <div className="workshop-downtown">
            <div className="workshop-downtown-heading">SPONSERS</div>
            <div className="workshop-downtown-content">
                <div className="workshop-downtown-cotent-content-card">
                    <img src={a} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>READ MORE</button>
                    </a>
                </div>
                <div className="workshop-downtown-cotent-content-card">
                    <img src={b} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>READ MORE</button>
                    </a>
                </div>
                <div className="workshop-downtown-cotent-content-card">
                    <img src={c} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>READ MORE</button>
                    </a>
                </div>
            </div>
            <div className="workshop-downtown-content">
                
                <div className="workshop-downtown-cotent-content-card">
                    <img src={d} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>READ MORE</button>
                    </a>
                </div>
                <div className="workshop-downtown-cotent-content-card">
                    <img src={e} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>COMING SOON</button>
                    </a>
                </div>
                <div className="workshop-downtown-cotent-content-card">
                    <img src={e} alt="" className="workshop-downtown-cotent-content-card-img" loading="lazy"/>
                    <a href="">
                        <button>COMING SOON</button>
                    </a>
                </div>
            </div>
          <Arc/>
        </div>
    </>
}