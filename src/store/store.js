import { configureStore } from '@reduxjs/toolkit';
import {formReducer, productReducer} from './reducers';

const store = configureStore({
    reducer: {
        product: productReducer,
        form: formReducer,
    },
});

export default store;