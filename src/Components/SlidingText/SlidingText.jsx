// import a from "../../assets/videoframeaftermovie.webp"
import "./SlidingText.css";
import { useEffect } from 'react';


export default function SlidingText() {

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
          const textBlocks = document.querySelectorAll(".side-texts-block");
    
          for (let i = 0; i < textBlocks.length; i += 1) {
            if (i % 2) {
              textBlocks[i].style.transform = `translateX(calc(-100px + ${scrollTop / 6}px))`;
            } else {
              textBlocks[i].style.transform = `translateX(-${scrollTop / 6}px)`;
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <div className="sliding-text-animation">
    <div className="side-texts">
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
        <div className="side-texts-block">
            <span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF
                INFINITY</span><span>ESUMMIT 24</span><span>THEME</span><span>INQUISITION OF INFINITY</span>
        </div>
    </div>
    {/* <div className="esummit-aftermovie" id="esummit-aftermovie">
        <img className="videoFrameOfAfterMovie" src={a} alt="" srcSet="" loading="lazy"/>
        <video controls="" muted="" poster="./images/AFTER MOVIE Thumbnail.webp" preload="none">
            <source src="./videos/aftermovie.mp4" type="video/mp4"/>
        </video>
    </div> */}
</div>
}