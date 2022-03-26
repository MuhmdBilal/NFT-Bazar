import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap"
import "./Navbars.css"
import { Link } from "react-router-dom";
import { marketPlaceContractAddress, marketPlaceContractAbi } from '../Utils/marketPlace'
import { loadWeb3 } from '../Api/api';
function Navbars() {
    let [btnTxt, setBtTxt] = useState("Connect")

    const getAccount = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }
    }
    useEffect(() => {
        setInterval(() => {
            getAccount();
        }, 1000);
    }, []);
    return (
        <div className='fluid-container'>

            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#04111D" }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: "20px", fontWeight: "bold" }}>NFT BAZAR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" style={{ textDecoration: "none" }}><Nav.Link href="#deets" className="tagss me-md-2">Explore</Nav.Link></Link>
                            <Link to="/mint" style={{ textDecoration: "none" }}><Nav.Link href="#memes" className="tagss me-md-2">Mint NFTs</Nav.Link></Link>
                            <Link to="/mycollection" style={{ textDecoration: "none" }}><Nav.Link href="#MyNFTs" className="tagss me-md-2">My NFTs</Nav.Link></Link>
                            <Link to="/land" style={{ textDecoration: "none" }}><Nav.Link href="#Land" className="tagss me-md-2">Land</Nav.Link></Link>
                            <Link to="/dashboard" style={{ textDecoration: "none" }}><Nav.Link href="#Deshboard" className="tagss me-md-2">Dashboard</Nav.Link></Link>
                        </Nav>
                        <Navbar.Text>
                            <Button
                                className='mybutn'>
                                {btnTxt}
                            </Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navbars