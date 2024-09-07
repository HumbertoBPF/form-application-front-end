import { act, render, screen, within } from '@testing-library/react';
import { getAlimentacao } from 'api/endpoints';
import Diet from 'components/Diet';
import alimentacao from '../test-data/alimentacao.json';
import userEvent from '@testing-library/user-event';

jest.mock('api/endpoints', () => ({
    getAlimentacao: jest.fn(),
}));

beforeEach(() => {
    getAlimentacao.mockImplementation(() =>
        Promise.resolve({
            data: alimentacao,
        })
    );
});

it('should display the no restriction food items', async () => {
    const onPrevious = jest.fn();
    const onSubmit = jest.fn();

    await act(async () => {
        render(<Diet onPrevious={onPrevious} onSubmit={onSubmit} />);
    });

    expect(getAlimentacao).toBeCalledTimes(1);

    const dietSelect = screen.getByTestId('diet-select');
    await userEvent.selectOptions(dietSelect, ['Sem Restrição']);

    const food0 = screen.getByTestId('food-0');
    expect(food0).toBeInTheDocument();
    expect(food0.parentNode).toHaveTextContent(
        'Vegetais (legumes e verduras em geral)'
    );

    const food1 = screen.getByTestId('food-1');
    expect(food1).toBeInTheDocument();
    expect(food1.parentNode).toHaveTextContent('Frutas');

    const food2 = screen.getByTestId('food-2');
    expect(food2).toBeInTheDocument();
    expect(food2.parentNode).toHaveTextContent(
        'Carne gordurosa (porco, carne bovina com gordura, pele de frango)'
    );

    const food3 = screen.getByTestId('food-3');
    expect(food3).toBeInTheDocument();
    expect(food3.parentNode).toHaveTextContent(
        'Carne magra (aves, peixes, carne sem gordura)'
    );

    const food4 = screen.getByTestId('food-4');
    expect(food4).toBeInTheDocument();
    expect(food4.parentNode).toHaveTextContent(
        'Frituras ou embutidos (salgadinho frito, hambúrguer, carne salgada, presunto, salsicha, mortadela, salame, linguiça e outros)'
    );

    const food5 = screen.getByTestId('food-5');
    expect(food5).toBeInTheDocument();
    expect(food5.parentNode).toHaveTextContent('Ovos');

    const food6 = screen.getByTestId('food-6');
    expect(food6).toBeInTheDocument();
    expect(food6.parentNode).toHaveTextContent(
        'Doces (doces de qualquer tipo, bolos recheados com cobertura, biscoitos doces, refrigerantes e sucos industrializados)'
    );

    const food7 = screen.getByTestId('food-7');
    expect(food7).toBeInTheDocument();
    expect(food7.parentNode).toHaveTextContent(
        'Grãos (arroz, milho e outros grãos)'
    );

    const food8 = screen.getByTestId('food-8');
    expect(food8).toBeInTheDocument();
    expect(food8.parentNode).toHaveTextContent('Massas');

    const food9 = screen.getByTestId('food-9');
    expect(food9).toBeInTheDocument();
    expect(food9.parentNode).toHaveTextContent(
        'Leite e seus derivados (iogurte, bebida láctea, coalhada, requeijão, queijo)'
    );

    const food10 = screen.getByTestId('food-10');
    expect(food10).toBeInTheDocument();
    expect(food10.parentNode).toHaveTextContent('Pães');
});

it('should display the vegan food items', async () => {
    const onPrevious = jest.fn();
    const onSubmit = jest.fn();

    await act(async () => {
        render(<Diet onPrevious={onPrevious} onSubmit={onSubmit} />);
    });

    expect(getAlimentacao).toBeCalledTimes(1);

    const dietSelect = screen.getByTestId('diet-select');
    await userEvent.selectOptions(dietSelect, ['Vegano']);

    const food0 = screen.getByTestId('food-0');
    expect(food0).toBeInTheDocument();
    expect(food0.parentNode).toHaveTextContent(
        'Vegetais (legumes e verduras em geral)'
    );

    const food1 = screen.getByTestId('food-1');
    expect(food1).toBeInTheDocument();
    expect(food1.parentNode).toHaveTextContent('Frutas');

    const food2 = screen.getByTestId('food-2');
    expect(food2).toBeInTheDocument();
    expect(food2.parentNode).toHaveTextContent(
        'Grãos (arroz, milho e outros grãos)'
    );

    const food3 = screen.getByTestId('food-3');
    expect(food3).toBeInTheDocument();
    expect(food3.parentNode).toHaveTextContent('Massas');

    const food4 = screen.getByTestId('food-4');
    expect(food4).toBeInTheDocument();
    expect(food4.parentNode).toHaveTextContent('Pães');
});

