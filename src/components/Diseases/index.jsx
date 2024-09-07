import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import diseases from 'common/diseases.json';
import PropTypes from 'prop-types';

function Diseases({ onPrevious }) {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Form onSubmit={onSubmit} className="p-3">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        Preencha apenas as doenças que você tem ou já teve
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <>
                            <Card.Body>
                                (Você pode selecionar mais de um campo em cada
                                resposta)
                            </Card.Body>
                            <Row className="p-3">
                                {diseases.map((disease, index) => (
                                    <Col className="mb-3" key={index} xs={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <strong>{disease.name}</strong>
                                            </Form.Label>
                                            {disease.options.map((option) => (
                                                <Form.Check
                                                    key={option.id}
                                                    id={option.id}
                                                    name={disease.name}
                                                    label={option.text}
                                                />
                                            ))}
                                        </Form.Group>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Button className="mt-3" onClick={onPrevious} variant="light">
                Anterior
            </Button>
            <Button className="ms-3 mt-3" variant="light" type="submit">
                Próximo
            </Button>
        </Form>
    );
}

Diseases.propTypes = {
    onPrevious: PropTypes.func.isRequired,
};

export default Diseases;
