import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const res = await fetch('http://localhost:3001/mazda');
            return await res.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        favorites: JSON.parse(localStorage.getItem('Favorites')) || [],
        cart: JSON.parse(localStorage.getItem('Car add cart')) || [],
        products: [],
        status: 'idle',
        error: null,
        isModalOpen: false,
        modalProductId: null,
    },
    reducers: {
        addCart(state, action) {
            state.cart.push(action.payload.id);
            localStorage.setItem('Car add cart', JSON.stringify(state.cart));
        },
        addFavorite(state, action) {
            const productId = action.payload.id;
            const isFavorite = state.favorites.includes(productId);
            if (!isFavorite) {
                state.favorites.push(productId);
                localStorage.setItem('Favorites', JSON.stringify(state.favorites));
            } else {
                const indexToRemove = state.favorites.indexOf(productId);
                if (indexToRemove !== -1) {
                    state.favorites.splice(indexToRemove, 1);
                    localStorage.setItem('Favorites', JSON.stringify(state.favorites));
                }
            }
        },
        removeProduct(state, action) {
            const productIdToRemove = action.payload.id;
            const indexToRemove = state.cart.indexOf(productIdToRemove);
            if (indexToRemove !== -1) {
                state.cart.splice(indexToRemove, 1);
                localStorage.setItem('Car add cart', JSON.stringify(state.cart));
                state.countCart = state.cart.length;
            }
        },
        openModal(state) {
            state.isModalOpen = true
        },
        closeModal(state) {
            state.isModalOpen = false
        },
        setModalProductId(state, action) {
            state.modalProductId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});
const formSlice = createSlice({
    name: 'form',
    initialState: {
        isFormOpen: false
    },
    reducers: {
        openForm(state) {
            state.isFormOpen = true;
        },
        closeForm(state) {
            state.isFormOpen = false;
        },
        submitFormTrue(state) {
            localStorage.removeItem('Car add cart');
            state.isFormOpen = false;
        }
    }
})

export const { addCart, removeProduct, openModal, closeModal, setModalProductId, addFavorite } = productSlice.actions;
export const { openForm,  submitFormTrue, closeForm } = formSlice.actions;

export const productReducer = productSlice.reducer;
export const formReducer = formSlice.reducer;
