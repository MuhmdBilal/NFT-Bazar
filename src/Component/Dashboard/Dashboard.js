import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import tiger1 from "../../Assets/Mask Group 5.png"
import tiger2 from "../../Assets/Mask Group 5.png"
import tiger3 from "../../Assets/Mask Group 7.png"
import { nftContractAdress, nftContractAbi } from "../Utils/nftContract";
import { loadWeb3 } from '../Api/api';
function Dashboard() {
    let [myNftImages, setImagesNft] = useState([]);
    const [fileUrl, updateFileUrl] = useState(``)
    let [totalMints, setTotalMints] = useState();
    let [uploadedHash, setUploadedhash] = useState();
    const showNftImages = async () => {
        let acc = loadWeb3();
        if (acc == "No Wallet") {
            console.log("No Wallet Connected");
        } else if (acc == "Wrong Network") {

            console.log("Wrong Network");
        }
        else {
            const web3 = window.web3;
            let acc = await loadWeb3();
            let nftMintContractOf = new web3.eth.Contract(nftContractAbi, nftContractAdress);
            let arrayLength = await nftMintContractOf.methods.balanceOf(acc).call();
            setTotalMints(arrayLength);
            let dummyArray = [];
            let imageUrl = [];
            for (let i = 0; i < arrayLength; i++) {
                console.log("Inside loop woth index", i);
                let hash = await nftMintContractOf.methods.tokenURI(i + 1).call();
                const url = `https://ipfs.io/ipfs/${hash}`
                imageUrl.push(url)
                updateFileUrl(url)
                dummyArray.push(hash);
                setImagesNft(imageUrl);
            }
            setUploadedhash(dummyArray);
            console.log("Array Length = ", imageUrl);
        }
    }
    useEffect(() => {
        // setInterval(() => {
        showNftImages();
        // }, 2000);
    }, []);
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4'>
                <div className='col-md-12'>
                    <h2 className='mint-h2 text-start'>DashBoard</h2>
                    <div className='row d-flex justify-content-center justify-content-between'>
                    {
                            myNftImages.map((items,index) => {
                                return (
                                    <div className='col-lg-4 mt-3 mb-3'>
                                        <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                            <Card.Img variant="top" src={myNftImages[index]} height="400px" />
                                            <Card.Body>

                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={myNftImages[index]} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                                    </div>
                                                    <div className='col-9 text-start offset-1'>
                                                        <h6 style={{ color: "#00bdfe" }}>Account Name</h6>
                                                        {/* <p style={{ color: "white", fontSize: "12px" }}>Lorem Ipsum is simply dummy
                                                            text of the printing and typesetting
                                                            industry.</p> */}
                                                    </div>
                                                </div>
                                              <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                                    <div className='col-4 text-start mt-3'>
                                                        <span style={{ color: "white", fontWeight: "bold",textAlign: 'left' }}>price</span>
                                                        <p style={{ color: "white", fontWeight: "bold",textAlign: 'left' }}>0.0</p>
                                                    </div>
                                                    <div className='col-4'>
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
                                )
                            })
                        }
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                        {/* <div className='col-lg-4 mt-3 mb-3'>
                            <Card style={{ backgroundColor: "#303339", borderRadius: "5px" }}>
                                <Card.Img variant="top" src={tiger1} height="400px" />
                                <Card.Body>

                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src={tiger3} width="50px" height="50px" style={{ borderRadius: "80%" }} />
                                        </div>
                                        <div className='col-9 text-start offset-1'>
                                            <h6 style={{ color: "#00bdfe" }}>NFT BAZAR</h6>
                                            <p style={{ color: "white", fontSize: "12px" }}>The largest digital marketplace for crypto collectibles and (NFTs) non-fungible tokens. Discover buy and sell exclusive digital items.</p>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-center justify-content-between align-items-center'>
                                        <div className='col-4 text-start mt-3'>
                                            <span style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>price</span>
                                            <p style={{ color: "white", fontWeight: "bold", textAlign: 'left' }}>0.0</p>
                                        </div>
                                        <div className='col-4'>
                                            <div className="d-grid gap-2">
                                                <button className='btn btn-collection1' size="lg">
                                                    Sell
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard