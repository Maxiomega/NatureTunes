import React from "react";
import './App.css'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <Container fluid className="contenedor">

            <div>
                <h1>Nature Tunes</h1>
                <Link to='/seccion1' className='btn btn-primary'>Ir a seccion 1</Link>
            </div>

            <Row>
                <Col className="box1 mt-2">Box 1</Col>
                <Col md={6} className="box2 mt-2 ">Box 2</Col>
                <Col className="box3 mt-2">Box 3</Col>
            </Row>

        </Container>


    )
}

export { Home }
