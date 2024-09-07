import { Accordion, Button, Card, Form } from 'react-bootstrap';
import states from 'common/states.json';
import pressureOptions from 'common/pressure-options.json';
import { useState } from 'react';

function PersonalData() {
    const [validated, setValidated] = useState();

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        console.log({
            full_name: event.target.fullName.value,
            national_id: event.target.nationalId.value,
            position: event.target.position.value,
            city: event.target.city.value,
            state: event.target.state.value,
            is_correct: event.target.state.value,
            titularity: event.target.titularity.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            birth_date: event.target.birthDate.value,
            gender: event.target.gender.value,
            weight: event.target.weight.value,
            height: event.target.height.value,
            min_pressure: event.target.minPressure.value,
            max_pressure: event.target.maxPressure.value,
            doNotKnow: event.target.doNotKnow.value,
        });

        setValidated(true);
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}
            className="p-3"
        >
            <Form.Group className="mb-3" controlId="full-name">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control name="fullName" type="text" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="national-id">
                <Form.Label>Matrícula/CPF</Form.Label>
                <Form.Control name="nationalId" type="text" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="position">
                <Form.Label>Cargo</Form.Label>
                <Form.Control name="position" type="text" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label>Cidade</Form.Label>
                <Form.Control name="city" type="text" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Select aria-label="Estado" name="state" required>
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
                    label="Sim"
                />

                <Form.Check id="no" name="isCorrect" type="radio" label="Não" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Titularidade</Form.Label>
                <Form.Check
                    id="titular"
                    name="titularity"
                    type="radio"
                    label="Titular"
                />

                <Form.Check
                    id="dependant"
                    name="titularity"
                    type="radio"
                    label="Dependente"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Telefone com DDD</Form.Label>
                <Form.Control name="phone" type="text" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" type="email" required />
                <Form.Control.Feedback type="invalid">
                    Insira um e-mail válido
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="birth-date">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control name="birthDate" type="date" required />
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
                    label="Feminino"
                />

                <Form.Check
                    id="male"
                    name="gender"
                    type="radio"
                    label="Masculino"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="weight">
                <Form.Label>Peso</Form.Label>
                <Form.Control name="weight" type="number" required />
                <Form.Control.Feedback type="invalid">
                    Esse campo é obrigatório
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="height">
                <Form.Label>Altura (em cm)</Form.Label>
                <Form.Control name="height" type="number" required />
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
                                &quot;máxima x mínima&quot;. Exemplos: Se a sua
                                pressão costuma ser 12x8, selecione máxima:
                                &quot;de 120 a 129&quot; e a mínima de 80 a
                                84&quot;. Se a sua pressão costuma ser 10x6,
                                selecione máxima: &quot;menor que 120&quot; e a
                                mínima: &quot;Menor que 80&quot;.
                            </Card.Body>

                            <Form.Group className="mb-3 px-3">
                                <Form.Label>
                                    Pressão sistólica (máxima)
                                </Form.Label>
                                <Form.Select
                                    name="maxPressure"
                                    aria-label="max-pressure"
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
                                label="Não sei"
                            />
                        </>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Button className="mt-3" variant="light" type="submit">
                Próximo
            </Button>
        </Form>
    );
}

export default PersonalData;
