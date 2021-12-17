import footerImage from "../../assets/images/footer_img.png"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import instagram from "../../assets/images/Vector.svg"
import twitch from "../../assets/images/twitch.svg"

import "./footer.css"

export default function footer(){
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 bg-transparent">
                            <img id="footer-img" src={footerImage} alt="Footer_Img" width="445.47px" height="550px" />
                        </div>
                        <div className="col-6 bg-transparent subscribe" style={{marginTop: "100px"}}>
                            <h1 style={{color: "white" , fontSize: "80px"}} >NEWSLETTER SUBSCRIBE</h1>
                            <h3 style={{color: "white"}}>Want to stay in touch ?</h3>
                            <p style={{color: "white"}}>In order to start receiving our news,
                                all you have to do is enter your email address. Everything else will be taken care of by us.
                                We will send you emails containing information about game. We don’t spam.</p>
                            <form id="footer-form" className="d-flex">
                                {/* <!-- <label class="form-input-label" for="input-label">Your Email Address</label> --> */}
                                <input className="form-control col-sm-6" type="search" placeholder="Input Email" aria-label="Search" />
                                <button className="btn btn-warning" id="email-btn" type="submit">Subscribe now</button>
                            </form>
                        </div>
                        <div className="col-12 bg-transparent footer-1">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">MAIN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">GAME FEATURES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">SYSTEM REQUIREMENT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">QUOTES</a>
                                </li>
                                <li className="nav-item image">
                                    <img src={facebook} width="24.99px" height="17.99px" fill="#fff" className="bi bi-twitch" viewBox="0 0 16 16" alt="facebook" />
                                </li>
                                <li className="nav-item">
                                    <img src={twitter} width="24.99px" height="17.99px" fill="#fff" className="bi bi-twitch" viewBox="0 0 16 16" alt="twitter" />
                                </li>
                                <li className="nav-item">
                                    <img src={instagram} width="24.99px" height="17.99px" fill="#fff" className="bi bi-twitch" viewBox="0 0 16 16" alt="ig" />
                                </li>
                                <li className="nav-item">
                                    <img src={twitch} width="24.99px" height="17.99px" fill="#fff" className="bi bi-twitch" viewBox="0 0 16 16" alt="twitch" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 bg-transparent footer-2">
                            <p> © 2021 Your Games, Inc. All Rights Reserved</p>
                        </div>
                        <div className="col-6 bg-transparent footer-2">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link text-white">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white">Terms of Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" id="diff">Code of Conduct</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}