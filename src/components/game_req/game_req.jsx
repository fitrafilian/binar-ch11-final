import req from "../../assets/images/requirements.png"
import "./game_req.css"

export default function GameReq(){
    return(
        <div className="game-req">
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-transparent" style={{marginTop: "50px", textAlign: "center"}}>
                        <p id="req-question">Can My Computer Run This Game ?</p>
                    </div>
                    <div className="col-12 bg-transparent" style={{marginBottom: "0"}}>
                        <h1 id="req-question">SYSTEM </h1>
                    </div>
                    <div className="col-12 bg-transparent" style={{marginBottom: "40px"}}>
                        <h1 id="req-question">REQUIREMENT</h1>
                    </div>
                        <img id="requirement" src={req} alt="Requirement" />
                </div>
            </div>
        </div>
    )
}