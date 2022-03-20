import { useContext, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import { PhoneContext } from '../contexts/PhoneContext';

export const PhoneDetails = () => {

    const phoneContext = useContext(PhoneContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(!phoneContext.selectedPhone) {
            navigate('/');
        }
    }, [phoneContext, navigate]);

    const backToList = (event) => {
        event.preventDefault();
        phoneContext.setSelectedPhone(undefined);
    }

    return (
        <Container className="mt-5">
            <Row className="d-block d-md-flex">
                <Col md="6">
                    <Image src={process.env.PUBLIC_URL + '/img/phones/' + phoneContext.selectedPhone?.imageFileName}></Image>
                </Col>
                <Col md="6">
                    <h4>{phoneContext.selectedPhone?.name}</h4>
                    <strong>Color: {phoneContext.selectedPhone?.color}</strong>
                    <p className="mt-4">Description: {phoneContext.selectedPhone?.description}</p>
                    <p>Screen: {phoneContext.selectedPhone?.screen}</p>
                    <p>Processor: {phoneContext.selectedPhone?.processor}</p>
                    <p>RAM: <NumberFormat value={phoneContext.selectedPhone?.ram} suffix="GB" displayType='text'></NumberFormat></p>
                    <h5>Price: <NumberFormat value={phoneContext.selectedPhone?.price} suffix="€" displayType='text'></NumberFormat></h5>

                    <Button className="mt-3" onClick={backToList}>Back to list</Button>
                </Col>
            </Row>
        </Container>
    );
}