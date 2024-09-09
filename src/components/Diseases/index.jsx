import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import diseases from 'common/diseases.json';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Toast from 'components/Toast';

function Diseases({ initialData, onPrevious, onNext }) {
    const [diseasesData, setDiseasesData] = useState(
        initialData.diseases ||
            diseases.map((item) => ({
                id: item.id,
                name: item.name,
                choices: [],
            }))
    );
    const [remarks, setRemarks] = useState(initialData.remarks || '');

    const [validated, setValidated] = useState(false);

    const [toastProps, setToastProps] = useState({
        title: '',
        message: '',
        show: false,
        variant: 'success',
    });

    const onSubmit = (event) => {
        event.preventDefault();

        setValidated(true);

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            setToastProps({
                title: 'Erro',
                message: 'Verifique os erros nos campos marcados.',
                show: true,
                variant: 'danger',
            });
            return;
        }

        onNext({
            diseases: diseasesData,
            remarks,
        });
    };

    const onChangeDiseases = (event, diseaseId) => {
        setDiseasesData(
            diseasesData.map((item) => {
                if (item.id === diseaseId) {
                    return {
                        ...item,
                        choices: [event.target.value],
                    };
                }

                return item;
            })
        );
    };

    return (
        <>
            <Form
                noValidate
                validated={validated}
                onSubmit={onSubmit}
                className="p-3"
            >
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            Preencha apenas as doenças que você tem ou já teve
                        </Card.Header>
                        <Accordion.Collapse className="p-3" eventKey="0">
                            <>
                                <p>
                                    (Você pode selecionar mais de um campo em
                                    cada resposta)
                                </p>
                                <Row>
                                    {diseases.map((disease, index) => (
                                        <Col
                                            className="mb-3"
                                            key={index}
                                            xs={4}
                                        >
                                            <Form.Group>
                                                <Form.Label>
                                                    <strong>
                                                        {disease.name}
                                                    </strong>
                                                </Form.Label>
                                                {disease.options.map(
                                                    (option) => (
                                                        <Form.Check
                                                            key={option.id}
                                                            id={`${disease.id}-${option.id}`}
                                                            name={disease.name}
                                                            label={option.text}
                                                            onChange={(event) =>
                                                                onChangeDiseases(
                                                                    event,
                                                                    disease.id
                                                                )
                                                            }
                                                            value={option.id}
                                                            checked={diseasesData.some(
                                                                (item) => {
                                                                    return (
                                                                        item.id ===
                                                                            disease.id &&
                                                                        item.choices.includes(
                                                                            String(
                                                                                option.id
                                                                            )
                                                                        )
                                                                    );
                                                                }
                                                            )}
                                                            required
                                                            type="radio"
                                                            data-testid={`${disease.id}-${option.id}-check`}
                                                        />
                                                    )
                                                )}
                                            </Form.Group>
                                        </Col>
                                    ))}
                                </Row>
                                <Form.Group
                                    className="mb-3"
                                    controlId="remarks"
                                >
                                    <Form.Label>
                                        <strong>Outros</strong>
                                    </Form.Label>
                                    <Form.Control
                                        name="remarks"
                                        type="text"
                                        onChange={(event) =>
                                            setRemarks(event.target.value)
                                        }
                                        value={remarks}
                                        data-testid="remarks-input"
                                    />
                                </Form.Group>
                            </>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Button className="mt-3" onClick={onPrevious} variant="light">
                    Anterior
                </Button>
                <Button
                    className="ms-3 mt-3"
                    variant="light"
                    type="submit"
                    data-testid="submit-button"
                >
                    Próximo
                </Button>
            </Form>
            <Toast
                {...toastProps}
                onClose={() => setToastProps({ ...toastProps, show: false })}
            />
        </>
    );
}

Diseases.propTypes = {
    initialData: PropTypes.object.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default Diseases;
