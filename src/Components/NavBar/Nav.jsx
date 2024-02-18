import  { useState, useEffect, useRef } from 'react';
import "./Style.css";
import logo from "../../assets/logo.jpg";
import side from "../../assets/sidebar.png";

let Nav = () => {
    let [isActive, setisActive] = useState(false);
    let hamburgerIconRef = useRef(null);
    let navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && !hamburgerIconRef.current.contains(event.target)) {
                setisActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    let handleClick = () => {
        setisActive(!isActive);
    }

    return (
        <>
            <div className="header" id="8">
                <div className="container-lg">
                    <a href="" className="logo-with-name header-logo" key="gf_0">
                        <img src={logo} alt="Logo" className="logo-with-name-logo" loading="lazy" />
                    </a>
                    <ul ref={navRef} className={isActive ? 'header-nav-active' : 'header-nav'}>
                        <img src={side} alt="" srcSet="" loading="lazy" />
                        <li><a href="" className="nav-home">Home</a></li>
                        <li><a href="" className="nav-about-us">About Us</a></li>
                        <li><a href="" className="nav-sponsor">Sponsors</a></li>
                        <li><a href="" className="nav-competitions">Competitions</a></li>
                        <li><a href="" className="nav-workshops">Workshops</a></li>
                        <li><a href="" className="nav-speakers">Speakers</a></li>
                        <li><a href="" className="nav-get-merchandise">Merchandise</a></li>
                    </ul>
                    <div className="header-actions">
                        <a href="" className="button button-primary">Register Now</a>
                        <div ref={hamburgerIconRef} className={isActive ? 'header-toggle-active' : 'header-toggle'} onClick={handleClick}>
                            <div key="0"></div>
                            <div key="1"></div>
                            <div key="2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
