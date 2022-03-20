import { usePhones } from '../hooks/usePhones';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { useContext } from 'react';
import { PhoneContext } from '../contexts/PhoneContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const {data, loading} = usePhones();

    const { setSelectedPhone } = useContext(PhoneContext);

    const navigate = useNavigate();

    const goToDetails = (event, phone) => {
        event.preventDefault();
        setSelectedPhone(phone);
        navigate('/details');
    }

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
            
            {!loading && <Row className="d-block d-md-flex flex-row">
                {data.map(phone => {
                    return (
                        <Col md="3" className="mx-2" key={phone.id}>
                            <Card>
                                <Card.Body className="text-center">
                                    <Card.Img src={process.env.PUBLIC_URL + '/img/phones/' + phone.imageFileName}></Card.Img>
                                    <Card.Title>
                                        {phone.manufacturer} {phone.name}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        <NumberFormat value={phone.price} suffix="€" displayType='text' className="text-primary"></NumberFormat>
                                    </Card.Subtitle>

                                    <Button className="mt-3" onClick={(e) => goToDetails(e, phone)}>See more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>}
        </Container>
    );
}