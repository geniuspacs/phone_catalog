import { usePhones } from '../hooks/usePhones';
import { Button, Card, Col, Container, Image, Modal, Row, Spinner } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { useState } from 'react';

export default function Dashboard() {

    const {data, loading} = usePhones();

    const [selectedPhone, setSelectedPhone] = useState();

    return (
        <Container fluid className="mt-5">
            {
                loading && 
                <Row className="d-flex flex-row justify-content-center align-items-center">
                    <Spinner animation="border" role="status" size="" variant="primary" className="m-0">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            }
            
            {!loading && <div className="d-block d-md-flex flex-row">
                {data.map(phone => {
                    return (
                        <Col md="3" className="mx-2" key={phone.id}>
                            <Card onClick={() => setSelectedPhone(phone)}>
                                <Card.Body className="text-center">
                                    <Card.Img src={process.env.PUBLIC_URL + '/img/phones/' + phone.imageFileName}></Card.Img>
                                    <Card.Title>
                                        {phone.manufacturer} {phone.name}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        <NumberFormat value={phone.price} suffix="€" displayType='text' className="text-primary"></NumberFormat>
                                    </Card.Subtitle>

                                    <Button className="mt-3">See more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                
                <Modal show={selectedPhone} onHide={() => setSelectedPhone(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPhone?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>Name: {selectedPhone?.name}</li>
                            <li>Manufacturer: {selectedPhone?.manufacturer}</li>
                            <li>Description: {selectedPhone?.description}</li>
                            <li>Color: {selectedPhone?.color}</li>
                            <li>Price: {selectedPhone?.price}</li>
                            <li>ImageFileName: {selectedPhone?.imageFileName}</li>
                            <li>Screen: {selectedPhone?.screen}</li>
                            <li>Processor: {selectedPhone?.processor}</li>
                            <li>Ram: {selectedPhone?.ram}</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setSelectedPhone(null)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>}
        </Container>
    );
}