import { fakerEN_US as faker } from '@faker-js/faker';
import alimentacao from '../fixtures/alimentacao.json';

const fullName = faker.person.fullName();
const identity = '0123456789';
const position = 'Desenvolvedor';
const city = 'Minha cidade';
const phone = faker.phone.number();
const email = faker.internet.email();
const birthDate = '2000-01-01';
const weight = faker.number.int({ min: 60, max: 100 });
const height = faker.number.int({ min: 150, max: 200 });

beforeEach(() => {
    cy.intercept('GET', '/getAlimentacao', {
        statusCode: 200,
        body: alimentacao,
    });
});

const fillPage1 = () => {
    cy.getByTestId('full-name-input').type(fullName);
    cy.getByTestId('document-input').type(identity);
    cy.getByTestId('position-input').type(position);
    cy.getByTestId('city-input').type(city);
    cy.getByTestId('state-select').select('SP');
    cy.getByTestId('yes-check').check();
    cy.getByTestId('titular-check').check();
    cy.getByTestId('phone-input').type(phone);
    cy.getByTestId('email-input').type(email);
    cy.getByTestId('birth-date-input').type(birthDate);
    cy.getByTestId('female-check').check();
    cy.getByTestId('weight-input').type(String(weight));
    cy.getByTestId('height-input').type(String(height));
    cy.getByTestId('min-pressure-select').select('Menor que 120');
    cy.getByTestId('max-pressure-select').select('Menor que 120');
};

const fillPage2 = () => {
    cy.getByTestId('1-1-check').click();
    cy.getByTestId('2-2-check').click();
    cy.getByTestId('3-3-check').click();
    cy.getByTestId('4-1-check').click();
    cy.getByTestId('5-2-check').click();
    cy.getByTestId('6-1-check').click();
    cy.getByTestId('7-3-check').click();
    cy.getByTestId('8-4-check').click();
    cy.getByTestId('9-1-check').click();
    cy.getByTestId('10-2-check').click();
    cy.getByTestId('11-4-check').click();
    cy.getByTestId('12-1-check').click();
};

const fillPage3 = () => {
    cy.getByTestId('diet-select').select('Vegano');
    cy.getByTestId('food-1').check();
    cy.getByTestId('food-2').check();
    cy.getByTestId('food-3').check();
};

it('should fill all the form pages and successfully submit the form', () => {
    cy.intercept('POST', '/submitFormulario', {
        statusCode: 201,
        body: undefined,
    });

    cy.visit('/');

    fillPage1();

    cy.getByTestId('submit-button').click();

    fillPage2();

    cy.getByTestId('submit-button').click();

    fillPage3();

    cy.getByTestId('submit-button').click();

    cy.getByTestId('toast').should(
        'include.text',
        'O formulário foi submetido com sucesso.'
    );
});

it('should fill all the form pages and handle error when submitting the form', () => {
    cy.visit('/');

    cy.intercept('POST', '/submitFormulario', {
        statusCode: 500,
        body: undefined,
    });

    fillPage1();

    cy.getByTestId('submit-button').click();

    fillPage2();

    cy.getByTestId('submit-button').click();

    fillPage3();

    cy.getByTestId('submit-button').click();

    cy.getByTestId('toast').should(
        'include.text',
        'Um erro ocorreu durante a submissão do formulário.'
    );
});
