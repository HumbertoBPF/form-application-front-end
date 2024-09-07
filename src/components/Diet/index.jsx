import api from 'api/http';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Diet({ onPrevious }) {
    const [diet, setDiet] = useState({});
    const [type, setType] = useState('');

    useEffect(() => {
        api()
            .get('/getAlimentacao')
            .then((response) => {
                const { data } = response;
                setDiet(data);
                setType(Object.keys(data)[0]);
            })
            .catch(() => {
                console.log('Error');
            });
    }, []);

    const onChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Form className="p-3">
            <Form.Group className="mb-3">
                <Form.Label>
                    <strong>Selecione seu tipo de alimentação</strong>
                </Form.Label>
                <Form.Select
                    name="minPressure"
                    value={type}
                    onChange={onChange}
                    aria-label="min-pressure"
                >
                    {Object.keys(diet).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <strong>
                        Preencha os tipos de alimento que você consome
                        diariamente:
                    </strong>
                </Form.Label>
                {diet[type] &&
                    diet[type].map((item, index) => (
                        <Form.Check
                            key={index}
                            id={index}
                            name="food"
                            label={item}
                        />
                    ))}
            </Form.Group>
            <Button className="mt-3" onClick={onPrevious} variant="light">
                Anterior
            </Button>
            <Button className="ms-3 mt-3" variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
}

Diet.propTypes = {
    onPrevious: PropTypes.func.isRequired,
};

export default Diet;
