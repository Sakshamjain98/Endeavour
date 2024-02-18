import a from "../../assets/Tyepeface.webp";
import b from "../../assets/registerNowButton.png";
import c from "../../assets/landing1.webp";
import d from "../../assets/cloudfront.webp";
import e from "../../assets/buildings1.webp";
import "./Front.css";

export default function Front() {
    return (
        <div className="building-cyberpunk" id="building-cyberpunk">
            <div className="typeface-packet">
                <img className="typeface" src={a} alt="" loading="lazy" />
                <span className="text-for-dates">13TH - 15TH OCTOBER</span>
                <a href=""><img className="register-now-image" src={b} alt="" /></a>
            </div>
            <img className="buildings-cyberpunk-up" src={c} alt="" loading="lazy" />
            <img className="cloud-front" src={d} alt="" />
            <img className="buildings" src={e} alt="" style={{ transform: 'translate3d(0px, -135.92px, 0px) scale(1.3398, 1.3398)' }} />
        </div>
    );
}
