// Імпортуємо необхідні залежності
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

// Мокуємо useDispatch
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));


// Тестуємо Modal компонент
describe('Modal component', () => {
    test('Викликає закриття модального вікна при кліку на фон', () => {
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);

        render(<Modal />);
        const modalContent = screen.getByTestId('modal-content');
        fireEvent.click(modalContent);

        expect(dispatchMock).toHaveBeenCalledWith({ type: 'products/setModalProductId', payload: null });
    });

    test('викликає функцію закриття при натисканні на кнопку з хрестиком', () => {
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);

        render(<Modal />);
        const crossButton = screen.getByTestId('cross');
        fireEvent.click(crossButton);

        expect(dispatchMock).toHaveBeenCalledWith({ type: 'products/closeModal' });
    });

    test('відображає компонент', () => {
        render(
            <Modal
                header="Додавання в кошик"
                textInfo="Додати товар в кошик?"
                actions={[
                    { label: "Так", onClick: jest.fn() },
                    { label: "Ні", onClick: jest.fn() },
                ]}
            />
        );

        // Перевірка наявності заголовка
        const titleElement = screen.getByText('Додавання в кошик');
        expect(titleElement).toBeInTheDocument();

        // Перевірка наявності текстової інформації
        const textInfoElement = screen.getByText('Додати товар в кошик?');
        expect(textInfoElement).toBeInTheDocument();

        // Перевірка наявності кнопок дій
        const yesButton = screen.getByRole('button', { name: 'Так' });
        const noButton = screen.getByRole('button', { name: 'Ні' });
        expect(yesButton).toBeInTheDocument();
        expect(noButton).toBeInTheDocument();
    });
});
