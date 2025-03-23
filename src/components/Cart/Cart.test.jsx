import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from "../../store/store";
import ProductCart from "./ProductCart";

test('снепшот компонента Cart', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <Provider store={store}>
                <ProductCart id="1" imgUrl="img.png" name="Car test" price="1000000" count="1"/>
            </Provider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});