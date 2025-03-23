import {
    fetchProducts,
    productReducer,
    openModal,
    closeModal,
    setModalProductId,
    addCart,
    addFavorite,
    removeProduct,
    formReducer,
    closeForm,
    openForm,
    submitFormTrue,
} from './reducers';

describe('products reducer', () => {
    test('should handle addCart', () => {
        const initialState = {
            cart: [],
        };

        const action = addCart({id: 1});
        const nextState = productReducer(initialState, action);

        expect(nextState.cart).toEqual([1]);
    });

    test('should handle addFavorite', () => {
        const initialState = {
            favorites: [],
        };

        const action = addFavorite({id: 1});
        const nextState = productReducer(initialState, action);

        expect(nextState.favorites).toEqual([1]);
    });

    test('should handle removeProduct', () => {
        const initialState = {
            cart: [1, 2, 3],
        };

        const action = removeProduct({id: 2});
        const nextState = productReducer(initialState, action);

        expect(nextState.cart).toEqual([1, 3]);
    });

    test('should handle openModal', () => {
        const initialState = {
            isModalOpen: false,
        };

        const nextState = productReducer(initialState, openModal());

        expect(nextState.isModalOpen).toBe(true);
    });

    test('should handle closeModal', () => {
        const initialState = {
            isModalOpen: true,
        };

        const nextState = productReducer(initialState, closeModal());

        expect(nextState.isModalOpen).toBe(false);
    });

    test('should handle setModalProductId', () => {
        const initialState = {
            modalProductId: null,
        };

        const action = setModalProductId(1);
        const nextState = productReducer(initialState, action);

        expect(nextState.modalProductId).toBe(1);
    });
});

describe('form reducer', () => {
    test('should handle openForm', () => {
        const initialState = {
            isFormOpen: false,
        };

        const nextState = formReducer(initialState, openForm());

        expect(nextState.isFormOpen).toBe(true);
    });

    test('should handle closeForm', () => {
        const initialState = {
            isFormOpen: true,
        };

        const nextState = formReducer(initialState, closeForm());

        expect(nextState.isFormOpen).toBe(false);
    });

    test('should handle submitFormTrue', () => {
        const initialState = {
            isFormOpen: true,
        };

        const nextState = formReducer(initialState, submitFormTrue());

        expect(nextState.isFormOpen).toBe(false);
    });

});