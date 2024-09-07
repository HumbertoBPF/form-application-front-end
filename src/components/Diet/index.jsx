import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getAlimentacao } from 'api/endpoints';

function Diet({ onPrevious, onSubmit }) {
    const [diet, setDiet] = useState({});

    const [type, setType] = useState('');
    const [options, setOptions] = useState([]);

    const [validated, setValidated] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    useEffect(() => {
        getAlimentacao()
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
        setOptions([]);
    };

    const handleCheck = (event) => {
        const { value } = event.target;

        if (options.some((option) => option === value)) {
            setOptions(options.filter((option) => option !== value));
            return;
        }

        setOptions([...options, value]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setValidated(false);

        if (options.length === 0) {
            setIsInvalid(true);
            return;
        }

        setValidated(true);

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            return;
        }

        onSubmit({
            type,
            options,
        });
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="p-3"
        >
            <Form.Group className="mb-3">
                <Form.Label>
                    <strong>Selecione seu tipo de alimentação</strong>
                </Form.Label>
                <Form.Select
                    name="diet"
                    value={type}
                    onChange={onChange}
                    aria-label="Diet"
                    data-testid="diet-select"
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
                            onChange={handleCheck}
                            value={item}
                            data-testid={`food-${index}`}
                            isInvalid={isInvalid}
                        />
                    ))}
            </Form.Group>
            <Button className="mt-3" onClick={onPrevious} variant="light">
                Anterior
            </Button>
            <Button
                className="ms-3 mt-3"
                variant="primary"
                type="submit"
                data-testid="submit-button"
            >
                Enviar
            </Button>
        </Form>
    );
}

Diet.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Diet;
