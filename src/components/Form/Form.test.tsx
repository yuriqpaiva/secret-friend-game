import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('Form component', () => {
  test('New participants cannot be added when input is empty', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('Add new participant if it has a name fullfilled', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  test('Duplicated names cannot be in the list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });
  test('Error message should disappear', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');

    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
