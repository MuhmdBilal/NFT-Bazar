import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import "./Mint.css"
import Carousel from 'react-bootstrap/Carousel'
import tiger1 from "../../Assets/Mask Group 5.png"
import tiger2 from "../../Assets/Mask Group 7.png"
import tiger3 from "../../Assets/Mask Group 5.png";
import Slider from "react-slick";
// import { baseUrl } from "./config";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { nftContractAdress, nftContractAbi } from "../Utils/nftContract"
import { loadWeb3 } from '../Api/api'
import { toast } from 'react-toastify'

import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')
function Mint() {

    const [fileUrl, updateFileUrl] = useState(``)
    const [myIpfsHash, setIpfsHash] = useState()

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(file)
            const url = `https://ipfs.io/ipfs/${added.path}`
            console.log("the file has be uploaded to url", url);
            setIpfsHash(added.path)
            console.log("HAsh", added.path)
            updateFileUrl(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    const mint = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            console.log("No Wallet Connected");
        } else if (acc == "Wrong Network") {

            console.log("Wrong Network");
        }
        else {
            try {

                const web3 = window.web3;
                let acc = await loadWeb3();
                let nftMintContractOf = new web3.eth.Contract(nftContractAbi, nftContractAdress);
                let ownerAddress = await nftMintContractOf.methods.owner1().call();
                console.log("myMax", ownerAddress);
                if (acc == ownerAddress) {
                    if (myIpfsHash == undefined) {
                        toast.error("Please Choose an Image to mint")
                    } else {
                        await nftMintContractOf.methods.mintToken(myIpfsHash).send({
                            from: acc
                        })
                        toast.success("Transaction Confirmed")
                    }

                } else {
                    toast.error("Minting Can Only Be Performed by the Owner")

                }

            } catch (e) {
                console.log("Error while minting", e);
                toast.error("Transaction Failed")

            }
        }
    }
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-lg-8 col-11 text-start '>
                    <h2 className='mint-h2'>Mint Your New NFT</h2>
                    <div className='row '>
                        <div className='col-md-10 '>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-mint-text'>NFT Title</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='form-mint-text'>NFT Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='form-mint-text'>NFT Price</Form.Label>
                                    <Form.Control type="Number" placeholder="0" />
                                </Form.Group>
                            </Form>
                            <form >
                                <label for="myfile" className='form-mint-text'>Uplaod NFT </label>&nbsp;
                                {/* <input type="file" id="myfile" name="myfile" /> */}
                                <input
                                    type="file"
                                    onChange={onChange}
                                />
                            </form>

                            <div className='row mt-3'>
                                <div className='col-md-5 '>
                                    <div className="d-grid gap-2">
                                        <button onClick={() => mint()} className='btn btn-primary' size="lg">
                                            Mint NFT
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='mint-h2'>You Have Minted</h2>
                                {
                                    fileUrl && (
                                        <img src={fileUrl} width="600px" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-10 mint-box mt-3 mb-3 p-4 d-flex align-items-center justify-content-center '>
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
                                    className="d-block w-100"
                                    src={tiger1}
                                    alt="First slide"

                                />

                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img
                                    className="d-block w-100"
                                    src={tiger2}
                                    alt="First slide"

                                />

                            </div>
                            <div class="carousel-item">
                                <img
                                    className="d-block w-100"
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
                    {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={tiger1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={tiger1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={tiger1} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> */}

                    {/* <div className="card card-raised card-carousel" style={{border: "2px solid red"}}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                          <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                          </ol>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img className="d-block w-100" src={tiger1} alt="First slide" />

                            </div>
                            <div className="carousel-item">
                              <img className=" w-100" src={tiger2}  alt="Second slide"/>

                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100 " src={tiger3} alt="Third slide"/>

                            </div>
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <i className="material-icons">keyboard_arrow_left</i>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                    </div> */}
                    {/* <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={tiger1}
                                alt="First slide"

                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={tiger2}
                                alt="Second slide"

                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={tiger3}
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel> */}
                </div>
            </div>
        </div>
    )
}

export default Mint