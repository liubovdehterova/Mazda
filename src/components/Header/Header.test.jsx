import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import store from "../../store/store";

test('снепшот компонента Header', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});