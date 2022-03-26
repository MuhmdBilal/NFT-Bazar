import React from 'react'
import "./Home.css"
import Card from 'react-bootstrap/Card'
import tiger1 from "../../Assets/Mask Group 5.png"
import tiger2 from "../../Assets/Mask Group 7.png"
// import tiger1 from "../../Assets/Mask Group 5.png"
function Home() {
    return (
        <div className='Home-image'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center pt-5'>
                    <div className='col-lg-6'>
                        <h2 className='text-start home-h2 mt-lg-1 mt-5 mb-4'>NFT BAZAR</h2>
                        <p className='home-p text-start pt-4 mb-4'>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                        <div className='row pt-4 mb-4' sty3e={{ border: "2px solid red" }}>
                            <div className='col-md-4 mt-4'>
                                <div className="d-grid gap-2">
                                    <button className='btn home-btn' size="lg">
                                        Explore
                                    </button>

                                </div>
                            </div>
                            <div className='col-md-4 mt-4'>
                                <div className="d-grid gap-2">
                                    <button className='btn home-btn1' size="lg">
                                        Create
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 pb-5'>
                        <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                            <div className=''>
                                <div className='col-lg-12 col-10 mint-box mt-3 mb-3 p-4 d-flex align-items-center justify-content-center '>
                                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-slide-to="0" className="active"></li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                            {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                                        </div>
                                        <div class="carousel-inner" data-bs-interval="2000">
                                            <div class="carousel-item active">
                                                <img
                                                    className="d-block"
                                                    style={{ width: "300px" }}
                                                    src={tiger1}
                                                    alt="First slide"

                                                />

                                            </div>
                                            <div class="carousel-item" data-bs-interval="2000">
                                                <img
                                                    className="d-block "
                                                    style={{ width: "300px" }}
                                                    src={tiger2}
                                                    alt="First slide"

                                                />

                                            </div>
                                            <div class="carousel-item">
                                                <img
                                                    className="d-block "
                                                    style={{ width: "300px" }}
                                                    src={tiger1}
                                                    alt="First slide"

                                                />

                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    <div className='col-2'>
                                        <img src={tiger1} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                    </div>
                                    <div className='col-6 text-start'>
                                        <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                        <p style={{ color: "white", fontSize: "12px" }}>Discover, sell, and collect extraordinary NFTs</p>
                                    </div>
                                    <div className='col-3 '>
                                        <div className="d-grid gap-2">
                                            <button className='btn btn-collection1' size="lg">
                                                Sell
                                            </button>

                                        </div>
                                    </div>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home