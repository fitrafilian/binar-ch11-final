import photo1 from "../../assets/images/photo_(1).png"
import photo2 from "../../assets/images/photo_(2).png"
import photo3 from "../../assets/images/photo_(3).png"
import twitter from "../../assets/images/twitter.svg"

import "./top_score.css"

export default function TopScore(){
    return(
            <div id="game-tscores">
                <div className="container">
                    <div className="row">
                        <div className="col-6 bg-transparent left-side" id="left-side">
                            <div className="card  bg-transparent tscores-card">
                                <div className="card-body">
                                    <h5 className="card-title">TOP SCORES</h5>
                                    <p className="card-text">This top score from various games provided on this platform</p>
                                    <a id="tscores-link" href="#game-tscores" className="btn btn-warning">see more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 bg-transparent">
                            <div className="card" style={{background: "rgba(255, 255, 255, 0.08)", width: "85%", marginLeft: "22%"}}>
                                <div className="card-body" height="5px" >
                                    <img src={photo1} style={{marginRight: "20px"}} alt="" />
                                    <a className="card-link text-warning" style={{fontSize: "24px", marginRight: "40%"}}>Evan Lahti</a>
                                    <img src={twitter} width="24.99px" height="60px" fill="#FF0000" className="bi bi-twitch" viewBox="0 0 16 16" style={{opacity: "50%"}} alt="" />
                                </div>
                                <div className="card-body" style={{padding: "15px", height: "80px"}}>
                                    <h5 className="card-title text-white" style={{fontSize: "18px", marginBottom: "2px"}}>“One of my gaming highlights of the year.”</h5>
                                    <p className="card-text text-white" style={{opacity: "50%"}}>October 18, 2018</p>
                                </div>
                            </div>

                            <div className="card" style={{background: "rgba(255, 255, 255, 0.08)", width: "85%"}} >
                                <div className="card-body" style={{height: "10px"}}>
                                    <img src={photo2} style={{marginRight: "20px"}} />
                                    <a className="card-link text-warning" style={{fontSize: "24px", marginRight: "40%"}}>Jada Griffin</a>
                                    <img src={twitter} width="24.99px" height="60px" fill="#FF0000" className="bi bi-twitch" viewBox="0 0 16 16" style={{opacity: "50%"}} />
                                </div>
                                <div className="card-body" style={{padding: "70px", height: "150px"}}>
                                    <h5 className="card-title text-white" style={{fontSize: "18px", marginBottom: "2px"}}>“The next big thing in the world of streaming and survival games.”</h5>
                                    <p className="card-text text-white" style={{opacity: "50%"}}>October 18, 2018</p>
                                </div>
                            </div>

                            <div className="card" style={{background: "rgba(255, 255, 255, 0.08)", width: "85%", marginLeft: "22%"}}>
                                <div className="card-body" style={{height: "15px"}}>
                                    <img src={photo3} style={{marginRight: "20px"}} alt="" />
                                    <a className="card-link text-warning" style={{fontSize: "24px", marginRight: "30%"}}>Aroon Williams</a>
                                    <img src={twitter} width="24.99px" height="60px" fill="#FF0000" className="bi bi-twitch" viewBox="0 0 16 16" style={{opacity: "50%"}} alt="" />
                                </div>
                                <div className="card-body" style={{padding: "70px", height: "150px"}}>
                                    <h5 className="card-title text-white" style={{fontSize: "18px", marginBottom: "2px"}}>“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”</h5>
                                    <p className="card-text text-white" style={{opacity: "50%"}}>October 18, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}