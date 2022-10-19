import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () =>{
    return(
        <div>
            <Container >
                <Header></Header>
                <Container className="py-5 shadow rounded vh-100">
                     <Outlet></Outlet>
                </Container>
                <Footer></Footer>
            </Container>
        </div>
    )
}


export default Main;