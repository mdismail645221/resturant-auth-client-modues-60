import React, { useContext, useState } from "react";
import { AuthProvider } from "../../contexts/UseContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'



const Header = ( ) =>{

    const { user, logOut } = useContext(AuthProvider);
    



    return (
        <div className="p-0 m-0">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">RESTURENT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center justify-content-center">
                            <NavLink className='me-3 text-decoration-none text-black fs-5' to="/home">Home</NavLink>
                            <NavLink className='me-3 text-decoration-none text-black fs-5' to="/product">Product</NavLink>
                            <NavLink className='me-3 text-decoration-none text-black fs-5' to="/about">About</NavLink>
                            {
                                user
                                ? 
                                    <button className="btn btn-outline-primary" onClick={logOut}><NavLink className='me-3 text-decoration-none text-black mx-2 fs-5' to="/">Logout</NavLink></button>
                                :
                                    <>
                                        <NavLink className='me-3 text-decoration-none text-black fs-5' to="/login">LogIn</NavLink>
                                        <NavLink className='me-3 text-decoration-none text-black fs-5' to="/register">Register</NavLink>
                                    </>
                                
                            }
                            {
                                user && <p>Wellcome, {user.email}</p>
                            }
            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header;