it('should display the vegetarian food items', async () => {
    const onPrevious = jest.fn();
    const onSubmit = jest.fn();

    await act(async () => {
        render(<Diet onPrevious={onPrevious} onSubmit={onSubmit} />);
    });

    expect(getAlimentacao).toBeCalledTimes(1);

    const dietSelect = screen.getByTestId('diet-select');
    await userEvent.selectOptions(dietSelect, ['Vegetariano']);

    const food0 = screen.getByTestId('food-0');
    expect(food0).toBeInTheDocument();
    expect(food0.parentNode).toHaveTextContent(
        'Vegetais (legumes e verduras em geral)'
    );

    const food1 = screen.getByTestId('food-1');
    expect(food1).toBeInTheDocument();
    expect(food1.parentNode).toHaveTextContent('Frutas');

    const food2 = screen.getByTestId('food-2');
    expect(food2).toBeInTheDocument();
    expect(food2.parentNode).toHaveTextContent(
        'Carne magra (aves, peixes, carne sem gordura)'
    );

    const food3 = screen.getByTestId('food-3');
    expect(food3).toBeInTheDocument();
    expect(food3.parentNode).toHaveTextContent('Ovos');

    const food4 = screen.getByTestId('food-4');
    expect(food4).toBeInTheDocument();
    expect(food4.parentNode).toHaveTextContent(
        'Doces (doces de qualquer tipo, bolos recheados com cobertura, biscoitos doces, refrigerantes e sucos industrializados)'
    );

    const food5 = screen.getByTestId('food-5');
    expect(food5).toBeInTheDocument();
    expect(food5.parentNode).toHaveTextContent(
        'Grãos (arroz, milho e outros grãos)'
    );

    const food6 = screen.getByTestId('food-6');
    expect(food6).toBeInTheDocument();
    expect(food6.parentNode).toHaveTextContent('Massas');

    const food7 = screen.getByTestId('food-7');
    expect(food7).toBeInTheDocument();
    expect(food7.parentNode).toHaveTextContent(
        'Leite e seus derivados (iogurte, bebida láctea, coalhada, requeijão, queijo)'
    );

    const food8 = screen.getByTestId('food-8');
    expect(food8).toBeInTheDocument();
    expect(food8.parentNode).toHaveTextContent('Pães');
});

it('should require users to select at least one option', async () => {
    const onPrevious = jest.fn();
    const onSubmit = jest.fn();

    await act(async () => {
        render(<Diet onPrevious={onPrevious} onSubmit={onSubmit} />);
    });

    const dietSelect = screen.getByTestId('diet-select');
    await userEvent.selectOptions(dietSelect, ['Vegano']);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(0);
});

it('should call onSubmit when users submit a valid form', async () => {
    const onPrevious = jest.fn();
    const onSubmit = jest.fn();

    await act(async () => {
        render(<Diet onPrevious={onPrevious} onSubmit={onSubmit} />);
    });

    const dietSelect = screen.getByTestId('diet-select');
    await userEvent.selectOptions(dietSelect, ['Vegano']);

    const food0 = screen.getByTestId('food-0');
    await userEvent.click(food0);

    const food1 = screen.getByTestId('food-1');
    await userEvent.click(food1);

    const submitButton = screen.getByTestId('submit-button');
    await userEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith({
        type: 'Vegano',
        options: ['Vegetais (legumes e verduras em geral)', 'Frutas'],
    });
});
