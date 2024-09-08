import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonalData from 'components/PersonalData';
import states from 'common/states.json';
import { getRandomItem } from 'utils/random';
import { fakerEN_US as faker } from '@faker-js/faker';
import { formatToAmericanDate } from 'utils/format';

const fullName = faker.person.fullName();
const document = '0123456789';
const position = 'Desenvolvedor';
const city = 'Minha cidade';
const state = getRandomItem(states);
const phone = faker.phone.number();
const email = faker.internet.email();
const birthDate = faker.date.birthdate();
const weight = faker.number.int({ min: 60, max: 100 });
const height = faker.number.int({ min: 150, max: 200 });

it('should call onNext when form is valid without pressure values', async () => {
    const onNext = jest.fn();

    render(<PersonalData onNext={onNext} />);

    const fullNameInput = screen.getByTestId('full-name-input');
    await userEvent.type(fullNameInput, fullName);

    const documentInput = screen.getByTestId('document-input');
    await userEvent.type(documentInput, document);

    const positionInput = screen.getByTestId('position-input');
    await userEvent.type(positionInput, position);

    const cityInput = screen.getByTestId('city-input');
    await userEvent.type(cityInput, city);

    const stateSelect = screen.getByTestId('state-select');
    await userEvent.selectOptions(stateSelect, [state]);

    const yesCheck = screen.getByTestId('yes-check');
    await userEvent.click(yesCheck);

    const titularCheck = screen.getByTestId('titular-check');
    await userEvent.click(titularCheck);

    const phoneInput = screen.getByTestId('phone-input');
    await userEvent.type(phoneInput, phone);

    const emailInput = screen.getByTestId('email-input');
    await userEvent.type(emailInput, email);

    const birthDateInput = screen.getByTestId('birth-date-input');
    await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

    const maleCheck = screen.getByTestId('male-check');
    await userEvent.click(maleCheck);

    const weightInput = screen.getByTestId('weight-input');
    await userEvent.type(weightInput, String(weight));

    const heightInput = screen.getByTestId('height-input');
    await userEvent.type(heightInput, String(height));

    const doNotKnowCheck = screen.getByTestId('do-not-know-check');
    await userEvent.click(doNotKnowCheck);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onNext).toBeCalledTimes(1);
    expect(onNext).toBeCalledWith({
        full_name: fullName,
        national_id: document,
        position,
        city,
        state,
        is_correct: true,
        titularity: 'titular',
        phone,
        email,
        birth_date: formatToAmericanDate(birthDate),
        gender: 'male',
        weight: String(weight),
        height: String(height),
        min_pressure: '',
        max_pressure: '',
        know_pressure: false,
    });
});

it('should call onNext when form is valid with pressure values', async () => {
    const onNext = jest.fn();

    render(<PersonalData onNext={onNext} />);

    const fullNameInput = screen.getByTestId('full-name-input');
    await userEvent.type(fullNameInput, fullName);

    const documentInput = screen.getByTestId('document-input');
    await userEvent.type(documentInput, document);

    const positionInput = screen.getByTestId('position-input');
    await userEvent.type(positionInput, position);

    const cityInput = screen.getByTestId('city-input');
    await userEvent.type(cityInput, city);

    const stateSelect = screen.getByTestId('state-select');
    await userEvent.selectOptions(stateSelect, [state]);

    const yesCheck = screen.getByTestId('yes-check');
    await userEvent.click(yesCheck);

    const titularCheck = screen.getByTestId('titular-check');
    await userEvent.click(titularCheck);

    const phoneInput = screen.getByTestId('phone-input');
    await userEvent.type(phoneInput, phone);

    const emailInput = screen.getByTestId('email-input');
    await userEvent.type(emailInput, email);

    const birthDateInput = screen.getByTestId('birth-date-input');
    await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

    const maleCheck = screen.getByTestId('male-check');
    await userEvent.click(maleCheck);

    const weightInput = screen.getByTestId('weight-input');
    await userEvent.type(weightInput, String(weight));

    const heightInput = screen.getByTestId('height-input');
    await userEvent.type(heightInput, String(height));

    const minPressureSelect = screen.getByTestId('min-pressure-select');
    await userEvent.selectOptions(minPressureSelect, ['1']);

    const maxPressureSelect = screen.getByTestId('max-pressure-select');
    await userEvent.selectOptions(maxPressureSelect, ['1']);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onNext).toBeCalledTimes(1);
    expect(onNext).toBeCalledWith({
        full_name: fullName,
        national_id: document,
        position,
        city,
        state,
        is_correct: true,
        titularity: 'titular',
        phone,
        email,
        birth_date: formatToAmericanDate(birthDate),
        gender: 'male',
        weight: String(weight),
        height: String(height),
        min_pressure: '1',
        max_pressure: '1',
        know_pressure: true,
    });
});

describe('validation', () => {
    it('should require full name', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require identifier', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require position', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require city', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require state', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require confirmation about data correctness', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require titularity', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require phone', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require email', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should verify email format', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, 'invalid');

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require birth date', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require gender', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require weight', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require height', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it("should require min and max pressure if the user doesn't check the don't know checkbox", async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const yesCheck = screen.getByTestId('yes-check');
        await userEvent.click(yesCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require users to confirm the correctness of the data', async () => {
        const onNext = jest.fn();

        render(<PersonalData onNext={onNext} />);

        const fullNameInput = screen.getByTestId('full-name-input');
        await userEvent.type(fullNameInput, fullName);

        const documentInput = screen.getByTestId('document-input');
        await userEvent.type(documentInput, document);

        const positionInput = screen.getByTestId('position-input');
        await userEvent.type(positionInput, position);

        const cityInput = screen.getByTestId('city-input');
        await userEvent.type(cityInput, city);

        const stateSelect = screen.getByTestId('state-select');
        await userEvent.selectOptions(stateSelect, [state]);

        const noCheck = screen.getByTestId('no-check');
        await userEvent.click(noCheck);

        const titularCheck = screen.getByTestId('titular-check');
        await userEvent.click(titularCheck);

        const phoneInput = screen.getByTestId('phone-input');
        await userEvent.type(phoneInput, phone);

        const emailInput = screen.getByTestId('email-input');
        await userEvent.type(emailInput, email);

        const birthDateInput = screen.getByTestId('birth-date-input');
        await userEvent.type(birthDateInput, formatToAmericanDate(birthDate));

        const maleCheck = screen.getByTestId('male-check');
        await userEvent.click(maleCheck);

        const weightInput = screen.getByTestId('weight-input');
        await userEvent.type(weightInput, String(weight));

        const heightInput = screen.getByTestId('height-input');
        await userEvent.type(heightInput, String(height));

        const doNotKnowCheck = screen.getByTestId('do-not-know-check');
        await userEvent.click(doNotKnowCheck);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);

        const toast = screen.getByTestId('toast');
        expect(toast).toBeInTheDocument();
        expect(toast).toHaveTextContent(
            'Você deve confirmar que os dados estão corretos antes de prosseguir.'
        );
    });
});
