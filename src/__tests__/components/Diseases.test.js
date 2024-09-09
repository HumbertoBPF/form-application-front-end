import { fakerEN_US as faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Diseases from 'components/Diseases';

const remarks = faker.lorem.sentence();

const diseases = [
    {
        id: 1,
        name: 'Diabetes',
        choices: ['1'],
    },
    {
        id: 2,
        name: 'Problemas Cardíacos',
        choices: ['2'],
    },
    {
        id: 3,
        name: 'Pressão Alta',
        choices: ['3'],
    },
    {
        id: 4,
        name: 'Asma',
        choices: ['1'],
    },

    {
        id: 5,
        name: 'Depressão',
        choices: ['2'],
    },
    {
        id: 6,
        name: 'Ansiedade',
        choices: ['1'],
    },
    {
        id: 7,
        name: 'Colesterol Alto',
        choices: ['3'],
    },
    {
        id: 8,
        name: 'Dores nas Costas',
        choices: ['4'],
    },
    {
        id: 9,
        name: 'Dores nas Articulações',
        choices: ['1'],
    },
    {
        id: 10,
        name: 'Dores de Cabeça',
        choices: ['2'],
    },
    {
        id: 11,
        name: 'Câncer',
        choices: ['4'],
    },
    {
        id: 12,
        name: 'Infecções Sexualmente Transmissíveis',
        choices: ['1'],
    },
];

it('should call onNext when form is valid without remarks', async () => {
    const onPrevious = jest.fn();
    const onNext = jest.fn();

    render(
        <Diseases initialData={{}} onPrevious={onPrevious} onNext={onNext} />
    );

    const diabetes1Check = screen.getByTestId('1-1-check');
    await userEvent.click(diabetes1Check);

    const heartProblems2Check = screen.getByTestId('2-2-check');
    await userEvent.click(heartProblems2Check);

    const pressure3Check = screen.getByTestId('3-3-check');
    await userEvent.click(pressure3Check);

    const asma1Check = screen.getByTestId('4-1-check');
    await userEvent.click(asma1Check);

    const depression2Check = screen.getByTestId('5-2-check');
    await userEvent.click(depression2Check);

    const anxiety1Check = screen.getByTestId('6-1-check');
    await userEvent.click(anxiety1Check);

    const highColesterol2Check = screen.getByTestId('7-3-check');
    await userEvent.click(highColesterol2Check);

    const backPain4Check = screen.getByTestId('8-4-check');
    await userEvent.click(backPain4Check);

    const articulationPain1Check = screen.getByTestId('9-1-check');
    await userEvent.click(articulationPain1Check);

    const headache2Check = screen.getByTestId('10-2-check');
    await userEvent.click(headache2Check);

    const cancer4Check = screen.getByTestId('11-4-check');
    await userEvent.click(cancer4Check);

    const std1Check = screen.getByTestId('12-1-check');
    await userEvent.click(std1Check);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onNext).toBeCalledTimes(1);
    expect(onNext).toBeCalledWith({
        diseases,
        remarks: '',
    });
});

it('should call onNext when form is valid with remarks', async () => {
    const onPrevious = jest.fn();
    const onNext = jest.fn();

    render(
        <Diseases initialData={{}} onPrevious={onPrevious} onNext={onNext} />
    );

    const diabetes1Check = screen.getByTestId('1-1-check');
    await userEvent.click(diabetes1Check);

    const heartProblems2Check = screen.getByTestId('2-2-check');
    await userEvent.click(heartProblems2Check);

    const pressure3Check = screen.getByTestId('3-3-check');
    await userEvent.click(pressure3Check);

    const asma1Check = screen.getByTestId('4-1-check');
    await userEvent.click(asma1Check);

    const depression2Check = screen.getByTestId('5-2-check');
    await userEvent.click(depression2Check);

    const anxiety1Check = screen.getByTestId('6-1-check');
    await userEvent.click(anxiety1Check);

    const highColesterol2Check = screen.getByTestId('7-3-check');
    await userEvent.click(highColesterol2Check);

    const backPain4Check = screen.getByTestId('8-4-check');
    await userEvent.click(backPain4Check);

    const articulationPain1Check = screen.getByTestId('9-1-check');
    await userEvent.click(articulationPain1Check);

    const headache2Check = screen.getByTestId('10-2-check');
    await userEvent.click(headache2Check);

    const cancer4Check = screen.getByTestId('11-4-check');
    await userEvent.click(cancer4Check);

    const std1Check = screen.getByTestId('12-1-check');
    await userEvent.click(std1Check);

    const remarksInput = screen.getByTestId('remarks-input');
    await userEvent.type(remarksInput, remarks);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onNext).toBeCalledTimes(1);
    expect(onNext).toBeCalledWith({
        diseases,
        remarks,
    });
});

describe('validation', () => {
    it('should require an answer for the diabetes disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the heart problem disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the high blood pressure disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the asma disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the depression disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the anxiety disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the high colesterol disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the back pain disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the articulation pain disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the headache disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the cancer disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const std1Check = screen.getByTestId('12-1-check');
        await userEvent.click(std1Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });

    it('should require an answer for the STD disease', async () => {
        const onPrevious = jest.fn();
        const onNext = jest.fn();

        render(
            <Diseases
                initialData={{}}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        );

        const diabetes1Check = screen.getByTestId('1-1-check');
        await userEvent.click(diabetes1Check);

        const heartProblems2Check = screen.getByTestId('2-2-check');
        await userEvent.click(heartProblems2Check);

        const pressure3Check = screen.getByTestId('3-3-check');
        await userEvent.click(pressure3Check);

        const asma1Check = screen.getByTestId('4-1-check');
        await userEvent.click(asma1Check);

        const depression2Check = screen.getByTestId('5-2-check');
        await userEvent.click(depression2Check);

        const anxiety1Check = screen.getByTestId('6-1-check');
        await userEvent.click(anxiety1Check);

        const highColesterol2Check = screen.getByTestId('7-3-check');
        await userEvent.click(highColesterol2Check);

        const backPain4Check = screen.getByTestId('8-4-check');
        await userEvent.click(backPain4Check);

        const articulationPain1Check = screen.getByTestId('9-1-check');
        await userEvent.click(articulationPain1Check);

        const headache2Check = screen.getByTestId('10-2-check');
        await userEvent.click(headache2Check);

        const cancer4Check = screen.getByTestId('11-4-check');
        await userEvent.click(cancer4Check);

        const submitButton = screen.getByTestId('submit-button');
        await userEvent.click(submitButton);

        expect(onNext).toBeCalledTimes(0);
    });
});
