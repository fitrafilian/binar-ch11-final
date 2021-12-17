import "./game_choice.css";

import Carousel from "../../assets/images/carousel.png";

export default function GameChoice() {
  return (
    <>
    <div className="game-choice">
        <div className="container">
            <div className="row">
                {/* -- left side -- */}
                <div className="col-4 bg-transparent">
                        <p id="content1-text1">What's so special ?</p>
                        <h4 id="content1-text2">THE GAMES</h4>
                </div>
                {/* -- right side -- */}
                <div className="col-8 bg-transparent" id="carousel-content">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Carousel} alt="First slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.07px" height="40px" fill="#fff" className="bi bi-caret-left" viewBox="0 0 16 16">
                                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.07px" height="40px" fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </button>  
                        
                        {/* <a className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" role="button" data-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.07px" height="40px" fill="#fff" className="bi bi-caret-left" viewBox="0 0 16 16">
                                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" data-bs-target="#carouselExampleIndicators" role="button" data-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34.07px" height="40px" fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Game Feature */}
    <div id="work">
    <div className="game-choice2">
        <div className="container">
        <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-1">
                <div className="icon">
                    <div className="round6"></div>
                    <div className="garis_vertikal"></div>
                    <div className="round7"></div>
                    <div className="round8"></div>
                </div>	
            {/* <div className="col-md-2"></div> */}
            </div>
            <div className="col-md-3">

                <h3>WHAT'S SO SPECIAL</h3>

                <h1>FEATURES</h1>

                <p className="features"> TRADITIONAL GAMES</p>

                <p className="features1">If you Miss your chilhood provide many traditional games here</p>
                <p className="features">GAME SUIT</p>
                <p className="features">TBD</p>
            </div>
        </div>
        
        {/* <div class="icon">
            <div className="round6"></div>
            <div className="garis_vertikal"></div>
            <div className="round7"></div>
            <div className="round8"></div>
        </div>	
            <div className="col-md-2"></div> */}
        </div>
    </div>
    </div>

</>
)
}