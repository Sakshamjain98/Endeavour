import "./Footer.css";

import foot from "../../assets/Footkaimage.jpg";
import logo from "../../assets/logo.jpg";

export default function Footer(){
    return <>
     <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">
                    <img src={logo} alt="" srcSet="" loading="lazy"/>
                </h1>


                <address>
                    E-Cell, KIET Group Of Institution, Ghaziabad aims to induce an entrepreneurial mindset into the students and air an innovative
                    streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful
                    endeavors through networking student enterprises from campus to incubators, seeding funds and angel
                    investors to transform the newly proposed ideas into successful start-ups.<br/>

                    <a className="footer__btn" href="">Email Us</a>
                </address>

                <img src={foot} alt=""/>
                
            </div>

            <ul className="footer__nav">

                <li className="nav__item">
                    <h2 className="nav__title">Quick Links</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="">ECell KIET</a>
                        </li>

                        <li>
                            <a href="">Upstart 23</a>
                        </li>

                        <li>
                            <a href="">Startup</a>
                        </li>
                        <li>
                            <a href="">Team</a>
                        </li>
                    </ul>
                </li>



                <li className="nav__item">
                    <h2 className="nav__title">
                        Reach Out
                    </h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="">KIET Group Of Institution, Ghaziabad, 201206
                                </a>
                        </li>

                        <li>
                            <a href="">esummit@ecellkiet.com</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="legal">
                <p>© 2024. All rights reserved.</p>

                <div className="legal__links">
                    <a href=""><i className="fa fa-brands fa-facebook fa-2x"></i></a>
                    <a href=""><i className=" fa fa-brands fa-instagram fa-2x"></i></a>
					<a href=""><i className="fa fa-brands fa-twitter fa-2x"></i></a>
					<a href=""><i className="fa fa-brands fa-linkedin fa-2x"></i></a>
					<a href=""><i className="fa fa-brands fa-youtube fa-2x"></i></a>
                </div>
            </div>
        </footer>
    </>
}