import { configureStore } from '@reduxjs/toolkit'
import { loginMiddleware } from '../middlewares/loginMiddleware'
import loginReducer from './reducers/loginReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { logoutMiddleware } from '../middlewares/logoutMiddleware';

const persistConfig = {
    key: "main-root",
    storage
}

const persistedReducer = persistReducer(persistConfig,loginReducer)

const store = configureStore({
    reducer:persistedReducer,
    devTools:process.env.NODE_ENV !== 'production',
    middleware:[
        loginMiddleware,
        logoutMiddleware
    ]
}) 

const Persistor = persistStore(store)

export {Persistor};
export default store;
