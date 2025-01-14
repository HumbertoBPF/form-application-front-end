import { Accordion, Button, Card, Form } from 'react-bootstrap';
import states from 'common/states.json';
import pressureOptions from 'common/pressure-options.json';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Toast from 'components/Toast';

function PersonalData({ initialData, onNext }) {
    const [fullName, setFullName] = useState(initialData.full_name || '');
    const [identifier, setIdentifier] = useState(initialData.national_id || '');
    const [position, setPosition] = useState(initialData.position || '');
    const [city, setCity] = useState(initialData.city || '');
    const [state, setState] = useState(initialData.state || '');
    const [isCorrect, setIsCorrect] = useState(initialData.is_correct || true);
    const [titularity, setTitularity] = useState(
        initialData.titularity || 'titular'
    );
    const [phone, setPhone] = useState(initialData.phone || '');
    const [email, setEmail] = useState(initialData.email || '');
    const [birthDate, setBirthDate] = useState(initialData.birth_date || '');
    const [gender, setGender] = useState(initialData.gender || 'male');
    const [weight, setWeight] = useState(initialData.weight || '');
    const [height, setHeight] = useState(initialData.height || '');
    const [minPressure, setMinPressure] = useState(
        initialData.min_pressure || ''
    );
    const [maxPressure, setMaxPressure] = useState(
        initialData.max_pressure || ''
    );
    const [knowPressure, setKnowPressure] = useState(
        initialData.know_pressure || true
    );

    const [validated, setValidated] = useState();

    const [toastProps, setToastProps] = useState({
        title: '',
        message: '',
        show: false,
        variant: 'success',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!isCorrect) {
            setToastProps({
                title: 'Erro',
                message:
                    'Você deve confirmar que os dados estão corretos antes de prosseguir.',
                show: true,
                variant: 'danger',
            });
            return;
        }

        const form = event.currentTarget;

        setValidated(true);

        if (form.checkValidity() === false) {
            setToastProps({
                title: 'Erro',
                message: 'Verifique os erros nos campos marcados.',
                show: true,
                variant: 'danger',
            });
            return;
        }

        const data = {
            full_name: fullName,
            national_id: identifier,
            position,
            city,
            state,
            is_correct: isCorrect,
            titularity,
            phone,
            email,
            birth_date: birthDate,
            gender,
            weight,
            height,
            min_pressure: minPressure,
            max_pressure: maxPressure,
            know_pressure: knowPressure,
        };

        onNext(data);
    };

    return (
        <>
            <Form
                noValidate
                validated={validated}
                onSubmit={onSubmit}
                className="p-3"
                method="POST"
            >
                <Form.Group className="mb-3" controlId="full-name">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control
                        data-testid="full-name-input"
                        name="fullName"
                        type="text"
                        onChange={(event) => setFullName(event.target.value)}
                        value={fullName}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="national-id">
                    <Form.Label>Matrícula/CPF</Form.Label>
                    <Form.Control
                        data-testid="document-input"
                        name="nationalId"
                        type="text"
                        onChange={(event) => setIdentifier(event.target.value)}
                        value={identifier}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="position">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                        data-testid="position-input"
                        name="position"
                        type="text"
                        onChange={(event) => setPosition(event.target.value)}
                        value={position}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                        data-testid="city-input"
                        name="city"
                        type="text"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select
                        data-testid="state-select"
                        aria-label="Estado"
                        name="state"
                        onChange={(event) => setState(event.target.value)}
                        value={state}
                        required
                    >
                        <option value="">- Nenhum -</option>
                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Os dados acima estão corretos?</Form.Label>
                    <Form.Check
                        id="yes"
                        name="isCorrect"
                        type="radio"
                        onChange={(event) =>
                            setIsCorrect(event.target.value === 'yes')
                        }
                        value="yes"
                        label="Sim"
                        required
                        checked={isCorrect}
                        data-testid="yes-check"
                    />

                    <Form.Check
                        id="no"
                        name="isCorrect"
                        type="radio"
                        onChange={(event) =>
                            setIsCorrect(event.target.value === 'yes')
                        }
                        value="no"
                        label="Não"
                        required
                        checked={!isCorrect}
                        data-testid="no-check"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Titularidade</Form.Label>
                    <Form.Check
                        id="titular"
                        name="titularity"
                        type="radio"
                        onChange={(event) => setTitularity(event.target.value)}
                        value="titular"
                        label="Titular"
                        required
                        checked={titularity === 'titular'}
                        data-testid="titular-check"
                    />

                    <Form.Check
                        id="dependant"
                        name="titularity"
                        type="radio"
                        onChange={(event) => setTitularity(event.target.value)}
                        value="dependant"
                        label="Dependente"
                        required
                        checked={titularity === 'dependant'}
                        data-testid="dependent-check"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefone com DDD</Form.Label>
                    <Form.Control
                        name="phone"
                        type="text"
                        onChange={(event) => setPhone(event.target.value)}
                        value={phone}
                        required
                        data-testid="phone-input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        required
                        data-testid="email-input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Insira um e-mail válido
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="birth-date">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control
                        name="birthDate"
                        type="date"
                        required
                        onChange={(event) => setBirthDate(event.target.value)}
                        value={birthDate}
                        data-testid="birth-date-input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Sexo biológico</Form.Label>
                    <Form.Check
                        id="female"
                        name="gender"
                        type="radio"
                        onChange={(event) => setGender(event.target.value)}
                        value="female"
                        label="Feminino"
                        checked={gender === 'female'}
                        required
                        data-testid="female-check"
                    />

                    <Form.Check
                        id="male"
                        name="gender"
                        type="radio"
                        onChange={(event) => setGender(event.target.value)}
                        value="male"
                        label="Masculino"
                        checked={gender === 'male'}
                        required
                        data-testid="male-check"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="weight">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control
                        name="weight"
                        type="number"
                        onChange={(event) => setWeight(event.target.value)}
                        value={weight}
                        required
                        data-testid="weight-input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="height">
                    <Form.Label>Altura (em cm)</Form.Label>
                    <Form.Control
                        name="height"
                        type="number"
                        onChange={(event) => setHeight(event.target.value)}
                        value={height}
                        required
                        data-testid="height-input"
                    />
                    <Form.Control.Feedback type="invalid">
                        Esse campo é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>Pressão Arterial</Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <>
                                <Card.Body>
                                    A pressão é popularmente medida como
                                    &quot;máxima x mínima&quot;. Exemplos: Se a
                                    sua pressão costuma ser 12x8, selecione
                                    máxima: &quot;de 120 a 129&quot; e a mínima
                                    de 80 a 84&quot;. Se a sua pressão costuma
                                    ser 10x6, selecione máxima: &quot;menor que
                                    120&quot; e a mínima: &quot;Menor que
                                    80&quot;.
                                </Card.Body>

                                <Form.Group className="mb-3 px-3">
                                    <Form.Label>
                                        Pressão sistólica (máxima)
                                    </Form.Label>
                                    <Form.Select
                                        name="maxPressure"
                                        aria-label="max-pressure"
                                        onChange={(event) =>
                                            setMaxPressure(event.target.value)
                                        }
                                        value={maxPressure}
                                        required
                                        disabled={!knowPressure}
                                        data-testid="max-pressure-select"
                                    >
                                        <option value="">- Nenhum -</option>
                                        {pressureOptions.map((option) => (
                                            <option
                                                key={option.id}
                                                value={option.id}
                                            >
                                                {option.text}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3 px-3">
                                    <Form.Label>
                                        Pressão sistólica (mínima)
                                    </Form.Label>
                                    <Form.Select
                                        name="minPressure"
                                        aria-label="min-pressure"
                                        onChange={(event) =>
                                            setMinPressure(event.target.value)
                                        }
                                        value={minPressure}
                                        required
                                        disabled={!knowPressure}
                                        data-testid="min-pressure-select"
                                    >
                                        <option value="">- Nenhum -</option>
                                        {pressureOptions.map((option) => (
                                            <option
                                                key={option.id}
                                                value={option.id}
                                            >
                                                {option.text}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Check
                                    className="m-3"
                                    id="do-not-know"
                                    name="doNotKnow"
                                    onChange={() =>
                                        setKnowPressure(!knowPressure)
                                    }
                                    checked={!knowPressure}
                                    label="Não sei"
                                    data-testid="do-not-know-check"
                                />
                            </>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                <Button
                    className="mt-3"
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

PersonalData.propTypes = {
    initialData: PropTypes.object.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default PersonalData;
