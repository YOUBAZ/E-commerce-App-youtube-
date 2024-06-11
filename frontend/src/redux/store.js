import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import favoritesReducer from '../redux/features/favorites/favoriteSlice.js'
import {getFavoritesFromLocalStorage} from '../Utils/LocalStorage.js'
import cartSliceReducer from "./features/cart/cartSlice.js";
import shopReducer from '../redux/features/shop/shopSlice.js'
const initialFavorites = getFavoritesFromLocalStorage() || [];
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        favorites: favoritesReducer,
        cart: cartSliceReducer,
        shop: shopReducer,
    },
    preloadedState: {
        favorites: initialFavorites
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: true
})
setupListeners(store.dispatch);
export default store;