import {MemoryRouter} from 'react-router-dom';
import store from "../../store/store";
import {render} from "@testing-library/react";
import { Provider } from 'react-redux';
import FormBuy from "./FormBuy";

test('снепшот компонента Form', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <Provider store={store}>
                <FormBuy />
            </Provider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});