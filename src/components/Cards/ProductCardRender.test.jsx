import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';


jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(),
}));

describe('ProductCard Component', () => {
    test('відображає компонент ProductCard', () => {
        render(<ProductCard id="1" name="Product" price="100" imgUrl="image.jpg" colors={['red', 'blue']}/>);
        expect(screen.getByText('Product')).toBeInTheDocument();
    });
    test('снепшот компонента Product Card', () => {
        const { asFragment } = render(
            <ProductCard id="1" name="Product" price="100" imgUrl="image.jpg" colors={['red', 'blue']} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});